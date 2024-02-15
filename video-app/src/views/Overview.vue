<template>
  <div>
    <header class="fixed-header">
      <div class="logo">
        <img src="../assets/icons/main-logo.png" alt="Logo" class="logo__image" />
      </div>

      <NavigationBar />
    </header>

    <VerticalMenu />

    <main class="main-content">
      <GeneralInfo class="general-info" />

      <TopStreamers class="top-streamers" />

      <div class="additional-info">
        <p>TRENDING</p>
        <h1 class="additional-info_title">#Play With Valorant</h1>
        <div class="title-container">
          <div class="title selected">Top Streamers</div>
          <div class="title">Currently Online</div>
          <div class="title">Verified</div>
        </div>
      </div>

      <StreamsList class="streams-list" />

      <router-view class="router-view" />
    </main>
  </div>
</template>

<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import VerticalMenu from "../components/VerticalMenu.vue";
import GeneralInfo from "../components/GeneralInfo.vue";
import TopStreamers from "../components/TopStreamers.vue";
import StreamsList from "../components/StreamsList.vue";
</script>

<style scoped>

.fixed-header {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.logo {
    margin-left: 20px;
    position: fixed;
    top: 10px;
}

.logo__image {
  width: 80px;
}

.main-content {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 20px;
  padding-top: 120px;
  padding-left: 100px;
  padding-right: 100px;
}

.additional-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.additional-info > * {
  margin-bottom: 20px;
  color: gray;
  margin-left: 70px;
}

.title-container {
  display: flex;
  font-weight: bold;
  color: lightgray;
  cursor: pointer;
}

.title {
  margin-right: 20px;
  text-align: left;
}

.additional-info_title {
  margin-top: -20px;
  color: white;
}

.selected {
  text-decoration-line: underline;
  color: #e5a81b;
}

.streams-list {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .logo {
    margin-left: 10px;
  }

  .logo__image {
    width: 60px;
  }

  .main-content {
    grid-template-columns: 100%;
    padding: 20px;
  }

  .additional-info_title {
    margin-top: -10px;
    font-size: 24px;
  }
}
</style>
