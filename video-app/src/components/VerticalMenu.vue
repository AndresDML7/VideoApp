<template>
  <div class="vertical-menu">
    <div class="menu-icon vertical-menu__icon" @click="toggleMenu">
      <img src="../assets/icons/menu-icon.png" alt="Menú" class="menu-icon__image vertical-menu__icon-image" />
    </div>

    <div class="vertical-bar vertical-menu__bar" :class="{ 'vertical-menu__bar--hide': !isMenuOpen }">
      <div class="nav-icons vertical-menu__icons">
        <div class="nav-icons__item vertical-menu__item selected-icon">
          <img src="../assets/icons/home-icon.png" alt="Ícono 1" class="icon nav-icons__icon vertical-menu__icon" />
        </div>
        <div class="nav-icons__item vertical-menu__item">
          <img src="../assets/icons/camera-icon.png" alt="Ícono 2" class="icon nav-icons__icon vertical-menu__icon" />
        </div>
        <div class="nav-icons__item vertical-menu__item">
          <img src="../assets/icons/rocket-icon.png" alt="Ícono 3" class="icon nav-icons__icon vertical-menu__icon" />
        </div>
        <div class="nav-icons__item vertical-menu__item">
          <img src="../assets/icons/star-icon.png" alt="Ícono 4" class="icon nav-icons__icon vertical-menu__icon" />
        </div>
        <div class="nav-icons__item vertical-menu__item">
          <img src="../assets/icons/heart-icon.png" alt="Ícono 5" class="icon nav-icons__icon vertical-menu__icon" />
        </div>
      </div>
      <div class="last-icon vertical-menu__last-icon">
        <img src="../assets/icons/settings-icon.png" alt="Último Ícono" class="last-icon__image vertical-menu__last-icon-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>

.menu-icon {
  cursor: pointer;
  position: fixed;
  top: 110px;
  left: 32px;
}

.menu-icon__image {
  width: 45px;
  height: 45px;
  background-color: #ce9624;
  border-radius: 20px;
  transition: box-shadow 0.3s;
}

.menu-icon__image:hover {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
    background-color: #8c6c1c;
}

.vertical-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  padding: 8px;
  position: fixed;
  top: 180px;
  left: 26px;
  height: calc(100% - 36px);
}

.vertical-menu__bar--hide {
  display: none;
}

.nav-icons {
  margin-top: -30px;
}

.nav-icons__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  padding: 6px;
  background-color: #cdcdcd;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.nav-icons__item:hover {
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2);
  background-color: #57418f;
}

.icon {
  width: 20px;
  height: auto;
}

.selected-icon {
  background-color: #7049d8;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.last-icon {
  position: fixed;
  bottom: 16px;
  left: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 32px;
  border-radius: 8px;
  padding: 6px;
  background-color: #cdcdcd;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.last-icon:hover {
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2);
  background-color: #57418f;
}

.last-icon__image {
  width: 24px;
  height: auto;
}
</style>
