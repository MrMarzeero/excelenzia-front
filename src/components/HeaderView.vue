<template>
    <header>
        <div class="title-container">
            <h1 class="title">Excelenz</h1><h1 class="secondary title">IA</h1>
            <img class="star-logo-img" src="../assets/images/star-removebg-preview.png" alt="star">
        </div>
        <nav>
            <router-link class="nav-item dashboard-link" to="/dashboard-page">Dashboard</router-link>
            <router-link class="nav-item gerar-problema-link" to="/gerar-problema">Geração de Problemas</router-link>
        </nav>
    </header>
</template>
  
<script setup> 
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    font-family: Arial, Helvetica, sans-serif;
}

header {
    background-color: #02182A;
    background-size: cover;
    width: 100vw;
    height: 12vh;
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.title {
    color: #D3E7F8;
    font-size: 2rem;
    padding: 1.5rem 0px 10px 1.8rem;
    font-family: "Poppins", serif;
    font-weight: 800;
    font-style: normal;
}

.secondary {
    color: #6BBEDC;
    padding: 1.5rem 0px 10px 0px;
}

.star-logo-img {
    width: 2rem;
    height: 3rem;
    margin: 0.6rem 0px 0px 5px;
    object-fit: cover; 
}

nav {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    color: #A0B8CB;
    justify-content: flex-start;
    height: 1vh;
}

.nav-item {
    padding: 0.2rem 2rem;
    font-family: "Poppins", serif;
    font-weight: 515;
    font-size: 1rem;
    font-style: normal;
    position: relative; 
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: -0.2rem; 
    left: 0;
    width: 0; 
    height: 0.1rem;
    background-color: #ffffff;
    transition: all 0.3s ease; 
}

.nav-item:hover {
    color: #c9d7e2;
    transition: 0.3s;
}

.router-link-active {
    color: white;
    transition: 0.5s;
}

.router-link-active::after {
    width: 100%; 
}

.dashboard-link.router-link-active::before {
    content: '📊'; 
    margin-right: 0.5rem;
    color: #ffffff;
    font-size: 1rem;
}

.gerar-problema-link.router-link-active::before {
    content: '🛠️'; 
    margin-right: 0.5rem;
    color: #ffffff;
    font-size: 1rem;
}
</style>
