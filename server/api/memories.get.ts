import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "@/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const { data, error } = await client
    .from("index_memories")
    .select(` *, images(id, image_url, unique_id)`)
    .order("date", { ascending: true });

  if (error) throw error;

  return data;
});
