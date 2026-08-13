// CONEXIÓN CON SUPABASE

const SUPABASE_URL = "https://yvcvgbsdrplzirwupieb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Zw28Rgy3udYdHO_qWT24sg_1TY9xbG2";

const sb = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);