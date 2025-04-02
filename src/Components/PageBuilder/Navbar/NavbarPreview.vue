<script setup>
import { computed } from 'vue';
import { usePageBuilderStateStore } from '@/stores/page-builder-state';

const pageBuilderStateStore = usePageBuilderStateStore();
const element = computed(() => pageBuilderStateStore.getElement);

// Obtener la imagen del logo desde el PageBuilder
const logoImage = computed(() => {
  return pageBuilderStateStore.getBasePrimaryImage;
});

// Computed properties para obtener los datos del navbar
const menuItems = computed(() => {
  try {
    return JSON.parse(element.value?.getAttribute('data-menu-items') || '[]');
  } catch {
    return [];
  }
});

const ctaText = computed(() => element.value?.getAttribute('data-cta-text') || 'Contactar');
const ctaUrl = computed(() => element.value?.getAttribute('data-cta-url') || '#');
</script>

<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <!-- Logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a :href="ctaUrl" class="flex items-center">
            <img class="h-8 w-auto sm:h-10" :src="logoImage" alt="Logo">
          </a>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden space-x-10 md:flex">
          <a
            v-for="item in menuItems"
            :key="item.text"
            :href="item.url"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {{ item.text }}
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            :href="ctaUrl"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-myPrimaryLinkColor px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
          >
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template> 