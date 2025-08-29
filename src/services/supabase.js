import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jnmcjrzftcwhddjyuoqt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpubWNqcnpmdGN3aGRkanl1b3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzUxNDQsImV4cCI6MjA3MjA1MTE0NH0.SkjCla583sIC07b6aO7uabO5X5XrAj-XHV-4AZmRIxU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
