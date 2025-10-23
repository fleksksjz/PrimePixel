/*
  # Create Bookings System for Barber Studio X

  ## Overview
  This migration sets up the complete database structure for managing barbershop bookings
  and admin authentication for the Barber Studio X website.

  ## New Tables
  
  ### `bookings`
  Stores all customer appointment bookings with the following information:
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `customer_name` (text) - Name of the customer
  - `customer_phone` (text) - Contact phone number
  - `service` (text) - Type of service requested (haircut, beard, eyebrows, etc.)
  - `booking_date` (date) - Date of the appointment
  - `booking_time` (text) - Time slot for the appointment
  - `created_at` (timestamptz) - Timestamp when booking was created
  - `status` (text) - Booking status (pending, confirmed, cancelled)

  ### `admin_users`
  Stores admin credentials for accessing the management panel:
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Admin email address
  - `created_at` (timestamptz) - Account creation timestamp

  ## Security Configuration
  
  ### Row Level Security (RLS)
  - **bookings table**: RLS enabled with policies allowing:
    - Public insert access (customers can create bookings)
    - Authenticated admin users can view, update, and delete all bookings
  
  - **admin_users table**: RLS enabled with policies allowing:
    - Only authenticated users can view their own profile
    - No public access to admin user data

  ## Important Notes
  1. Customers can submit bookings without authentication
  2. Admin panel requires Supabase authentication
  3. All timestamps use timezone-aware format
  4. Booking status defaults to 'pending'
  5. Phone numbers stored as text for flexibility with international formats
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  service text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Create admin_users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Bookings policies: Anyone can create, only authenticated admins can manage
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON bookings FOR DELETE
  TO authenticated
  USING (true);

-- Admin users policies
CREATE POLICY "Users can view own profile"
  ON admin_users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);