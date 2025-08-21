// import { createClient } from "@supabase/supabase-js"
// import { cookies } from "next/headers"

// export function createServerClient() {
//   const cookieStore = cookies()

//   return createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!
//   )
// }

// lib/supabase/client.ts
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Safe to use in browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
