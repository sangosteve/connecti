import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://wcilsgdnhwpgrsaldble.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjaWxzZ2RuaHdwZ3JzYWxkYmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczNzgwNTcsImV4cCI6MTk4Mjk1NDA1N30.hAUcKtCfIVyz5VRMge1HP7_KxPc7nMlpp0rCq3_w-Q8"
);

export default supabase;
