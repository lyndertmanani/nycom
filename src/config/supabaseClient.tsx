import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dpjjjgckunemmnvzgzia.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwampqZ2NrdW5lbW1udnpnemlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODQwNDAsImV4cCI6MjA0OTQ2MDA0MH0.eHTBe-KIwDD9_YJWyhQadqxd_1tJWaN8htmvH0I4wso';
export const supabase = createClient(supabaseUrl, supabaseKey);
