import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fikmrhvylchpmsiomobu.supabase.co";

const supabaseKey = "sb_publishable_ESSwXzj_CR-heT7Bg2TU9Q_BKncP_ny";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
