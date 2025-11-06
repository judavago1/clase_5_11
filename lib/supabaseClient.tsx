import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://slqyhfxswczdlbxiaiiv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscXloZnhzd2N6ZGxieGlhaWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzg5NzcsImV4cCI6MjA3Nzk1NDk3N30.3FfwKbdFUDMq3_PToo69bnnhq8I2ciCsYzjTEpDoXHI';
export const supabase = createClient(supabaseUrl, supabaseKey);
