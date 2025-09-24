"use server"

import { createServerSideClient } from "@/lib/supabase-server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signUp(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")
  
  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    redirect("/error?message=missing-credentials")
  }
  
  const supabase = createServerSideClient()

  const origin = headers().get("origin")
  const allowedOrigins = [process.env.NEXT_PUBLIC_SITE_URL, 'http://localhost:3000']
  const redirectOrigin = origin && allowedOrigins.includes(origin) ? origin : process.env.NEXT_PUBLIC_SITE_URL

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${redirectOrigin}/auth/callback`,
    },
  })

  if (error) {
    redirect("/error?message=signup-failed")
  }

  redirect("/auth/confirm")
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createServerSideClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect("/error")
  }

  redirect("/polls")
}

export async function signOut() {
  const supabase = createServerSideClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("Error signing out:", error)
    redirect("/error")
  }

  redirect("/signin")
}