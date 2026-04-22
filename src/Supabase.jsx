import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wcginnurgyqktgeysbel.supabase.co'
const supabaseKey = 'sb_publishable_q-XL0WSurxjsiGowYinC4A_q89tt-UX'
export const supabase = createClient(supabaseUrl, supabaseKey)