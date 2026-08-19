import { createClient } from '@supabase/supabase-js';

// Mengambil URL dan Key dari "brankas rahasia" (Environment Variables), bukan ditulis langsung
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);  