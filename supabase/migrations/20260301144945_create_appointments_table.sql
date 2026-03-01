/*
  # Create Appointments Table for DentalCare Website

  ## Summary
  Creates a table to store patient appointment requests from the website contact forms.

  ## New Tables
    - `appointments`
      - `id` (uuid, primary key) - Unique identifier for each appointment
      - `name` (text, required) - Patient's full name
      - `email` (text, required) - Patient's email address
      - `phone` (text, required) - Patient's phone number
      - `date` (date, required) - Preferred appointment date
      - `time` (time, required) - Preferred appointment time
      - `message` (text, optional) - Additional message or concerns from patient
      - `created_at` (timestamptz, default now) - Timestamp when appointment was created

  ## Security
    - Enable RLS on `appointments` table
    - Add policy to allow anyone to insert appointment requests (public form submission)
    - Future admin access can be added later for viewing appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit appointment requests"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);