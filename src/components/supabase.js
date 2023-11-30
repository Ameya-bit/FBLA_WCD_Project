import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://blrlevxupfhqzfmanjla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscmxldnh1cGZocXpmbWFuamxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNTAwMjUsImV4cCI6MjAxNjkyNjAyNX0.AxgIuf-sZX3OBb25rPVVSI4yJ6oRzYuDFPBvUyoyCvs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
