<script setup>
import { ref, computed, onMounted } from 'vue';
import { usePageBuilderStateStore } from '@/stores/page-builder-state';
import EditorAccordion from '../EditorMenu/EditorAccordion.vue';
import ImageEditor from '@/Components/PageBuilder/EditorMenu/Editables/ImageEditor.vue';

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

// Estado para el contenedor con valores por defecto
const containerStyles = ref({
  maxWidth: 'max-w-7xl',
  horizontalMargin: 'mx-auto',
  horizontalPadding: 'px-4'
});

// Opciones para los selectores
const maxWidthOptions = [
  { value: 'max-w-full', label: 'Ancho completo' },
  { value: 'max-w-7xl', label: 'Máximo (1280px)' },
  { value: 'max-w-6xl', label: 'Grande (1152px)' },
  { value: 'max-w-5xl', label: 'Mediano (1024px)' },
  { value: 'max-w-4xl', label: 'Pequeño (896px)' }
];

const marginOptions = [
  { value: 'mx-0', label: 'Sin margen' },
  { value: 'mx-auto', label: 'Auto (centrado)' },
  { value: 'mx-4', label: '1rem' },
  { value: 'mx-8', label: '2rem' },
  { value: 'mx-12', label: '3rem' }
];

const paddingOptions = [
  { value: 'px-0', label: 'Sin padding' },
  { value: 'px-4', label: '1rem' },
  { value: 'px-8', label: '2rem' },
  { value: 'px-12', label: '3rem' },
  { value: 'px-16', label: '4rem' }
];

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

const updateContainerStyles = () => {
  if (element.value) {
    const container = element.value.querySelector('.navbar-container');
    if (container) {
      // Limpiar todas las clases relacionadas
      const classesToRemove = Array.from(container.classList).filter(cls => 
        cls.startsWith('max-w-') || 
        cls.startsWith('mx-') || 
        cls.startsWith('px-')
      );
      container.classList.remove(...classesToRemove);
      
      // Añadir las nuevas clases
      container.classList.add(
        containerStyles.value.maxWidth,
        containerStyles.value.horizontalMargin,
        containerStyles.value.horizontalPadding
      );

      // Forzar actualización del DOM
      element.value.dispatchEvent(new Event('change'));
    }
  }
};

const updateNavbar = () => {
  if (element.value) {
    // Actualizar props del componente
    element.value.setAttribute('data-menu-items', JSON.stringify(menuItems.value));
    element.value.setAttribute('data-cta-text', ctaText.value);
    element.value.setAttribute('data-cta-url', ctaUrl.value);
    element.value.setAttribute('data-logo-url', logoUrl.value);
    
    // Actualizar estilos del contenedor
    updateContainerStyles();
    
    // Forzar actualización del componente
    pageBuilderStateStore.setComponent({ ...pageBuilderStateStore.getComponent });
  }
};

const initializeContainer = () => {
  if (element.value) {
    const container = element.value.querySelector('.navbar-container');
    if (container) {
      // Aplicar estilos iniciales
      container.classList.add(
        containerStyles.value.maxWidth,
        containerStyles.value.horizontalMargin,
        containerStyles.value.horizontalPadding
      );
    }
  }
};

// Llamar a initializeContainer cuando el componente se monta
onMounted(() => {
  initializeContainer();
});
</script>

<template>
  <EditorAccordion title="Navegación">
    <div class="space-y-4 p-4">
      <!-- Logo -->
      <div class="border-b border-gray-200 pb-4">
        <h3 class="text-sm font-medium text-gray-900 mb-3">Logo</h3>
        <ImageEditor />
      </div>

      <!-- Contenedor Styles -->
      <div class="border-b border-gray-200 pb-4">
        <h3 class="text-sm font-medium text-gray-900 mb-3">Ajustes del Contenedor</h3>
        
        <!-- Max Width -->
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Ancho Máximo</label>
          <select
            v-model="containerStyles.maxWidth"
            @change="updateNavbar"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
          >
            <option v-for="option in maxWidthOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <!-- Horizontal Margin -->
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Margen Horizontal</label>
          <select
            v-model="containerStyles.horizontalMargin"
            @change="updateNavbar"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
          >
            <option v-for="option in marginOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <!-- Horizontal Padding -->
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Padding Horizontal</label>
          <select
            v-model="containerStyles.horizontalPadding"
            @change="updateNavbar"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-myPrimaryLinkColor focus:ring-myPrimaryLinkColor sm:text-sm"
          >
            <option v-for="option in paddingOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
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