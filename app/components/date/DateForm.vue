<script setup lang="ts">
import * as v from "valibot"
import type { FormSubmitEvent } from "@nuxt/ui";
import type { DateSchema } from "~/utils/schema/dateForm";

const { userAuth } = useAuthState();

const model = defineModel<boolean>();

function onClose() {
  model.value = false;
}

const schema = v.object({
  moodSpectrum: v.pipe(v.string(), v.nonEmpty("Please enter your mood today.")),
  place: v.pipe(v.string(), v.nonEmpty("Please enter where you want to go.")),
  foodEstablishment: v.pipe(v.string(), v.nonEmpty("Please enter where you want to eat.")),
  meetingTime:  v.pipe(v.string(), v.nonEmpty("Please enter what time you prefer.")),
})

const state = reactive({
  moodSpectrum: '',
  place: '', 
  foodEstablishment: '',
  meetingTime: ''
})

const toast = useToast()
async function onFormSubmit(event: FormSubmitEvent<DateSchema>) {
  let insert

  try {
    if (event.data) {
      insert = await useInsertDatePlan(
        event.data.moodSpectrum,
        event.data.place,
        event.data.foodEstablishment,
        event.data.meetingTime,
      );

      toast.add({ title: "Success", description: 'Form has been submitted succesfully.', color: 'success'})
      onClose()
    }
  } catch (error) {
    console.error(error)
  }
  return insert;
}

</script>

<template>
  <UForm  v-if="userAuth" :schema="schema" :state="state" class="flex flex-col gap-3" @submit.prevent="onFormSubmit">
    <UFormField label="How's your day?" name="moodSpectrum" required>
      <UInput 
        v-model="state.moodSpectrum"
        placeholder="Answer Please"
        class="w-full"
        :ui="{ base: 'py-3' }"
      />
    </UFormField>

    <UFormField label="Where do you want to go out?" name="place" required>
      <UInput 
        v-model="state.place"
        placeholder="SM MOA, Boracay, Baguio, etc..." 
        class="w-full"
        :ui="{ base: 'py-3' }"
      />
    </UFormField>

    <UFormField label="Where do you want to eat?" name="foodEstablishment" required>
      <UInput
        v-model="state.foodEstablishment"
        placeholder="Vikings, Jollibee, McDonalds, etc..."
        class="w-full"
        :ui="{ base: 'py-3' }" />
    </UFormField>

    <UFormField label="What time should we met?" name="meetingTime" required>
      <UInput v-model="state.meetingTime" type="time" />
    </UFormField>

    <USeparator class="py-4" />

    <UButton type="submit" label="Submit" variant="subtle" class="flex justify-center"/>
  </UForm>
</template>
