<script setup>
import { ref, computed } from 'vue';
import { usePageBuilderStateStore } from '@/stores/page-builder-state';

const pageBuilderStateStore = usePageBuilderStateStore();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Obtener la imagen del logo desde el PageBuilder
const logoImage = computed(() => {
  return pageBuilderStateStore.getBasePrimaryImage;
});

// Props editables que se pueden personalizar desde el editor
const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { text: 'Inicio', url: '#' },
      { text: 'Servicios', url: '#' },
      { text: 'Nosotros', url: '#' },
      { text: 'Contacto', url: '#' }
    ]
  },
  ctaText: {
    type: String,
    default: 'Contactar'
  },
  ctaUrl: {
    type: String,
    default: '#'
  }
});
</script>

<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <!-- Logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a :href="props.ctaUrl" class="flex items-center">
            <img class="h-8 w-auto sm:h-10" :src="logoImage" alt="Logo">
          </a>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden space-x-10 md:flex">
          <a 
            v-for="item in props.menuItems" 
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
            :href="props.ctaUrl"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-myPrimaryLinkColor px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
          >
            {{ props.ctaText }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="-my-2 -mr-2 md:hidden">
          <button 
            @click="toggleMobileMenu"
            type="button" 
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <span class="material-symbols-outlined">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          v-for="item in props.menuItems"
          :key="item.text"
          :href="item.url"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          {{ item.text }}
        </a>
        <a
          :href="props.ctaUrl"
          class="block w-full text-center rounded-md bg-myPrimaryLinkColor px-4 py-2 text-base font-medium text-white hover:bg-green-700"
        >
          {{ props.ctaText }}
        </a>
      </div>
    </div>
  </div>
</template> 