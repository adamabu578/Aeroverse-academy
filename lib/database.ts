import { supabase } from "./supabase/client"
import { createServerClient } from "./supabase/server"

export interface Customer {
  id?: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  date_of_birth?: string
  country?: string
  city?: string
  address?: string
}

export interface Enrollment {
  id?: string
  customer_id: string
  course_id: string
  course_name: string
  payment_status: "pending" | "completed" | "failed"
  payment_amount: number
  payment_method?: string
  status: "active" | "completed" | "cancelled"
}

// Customer functions
export async function createCustomer(customer: Customer) {
  try {
    console.log("[v0] Creating customer with data:", customer)
    const { data, error } = await supabase.from("customers").insert([customer]).select().single()

    if (error) {
      console.error("[v0] Error creating customer:", error)
      throw new Error(`Failed to create customer: ${error.message}`)
    }

    console.log("[v0] Customer created successfully:", data)
    return data
  } catch (err) {
    console.error("[v0] Exception in createCustomer:", err)
    throw err
  }
}

export async function getCustomerByEmail(email: string) {
  try {
    console.log("[v0] Looking up customer by email:", email)
    const { data, error } = await supabase.from("customers").select("*").eq("email", email).single()

    if (error && error.code !== "PGRST116") {
      console.error("[v0] Error getting customer by email:", error)
      throw new Error(`Failed to get customer: ${error.message}`)
    }

    console.log("[v0] Customer lookup result:", data ? "Found" : "Not found")
    return data
  } catch (err) {
    console.error("[v0] Exception in getCustomerByEmail:", err)
    throw err
  }
}

export async function updateCustomer(id: string, updates: Partial<Customer>) {
  const { data, error } = await supabase.from("customers").update(updates).eq("id", id).select().single()

  if (error) throw error
  return data
}

// Enrollment functions
export async function createEnrollment(enrollment: Enrollment) {
  try {
    console.log("[v0] Creating enrollment with data:", enrollment)
    const { data, error } = await supabase.from("enrollments").insert([enrollment]).select().single()

    if (error) {
      console.error("[v0] Error creating enrollment:", error)
      throw new Error(`Failed to create enrollment: ${error.message}`)
    }

    console.log("[v0] Enrollment created successfully:", data)
    return data
  } catch (err) {
    console.error("[v0] Exception in createEnrollment:", err)
    throw err
  }
}

export async function getCustomerEnrollments(customerId: string) {
  const { data, error } = await supabase
    .from("enrollments")
    .select("*")
    .eq("customer_id", customerId)
    .order("enrollment_date", { ascending: false })

  if (error) throw error
  return data
}

export async function updateEnrollmentPaymentStatus(
  enrollmentId: string,
  status: "pending" | "completed" | "failed",
  paymentMethod?: string,
) {
  const { data, error } = await supabase
    .from("enrollments")
    .update({
      payment_status: status,
      payment_method: paymentMethod,
    })
    .eq("id", enrollmentId)
    .select()
    .single()

  if (error) throw error
  return data
}

// Server-side functions for admin operations
export async function getAllCustomers() {
  const supabase = createServerClient()
  const { data, error } = await supabase.from("customers").select("*").order("created_at", { ascending: false })

  if (error) throw error
  return data
}

export async function getAllEnrollments() {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("enrollments")
    .select(`
      *,
      customers (
        first_name,
        last_name,
        email
      )
    `)
    .order("enrollment_date", { ascending: false })

  if (error) throw error
  return data
}
