<script setup>
import { computed, watch, ref } from 'vue';
import EditorAccordion from '@/Components/PageBuilder/EditorMenu/EditorAccordion.vue';
import MediaLibraryModal from '@/Components/Modals/MediaLibraryModal.vue';
import PageBuilder from '@/composables/PageBuilder';
import { usePageBuilderStateStore } from '@/stores/page-builder-state';
import { useMediaLibraryStore } from '@/stores/media-library';

const mediaLibraryStore = useMediaLibraryStore();
const pageBuilderStateStore = usePageBuilderStateStore();
const pageBuilder = new PageBuilder(pageBuilderStateStore, mediaLibraryStore);
const isLoading = ref(false);

// use media library
const showMediaLibraryModal = ref(false);
// modal content
const titleMedia = ref('');
const descriptionMedia = ref('');
const firstButtonMedia = ref('');
const secondButtonMedia = ref(null);
const thirdButtonMedia = ref(null);

// get current image from store
const getBasePrimaryImage = computed(() => {
  return pageBuilderStateStore.getBasePrimaryImage;
});

const handleAddImage = function () {
  // open modal to true
  showMediaLibraryModal.value = true;

  // set media library modal standards
  titleMedia.value = 'Media Library';
  descriptionMedia.value = null;
  firstButtonMedia.value = 'Cancelar';
  secondButtonMedia.value = 'Seleccionar imagen';

  // Cargar imágenes locales al abrir el modal
  mediaLibraryStore.loadLocalImages();
};

const handleCloseModal = () => {
  showMediaLibraryModal.value = false;
  mediaLibraryStore.setCurrentImage(null);
};

const handleImageSelect = async (image) => {
  if (image && image.path) {
    try {
      isLoading.value = true;
      // Asegurarnos de que la imagen tenga la estructura correcta
      const imageData = {
        type: 'local',
        file: image.path,
        path: image.path,
        id: image.id,
        name: image.name
      };
      
      // Actualizar la imagen en el PageBuilder
      await pageBuilder.updateBasePrimaryImage(imageData);
      
      // Actualizar el estado local
      pageBuilderStateStore.setBasePrimaryImage(image.path);
      
      showMediaLibraryModal.value = false;
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<template>
  <div v-if="getBasePrimaryImage" class="space-y-2">
    <img
      class="object-cover object-center w-full cursor-pointer rounded-lg border border-gray-200"
      :src="getBasePrimaryImage"
      @click="handleAddImage"
      alt="image"
    />
    <p class="text-xs text-gray-500 text-center">Haga clic en la imagen para cambiarla</p>
  </div>
  <div v-else class="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-myPrimaryLinkColor" @click="handleAddImage">
    <div class="text-center">
      <span class="material-symbols-outlined text-gray-400 text-3xl">add_photo_alternate</span>
      <p class="text-sm text-gray-500">Haga clic para seleccionar una imagen</p>
    </div>
  </div>

  <MediaLibraryModal
    :open="showMediaLibraryModal"
    :title="titleMedia"
    :description="descriptionMedia"
    :firstButtonText="firstButtonMedia"
    :secondButtonText="secondButtonMedia"
    :thirdButtonText="thirdButtonMedia"
    @firstMediaButtonFunction="handleCloseModal"
    @secondMediaButtonFunction="handleImageSelect"
  />
</template>
