-- Creating customers and enrollments tables with proper structure
-- Create customers table
CREATE TABLE IF NOT EXISTS public.customers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    country VARCHAR(100),
    experience_level VARCHAR(50),
    motivation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create enrollments table
CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
    course_id VARCHAR(100) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    payment_status VARCHAR(50) DEFAULT 'pending',
    amount DECIMAL(10,2),
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_customers_email ON public.customers(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_customer_id ON public.enrollments(customer_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);

-- Enable Row Level Security
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for your security requirements)
CREATE POLICY IF NOT EXISTS "Allow public read access on customers" ON public.customers
    FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Allow public insert on customers" ON public.customers
    FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public update on customers" ON public.customers
    FOR UPDATE USING (true);

CREATE POLICY IF NOT EXISTS "Allow public read access on enrollments" ON public.enrollments
    FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Allow public insert on enrollments" ON public.enrollments
    FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public update on enrollments" ON public.enrollments
    FOR UPDATE USING (true);
