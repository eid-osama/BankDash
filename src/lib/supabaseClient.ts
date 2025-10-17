import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kcgufkmpjbclwizxvgoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZ3Vma21wamJjbHdpenh2Z29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MzM0MzEsImV4cCI6MjA3NjIwOTQzMX0.lb-Gq14RUgQ1qsA1bJyJvaDvQbGii1ItCYKHm-f_ZrA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
