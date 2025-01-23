<template>
    <main class="dashboard-content">
        <div class="profile-container">
            <img class="profile-pic" src="../assets/images/indian-guy.png" alt="profile-pic">
            <div class="profile-info">
                <h1> Márcio Vitor </h1>
                <p> Level 10 </p>
            </div>
        </div>

        
        <div class="dashboard-infos">
            <div class="column-1">
                <section class="dashboard-texts">
                    <p class="info-text">Exercícios resolvidos ao todo</p>
                    <p class="info-text">Exercícios de Programação resolvidos</p>
                    <p class="info-text">Exercícios de Matematica resolvidos</p>
                    <p class="info-text">Exercícios de Física resolvidos</p>
                    <p class="info-text">Simulados resolvidos</p>
                    <p class="info-text">Maior sequência de consistência</p>
                </section>
    
                <section class="dashboard-numbers">
                    <p class="info-text">0</p>
                    <p class="info-text">0</p>
                    <p class="info-text">0</p>
                    <p class="info-text">0</p>
                    <p class="info-text">0</p>
                    <p class="info-text">0</p>
                </section>
            </div>

            <div class="column-2">
                
            </div>
        </div>

        <div class="graphic-1">

        </div>

        <div class="graphic-2"></div>
    </main>
</template>

<script setup>
</script>

<style >
    .dashboard-content{
        background-color: #06253E;
        color: whitesmoke;
        width: 100%;
        height: 100%;
    }

    .profile-container{
        display: flex;
        padding: 20px 0px 0px 25px;
    }

    .profile-pic{
        width: 150px;
        height: 150px;
        object-fit: cover; 
        margin: 0px 40px 0px 0px;
        border-radius: 50%;
    }

    .profile-info{
        color: white;
        margin-top: 30px;
        padding-top: 0px;
    }

    h1{
        font-family: "Poppins", serif;
        font-weight: 620;
        font-style: normal;
    }

    .dashboard-infos{
        background-color: #02182A;
        color: whitesmoke;
        width: 55%;
        height: 380px;
        border-radius: 30px;
        margin: 10px 0px 0px 20px;
        padding: 40px;
    }

    .column-1{
        display: flex;
    }

    .dashboard-numbers{
        padding-left: 500px;
    }

    .info-text{
        padding: 10px;
        font-size: 20px;
    }

    .graphic-1{
        background-color: #02182A;
        color: whitesmoke;
        width: 55%;
        height: 250px;
        border-radius: 30px;
        margin: 10px 0px 0px 20px;
    }


</style>