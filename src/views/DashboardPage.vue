<template>
    <main class="dashboard-content">
        <div class="profile-container">
            <img class="profile-pic" src="../assets/images/indian-guy.png" alt="profile-pic">
            <div class="profile-info">
                <h1> Shivanshika </h1>
                <p> Level 10 </p>
            </div>
        </div>
        
        <div class="container-geral">
            <div class="column-1">
                <div class="dashboard-infos">
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
        
                <div class="graphic-1">
        
                </div>
            </div>
    
            <aside class="column-2">
                <div class="container-double-form">
                    <div class="form-1">
                        
                    </div>
    
                    <div class="form-1">
                        
                    </div>
                </div>
    
                <div class="form-2">
                    
                </div>
            </aside>
        </div>

    </main>
</template>

<script setup>
</script>

<style >
    .dashboard-content{
        background-color: #06253E;
        color: whitesmoke;
        width: 100vw;
        height: 90vh;
    }

    .profile-container{
        display: flex;
        padding: 20px 0px 0px 25px;
    }

    .profile-pic{
        width: 10rem;
        height: 10rem;
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

    .container-geral{
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-top: 1rem;
    }

    .dashboard-infos{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #02182A;
        width: 55vw;
        height: 40vh;
        border-radius: 30px;
        margin: 0px 0px 0px 20px;
        padding: 40px;
    }

    .column-1{
        color: white;
    }

    .dashboard-numbers{
        padding-left: 500px;
    }

    .info-text{
        padding: 10px;
        font-size: 1.3rem;
    }

    .graphic-1{
        background-color: #02182A;
        color: whitesmoke;
        width: 55vw;
        height: 27.5vh;
        border-radius: 30px;
        margin: 10px 0px 0px 20px;
    }

    .container-double-form{
        display: flex;
        gap: 10px;
    }

    .form-1{
        background-color: #02182A;
        width: 20vw;
        border-radius: 30px;
        height: 35vh;
    }

    .form-2{
        background-color: #02182A;
        margin-top: 10px;
        border-radius: 30px;
        height: 32.5vh;
    }


</style>