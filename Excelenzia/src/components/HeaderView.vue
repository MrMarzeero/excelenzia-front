<template>
    <header>
        <div class="title-container">
            <h1 class="title">Excelenz</h1>
            <h1 class="secondary title">IA</h1>
            <img class="star-logo-img" src="../assets/images/star-removebg-preview.png" alt="star">
        </div>
        <nav>
            <router-link class="nav-item dashboard-link" to="/">Dashboard</router-link>
            <router-link class="nav-item" to="/biblioteca-problemas">Geração de Problemas</router-link>  
                 
        </nav>
    </header>
</template>
  
<script setup> 
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    font-family: Arial, Helvetica, sans-serif;
}

header {
    background-color: #02182A;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Mantém tudo alinhado à esquerda */
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
}

.title {
    color: #D3E7F8;
    font-size: 2rem;
    font-family: "Poppins", serif;
    font-weight: 800;
}

.secondary {
    color: #6BBEDC;
}

.star-logo-img {
    width: 2rem;
    height: 2.4rem;
    margin: 0rem 0px 3px 03px;
    object-fit: cover; 
}

nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
}

.nav-item {
    padding: 0.2rem 2rem;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 1rem;
    font-style: normal;
    position: relative; 
    color: #bbbbbb;
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: -0.9rem;
    left: 0;
    width: 0;
    height: 0.1rem;
    background-color: #ffffff;
    transition: all 0.3s ease;
}

.nav-item:hover::after {
    width: 100%;
}

.router-link-active {
    color: white;
    font-weight: 515;
    transition: 0.2s;
}

.router-link-active::after {
    width: 100%;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start; 
        gap: 0.5rem;
    }

    .nav-item {
        width: 100%;
        text-align: left; 
    }
}
</style>



