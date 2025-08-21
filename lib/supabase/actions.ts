"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // safe: only runs on server
)

export async function upsertCustomer(data: {
  email: string
  first_name: string
  last_name: string
  phone: string
  country: string
}) {
  // check if customer exists
  const { data: existing } = await supabase
    .from("customers")
    .select("*")
    .eq("email", data.email)
    .single()

  if (existing) return existing

  // insert new customer
  const { data: newCustomer, error } = await supabase
    .from("customers")
    .insert([data])
    .select()
    .single()

  if (error) throw new Error(error.message)
  return newCustomer
}
