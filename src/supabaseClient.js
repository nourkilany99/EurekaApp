import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wcginnurgyqktgeysbel.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_q-XL0WSurxjsiGowYinC4A_q89tt-UX';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
