<template>
  <article class="video-container">
    <section class="video-container__wrapper">
      <figure>
        <video ref="videoPlayer" controls class="video-container__video">
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>
  </article>
</template>

<script>
export default {
  name: 'VideoContainer',
  data() {
    return {
      videoChunks: [],
      currentIndex: 0,
      loading: true // Variable para rastrear si se está cargando un nuevo segmento
    };
  },
  mounted() {
    // Llama a la función para cargar el primer fragmento de video al montar el componente
    this.loadNextChunk();
  },
  methods: {
    async loadNextChunk() {
      try {
        // Realiza una solicitud HTTP al servidor para obtener el siguiente fragmento de video
        const response = await fetch(`/video/${this.currentIndex}`);
        
        // Si la solicitud fue exitosa, carga el fragmento de video y lo reproduce
        if (response.ok) {
          const videoBlob = await response.blob();
          const videoUrl = URL.createObjectURL(videoBlob);
          
          // Obtiene el elemento de video
          const videoElement = this.$refs.videoPlayer;
          
          // Asigna la URL del fragmento de video al elemento de video y lo reproduce
          videoElement.src = videoUrl;
          videoElement.load();
          videoElement.play();
          
          // Incrementa el índice para el siguiente fragmento de video
          this.currentIndex++;
          
          // Llama a la función para cargar el siguiente fragmento de video después de que se reproduzca el actual
          videoElement.onended = () => {
            this.loadNextChunk();
          };
        } else {
          // Si no se encuentra más segmentos, detiene la carga automática de segmentos
          this.loading = false;
          console.error('Error al cargar el fragmento de video:', response.statusText);
        }
      } catch (error) {
        console.error('Error al cargar el fragmento de video:', error);
      }
    },
  }
};
</script>

<style scoped>

.video-container {
  position: relative;
  overflow: hidden;
  width: 700px;
  height: auto;
  margin: auto;
}


.video-container__wrapper {
  position: relative;
  padding-top: 56.25%; /* Aspect ratio 16:9 para video responsive */
}


.video-container__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

/* Media query para hacer el video responsive */
@media screen and (max-width: 768px) {
  .video-container {
    width: 90%;
    height: auto;
    padding-top: 0;
    border-radius: 5px;
    margin-left: 80px;
    margin-top: 50px;
  }
}
</style>
