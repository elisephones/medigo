import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Country = {
  id: string
  name: string
  code: string
  flag_emoji: string
  description: string
}

export type Specialty = {
  id: string
  name: string
  category: string
  icon: string
}

export type Provider = {
  id: string
  name: string
  slug: string
  country_id: string
  city: string
  address: string
  description: string
  bio: string
  phone: string
  email: string
  website: string
  profile_image_url: string
  gallery_images: string[]
  languages_spoken: string[]
  years_experience: number
  price_range: string
  is_verified: boolean
  is_active: boolean
  created_at: string
  provider_specialties?: { specialties: Specialty }[]
  countries?: Country
  reviews?: Review[]
}

export type Review = {
  id: string
  provider_id: string
  reviewer_name: string
  reviewer_country: string
  rating: number
  title: string
  body: string
  procedure_done: string
  verified_patient: boolean
  created_at: string
}

export type Inquiry = {
  id: string
  provider_id: string
  sender_name: string
  sender_email: string
  sender_country: string
  message: string
  procedure_interest: string
  status: string
}