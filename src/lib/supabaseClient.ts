import { createClient } from "@supabase/supabase-js";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.trim();

if (!supabaseUrl.startsWith("http")) {
  if (supabaseUrl.startsWith("ey")) {
    throw new Error(
      "Invalid NEXT_PUBLIC_SUPABASE_URL: It looks like you pasted an API Key (starting with 'ey...') instead of the Project URL. The URL should look like 'https://xyz.supabase.co'. Check your .env.local file."
    );
  }
  throw new Error(
    `Invalid NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl}. URL must start with 'http://' or 'https://'. Check your .env.local file.`,
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
