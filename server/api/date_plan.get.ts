import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "@/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const { moodSpectrum, place, foodEstablishment, meetingTime } = getQuery(event)

  const { data, error } = await client
    .from("date_plan")
    .insert({
      mood_spectrum: moodSpectrum?.toString(),
      place: place?.toString(),
      food_establishment: foodEstablishment?.toString(),
      meeting_time: meetingTime?.toString(),
    })
    .select();

  if (error) throw error;

  return { datePlan: data };
});
