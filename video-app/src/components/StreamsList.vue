<template>
  <section class="streamers-container">
    <article v-for="(streamer, index) in streamers" :key="index" class="streamer">
      <div class="streamer__content">
        <figure class="streamer__thumbnail">
          <img :src="getServerImageUrl(streamer.thumbnail)" :alt="streamer.name" class="streamer__thumbnail-image">
          <span class="streamer__live-indicator">{{ streamer.status }}</span>
          <p class="streamer__viewers">{{ streamer.viewers }} Watching</p>
        </figure>
        <section class="streamer__info">
          <img :src="getServerImageUrl(streamer.avatar)" :alt="`${streamer.name} Avatar`" class="streamer__profile-image">
          <span class="streamer__profile-name">{{ streamer.name }}</span>
          <h3 class="streamer__title">{{ streamer.title }}</h3>
        </section>
      </div>
    </article>
  </section>
</template>

<script>
import { apiUrl } from '../../public/config.js';

export default {
  name: 'Streamers',
  data() {
    return {
      streamers: [
        { name: 'Adin Rose', avatar: 'avatar1.jpg', thumbnail: 'stream1.jpg', status: 'Live', viewers: '56.228', title: 'Rankeds full tryhard' },
        { name: 'Lil Kitten', avatar: 'avatar3.jpg', thumbnail: 'stream3.jpg', status: 'Live', viewers: '29.357', title: 'Road to ascendent with the crew' },
        { name: 'Fernan Lol', avatar: 'avatar5.jpg', thumbnail: 'stream2.jpg', status: 'Live', viewers: '15.270', title: 'Chillin\' playing unrated' }
      ]
    };
  },
  methods: {
    getServerImageUrl(filename) {
      console.log("env", apiUrl);
      return `${apiUrl}/images/${filename}`;
      // Reemplaza '/public' con la ruta real de la carpeta 'public' en tu servidor
    }
  }
};
</script>

<style scoped>
.streamers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
}

.streamer {
    width: calc(33.33% - 20px);
    border: 2px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    border: none;
}

.streamer__content {
  position: relative;
}

.streamer__thumbnail {
  position: relative;
}

.streamer__thumbnail-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.streamer__live-indicator {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 10px;
}

.streamer__info {
  padding: 0px 40px 10px 40px;
  color: white;
}

.streamer__profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.streamer__profile-name {
  font-weight: bold;
  vertical-align: top;
  color: #ce9718;
}

.streamer__title {
    margin-top: -30px;
    margin-left: 60px;
}

.streamer__viewers {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
    border-top-left-radius: 5px;
    font-size: 12px;
}

@media screen and (max-width: 768px) {
  .streamer {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 480px) {
  .streamer {
    width: calc(100% - 20px);
  }
}
</style>
