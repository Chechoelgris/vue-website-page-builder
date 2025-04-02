<script setup>
import { ref, computed } from 'vue';
import { usePageBuilderStateStore } from '@/stores/page-builder-state';
import EditorAccordion from '../EditorMenu/EditorAccordion.vue';

const pageBuilderStateStore = usePageBuilderStateStore();
const element = computed(() => pageBuilderStateStore.getElement);

// Estado local para los elementos del menú
const menuItems = ref([
  { text: 'Inicio', url: '#' },
  { text: 'Servicios', url: '#' },
  { text: 'Nosotros', url: '#' },
  { text: 'Contacto', url: '#' }
]);

// Estado para el CTA
const ctaText = ref('Contactar');
const ctaUrl = ref('#');
const logoUrl = ref('https://via.placeholder.com/150x50');

// Métodos para actualizar el navbar
const updateMenuItem = (index, field, value) => {
  menuItems.value[index][field] = value;
  updateNavbar();
};

const addMenuItem = () => {
  menuItems.value.push({ text: 'Nuevo Item', url: '#' });
  updateNavbar();
};

const removeMenuItem = (index) => {
  menuItems.value.splice(index, 1);
  updateNavbar();
};

const updateNavbar = () => {
  if (element.value) {
    // Actualizar props del componente
    element.value.setAttribute('data-menu-items', JSON.stringify(menuItems.value));
    element.value.setAttribute('data-cta-text', ctaText.value);
    element.value.setAttribute('data-cta-url', ctaUrl.value);
    element.value.setAttribute('data-logo-url', logoUrl.value);
  }
};
</script>

<template>
  <EditorAccordion title="Navegación">
    <!-- Logo URL -->
    <div class="space-y-4 p-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">URL del Logo</label>
        <input
          type="text"
          v-model="logoUrl"
          @input="updateNavbar"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
        />
      </div>

      <!-- Menú Items -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Items del Menú</label>
        <div v-for="(item, index) in menuItems" :key="index" class="mt-2 flex items-center space-x-2">
          <input
            type="text"
            v-model="item.text"
            @input="updateMenuItem(index, 'text', $event.target.value)"
            placeholder="Texto"
            class="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
          />
          <input
            type="text"
            v-model="item.url"
            @input="updateMenuItem(index, 'url', $event.target.value)"
            placeholder="URL"
            class="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
          />
          <button
            @click="removeMenuItem(index)"
            class="inline-flex items-center rounded-md border border-transparent p-2 text-red-600 hover:bg-red-50"
          >
            <span class="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
        <button
          @click="addMenuItem"
          class="mt-2 inline-flex items-center rounded-md border border-transparent bg-myPrimaryLinkColor px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700"
        >
          <span class="material-symbols-outlined text-sm mr-1">add</span>
          Añadir Item
        </button>
      </div>

      <!-- CTA Button -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Botón CTA</label>
        <input
          type="text"
          v-model="ctaText"
          @input="updateNavbar"
          placeholder="Texto del botón"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
        />
        <input
          type="text"
          v-model="ctaUrl"
          @input="updateNavbar"
          placeholder="URL del botón"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
        />
      </div>
    </div>
  </EditorAccordion>
</template> 