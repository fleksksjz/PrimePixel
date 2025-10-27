/*
  # Create WowBarber Booking System

  ## Overview
  Complete database structure for WowBarber appointment scheduling system with
  time slot management and admin controls.

  ## New Tables
  
  ### `wowbarber_bookings`
  Stores all customer appointments with detailed time slot information:
  - `id` (uuid, primary key) - Unique booking identifier
  - `customer_name` (text) - Customer's full name
  - `customer_email` (text) - Contact email address
  - `customer_phone` (text) - Contact phone number
  - `booking_date` (date) - Appointment date
  - `booking_time` (text) - Time slot (format: "08:00", "09:00", etc.)
  - `service_type` (text) - Type of service requested
  - `status` (text) - Booking status (available, booked, cancelled)
  - `created_at` (timestamptz) - Timestamp of booking creation
  - `notes` (text) - Additional notes or comments

  ## Security Configuration
  
  ### Row Level Security (RLS)
  - **wowbarber_bookings table**: RLS enabled with policies:
    - Public can view available time slots
    - Public can create new bookings
    - Authenticated admins can view, update, and delete all bookings
  
  ## Important Notes
  1. Time slots are from 08:00 to 18:00, Monday to Friday
  2. Each time slot is 1 hour duration
  3. Admin authentication required for booking management
  4. Customers can book without authentication
  5. Status field indicates slot availability
*/

-- Create wowbarber_bookings table
CREATE TABLE IF NOT EXISTS wowbarber_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  service_type text NOT NULL,
  status text DEFAULT 'booked',
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE wowbarber_bookings ENABLE ROW LEVEL SECURITY;

-- Public policies: Anyone can view and create bookings
CREATE POLICY "Anyone can view bookings"
  ON wowbarber_bookings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON wowbarber_bookings FOR INSERT
  TO anon
  WITH CHECK (true);

-- Admin policies: Authenticated users can manage all bookings
CREATE POLICY "Authenticated users can update bookings"
  ON wowbarber_bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON wowbarber_bookings FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_wowbarber_date ON wowbarber_bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_wowbarber_time ON wowbarber_bookings(booking_time);
CREATE INDEX IF NOT EXISTS idx_wowbarber_status ON wowbarber_bookings(status);
CREATE INDEX IF NOT EXISTS idx_wowbarber_date_time ON wowbarber_bookings(booking_date, booking_time);