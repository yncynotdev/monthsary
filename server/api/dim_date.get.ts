import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "@/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const { filter } = getQuery(event)

  if (!filter) return;

  const { data, error } = await client
    .from("dim_date")
    .select("*")
    .neq("date", filter.toString())
    .order("date", { ascending: false });

  if (error) throw error;

  return data;
});
