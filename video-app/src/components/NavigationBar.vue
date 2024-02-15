<template>
  <div class="navbar">
    <div class="navbar__search-bar-container">
      <img src="../assets/icons/search-icon.png" class="navbar__search-icon" alt="Ícono de búsqueda">
      <input type="text" class="navbar__search-bar" placeholder="Search">
    </div>

    <div class="navbar__nav-buttons">
      <button class="navbar__nav-btn" @click="navigateTo('/pagina1')">Art</button>
      <button class="navbar__nav-btn" @click="navigateTo('/pagina2')">Sports</button>
      <button class="navbar__nav-btn" @click="navigateTo('/pagina3')">Gaming</button>
      <button class="navbar__nav-btn" @click="navigateTo('/pagina4')">Utility</button>
      <button class="navbar__nav-btn" @click="navigateTo('/pagina5')">Cards</button>
    </div>

    <div class="navbar__user-info">
      <img src="../assets/icons/user-icon.png" alt="Icono de usuario" class="navbar__user-icon" />
      <div class="navbar__user-details">
        <span class="navbar__user-name">Andres Loaiza</span>
        <span class="navbar__user-username">@andruDML7</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  margin-left: 120px;
  position: absolute;
  top: 0;
  height: 70px;
  width: calc(100% - 120px);
}

.navbar__search-bar-container {
  position: relative;
}

.navbar__search-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: auto;
  z-index: 1;
}

.navbar__search-bar {
  padding-left: 40px;
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 30px;
  opacity: 0.5;
  box-shadow: 0 0 0 2px black;
  font-size: 14px;
}

.navbar__nav-buttons {
  display: flex;
}

.navbar__nav-btn {
  border-radius: 8px;
  margin-left: 10px;
  min-width: 80px;
  transition: box-shadow 0.3s;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  background-color: #d3a13a;
  cursor: pointer;
}

.navbar__nav-btn:hover {
  background-color: #8c6c1c;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.navbar__user-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 50px;
}

.navbar__user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.navbar__user-details {
  display: flex;
  flex-direction: column;
}

.navbar__user-username {
  margin-top: 2px;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 5px;
    margin-left: 0;
    width: 100%;
    margin-left: 90px;
  }
  
  .navbar__search-bar {
    width: 150px;
    font-size: 12px;
  }
  
  .navbar__nav-buttons {
    margin-right: 10px;
  }
  
  .navbar__nav-btn {
    min-width: auto;
    padding: 5px 10px;
    font-size: 12px;
  }
  
  .navbar__user-icon {
    width: 25px;
    height: 25px;
  }
  
  .navbar__user-info {
    margin-right: 10px;
  }
}
</style>
