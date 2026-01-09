<script setup lang="ts">
import type { IndexMemories, MockGallery } from "~/types/types";

const { userAuth } = useAuthState();

const mockItems = ref<MockGallery[]>([]);
const fetchedItems = ref<IndexMemories[]>([]);

const { data: memories } = await useFetchMemories();

onMounted(async () => {
  mockItems.value = getMockGallery();
  fetchedItems.value = memories.value
});

const items = computed(() => {
  return !userAuth.value ? mockItems.value : fetchedItems.value;
})
</script>

<template>
  <section
    id="gallery"
    class="flex flex-col w-full h-dvh items-center gap-10 pb-20 pt-10"
  >
    <h2 class="drop-shadow-latte-primary text-3xl lg:text-5xl">Memories</h2>
    <div class="px-4">
      <p class="text-sm lg:text-lg">
        Here lies our precious memories that we did together, from the beginning
        until now.
        <span>
          <NuxtLink class="text-latte-primary" href="/gallery"
            >See more...
          </NuxtLink>
        </span>
      </p>
    </div>
    <div class="w-full max-w-screen lg:w-[1000px] px-4">
      <MemoriesCarousel :items="items" />
    </div>
  </section>
</template>
