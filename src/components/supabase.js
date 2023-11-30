import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://blrlevxupfhqzfmanjla.supabase.co";
const supabaseKey =
  "SUPABASE_KEY_REDACTED";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
