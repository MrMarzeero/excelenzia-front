<template>
    <header>
        <div class="title-container">
            <h1 class="title">Excelenz</h1><h1 class="secondary title">IA</h1>
            <img class="star-logo-img" src="../assets/images/star-removebg-preview.png" alt="star">
        </div>
        <nav>
            <!-- <router-link class="nav-item" to="/" >Home</router-link> -->
            <router-link class="nav-item" to="/dashboard-page" >Dashboard</router-link>
            <router-link class="nav-item" to="/gerar-problema" >Geração de Problemas</router-link>
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
    width: 100%;
    height: 122px;
    
}

.title-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.title{
    color: #D3E7F8;
    font-size: 40px;
    padding: 14px 0px 10px 20px;
    font-family: "Poppins", serif;
    font-weight: 700;
    font-style: normal;
}

.secondary{
    color: #6BBEDC;
    padding: 14px 0px 10px 0px;

}

.star-logo-img{
    width: 60px;
    height: 40px;
    margin: 2px 0px 0px 0px;
    object-fit: cover; 
}

nav{
    display: flex;
    color: #A0B8CB;
    justify-content: flex-start;
    
}

.nav-item{
    padding: 3px 20px;
    font-family: "Poppins", serif;
    font-weight: 550;
    font-style: normal;
    position: relative; /* Necessário para o ::after */
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: -5px; /* Ajusta a linha abaixo do link */
    left: 0;
    width: 0; /* Inicialmente não aparece */
    height: 1px;
    background-color: #ffffff;
    transition: all 0.3s ease; /* Suavidade ao deslizar */
}

.nav-item:hover{
    color: #c9d7e2;
    transition: 0.3s;
}

.router-link-active{
    color: white;
    transition: 0.5s;
}

.router-link-active::after {
    width: 100%; /* A linha cobre o tamanho do link */
}


</style>
