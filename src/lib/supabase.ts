import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Booking {
  id: string;
  customer_name: string;
  customer_phone: string;
  service: string;
  booking_date: string;
  booking_time: string;
  created_at: string;
  status: string;
}
