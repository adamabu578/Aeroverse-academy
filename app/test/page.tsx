"use client" // only if you're in App Router
import { useEffect, useState } from "react"
// Update the import path below to the actual location of your Supabase client file
import { supabase } from "@/lib/supabase/client"

export default function TestPage() {
  const [customers, setCustomers] = useState<any[]>([])

  useEffect(() => {
    async function fetchCustomers() {
      const { data, error } = await supabase.from("customers").select("*")
      if (error) {
        console.error("Error fetching customers:", error)
      } else {
        console.log("Fetched customers:", data)
        setCustomers(data)
      }
    }
    fetchCustomers()
  }, [])

  return (
    <div>
      <h1>Test Supabase Customers</h1>
      <pre>{JSON.stringify(customers, null, 2)}</pre>
    </div>
  )
}
