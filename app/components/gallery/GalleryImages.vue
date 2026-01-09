<script setup lang="ts">
import dayjs from "dayjs";
import type { DimDate, Images } from "@/types/types";

const imageUrls = ref<Images[] | string[]>([]);
const dates = ref<DimDate[] | null>([]);

const { userAuth } = useAuthState();
const { data: images } = await useFetchImage()
const { data: dimDate } = await useFetchDimDateFilter(["2025-02-14"]);

onMounted(async () => {
  if (!userAuth.value) {
    imageUrls.value = getMockImages();
  } else {
    dates.value = dimDate.value;
    imageUrls.value = images.value;
  }
});
</script>

<template>
  <ul 
    v-if="!userAuth"
    class="flex flex-row flex-wrap w-full object-cover gap-5 lg:gap-2 px-6 lg:px-24"
  >
    <li v-for="(image, index) in imageUrls" :key="index">
      <img
        v-if="!userAuth" 
        :src="image"
        alt="It is an image"
        class="flex-1 w-full lg:w-64 h-96 rounded-md"
      >
    </li>
  </ul>
  <!-- FIXME: Layout shuffling when adding gap or any space between <NuxtImg/> -->
  <ul 
    v-else 
    class="flex flex-col w-full object-cover gap-5 lg:gap-24 px-6 lg:px-24"
  >
    <li 
      v-for="(date, dateIndex) in dates"
      :key="dateIndex"
      class="flex flex-col gap-10"
    >
      <h2 class="font-bold lg:text-3xl text-xl drop-shadow-latte-primary">
        {{ dayjs(date.date).format("MMMM DD, YYYY") }}
      </h2>
      <ul class="flex justify-start flex-wrap px-6 lg:px-0">
        <li 
          v-for="(imageUrl, imageUrlIndex) in imageUrls"
          :key="imageUrlIndex"
        >
          <img
            v-if="imageUrl.date_id === date.date" 
            :src="imageUrl.image_url"
            alt="It is an image"
            class="w-full lg:w-64 h-96 rounded-md">
        </li>
      </ul>
    </li>
  </ul>
</template>
