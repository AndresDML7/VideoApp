<template>
  <section class="top-streamers top-streamers--container">
    <div class="top-streamers__wrapper">
      <h2 class="top-streamers__title">Top Streamers</h2>
      <div class="top-streamers__list">
        <article class="streamer top-streamers__item" v-for="(streamer, index) in streamers" :key="index">
          <div class="streamer__content top-streamers__content">
            <span class="streamer__number top-streamers__number">0{{ index + 1 }}</span>
            <figure class="streamer__avatar top-streamers__avatar">
              <img :src="`${apiUrl}/images/${streamer.avatar}`" :alt="'Avatar de ' + streamer.name" class="streamer__image top-streamers__image">
            </figure>
            <div class="streamer__info top-streamers__info">
              <div class="streamer__name-wrapper top-streamers__name-wrapper">
                <h3 class="streamer__name top-streamers__name">{{ streamer.name }}</h3>
                <img src="../assets/icons/verified-icon.png" alt="Icono de verificación" class="streamer__verified-icon top-streamers__verified-icon">
              </div>
              <p class="streamer__followers top-streamers__followers">Followers: {{ streamer.followers }}</p>
            </div>
            <div class="online-status top-streamers__status">
              <span :class="'online-status-label ' + streamer.status">{{ streamer.status }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { apiUrl } from '../../public/config.js';

export default {
  data() {
    return {
      apiUrl: apiUrl,
      streamers: [
        { name: 'Adin Rose', avatar: 'avatar1.jpg', followers: 9535, status: 'Online' },
        { name: 'Dream', avatar: 'avatar2.jpg', followers: 8620, status: 'Offline' },
        { name: 'Lil Kitten', avatar: 'avatar3.jpg', followers: 7950, status: 'Online' },
        { name: 'Spreen', avatar: 'avatar4.jpg', followers: 6015, status: 'Online' },
      ]
    };
  }
};
</script>


<style scoped>
.top-streamers {
    color: white;
    background-color: #221642;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 
      0 0 10px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1);
    margin: auto;
    margin-left: 80px;
    width: min-content;
}

.top-streamers__wrapper {
  background-color: #221642;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.1);
}

.top-streamers__title {
  color: white;
  font-size: 24px;
  margin-top: -4px;
  margin-bottom: 30px;
}

.top-streamers__list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
  margin-left: -20px;
  width: auto;
}

.top-streamers__item {
  margin-right: 20px;
  margin-top: -10px;
  flex: 1 0 calc(50% - 10px); /* Distribuye los elementos en dos columnas con espacio entre ellos */
}

.top-streamers__content {
  display: flex;
  align-items: center;
}

.top-streamers__avatar {
  margin-right: 10px;
  margin-left: 15px;
}

.top-streamers__image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.top-streamers__info {
  font-size: 14px;
  inline-size: max-content;
}

.top-streamers__name {
  color: #ce9718;
}

.top-streamers__name-wrapper {
  display: flex;
  align-items: center;
  margin-top: -10px;
}

.top-streamers__verified-icon {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}

.top-streamers__followers {
    margin-top: -10px;
    color: lightgray;
}

.top-streamers__number {
  padding-left: 20px;
  color: gray;
}

.top-streamers__status {
  padding-left: 70px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  margin-left: auto;
}

.online-status-label {
  border-radius: 20px;
  padding: 5px 10px;
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.2);
}

.Online{
  background-color: green;
}

.Offline {
  background-color: gray;
}

@media (max-width: 768px) {
  .top-streamers__item {
    flex: 1 0 100%; /* Cambiamos a una columna en dispositivos pequeños */
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .top-streamers__number {
    padding-left: 10px;
  }
}
</style>
