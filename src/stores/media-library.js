import { defineStore } from 'pinia';

export const useMediaLibraryStore = defineStore('mediaLibrary', {
  state: () => ({
    currentImage: null,
    currentPreviewImage: null,
    localImages: [], // Array para almacenar las imágenes locales
  }),
  getters: {
    getCurrentImage(state) {
      return state.currentImage;
    },
    getCurrentPreviewImage(state) {
      return state.currentPreviewImage;
    },
    getLocalImages(state) {
      return state.localImages;
    }
  },
  actions: {
    setCurrentImage(payload) {
      this.currentImage = payload;
    },
    setCurrentPreviewImage(payload) {
      this.currentPreviewImage = payload;
    },
    setLocalImages(payload) {
      this.localImages = payload;
    },
    async loadLocalImages() {
      try {
        // Cargar las imágenes del directorio assets
        const images = import.meta.glob('/src/assets/images/*.*', { eager: true });
        
        const imageList = Object.entries(images).map(([path, module]) => {
          const name = path.split('/').pop();
          return {
            id: crypto.randomUUID(),
            name,
            path: module.default,
            type: 'image/*',
            file: module.default
          };
        });
        
        // Ordenar las imágenes por nombre
        imageList.sort((a, b) => a.name.localeCompare(b.name));
        
        this.setLocalImages(imageList);
      } catch (error) {
        console.error('Error cargando imágenes:', error);
        this.setLocalImages([]);
      }
    },
    clearCurrentImage() {
      this.currentImage = null;
      this.currentPreviewImage = null;
    }
  },
});
