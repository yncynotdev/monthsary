import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "@/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const { range } = getQuery(event)

  if (!range) return;

  const { data, error } = await client
    .from("roadmap")
    .select(`*, images (id, image_url, unique_id)`)
    .lte("index", range.toString())
    .neq("index", 2)
    .order("index", { ascending: true });

  if (error) throw error;

  return data;
})
