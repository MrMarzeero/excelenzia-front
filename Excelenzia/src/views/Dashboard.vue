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
                <div class="dashboard-infos container">
                        <section class="dashboard-texts">
                            <p class="info-text">Exercícios resolvidos ao todo</p>
                            <p class="info-text">Exercícios de Programação resolvidos</p>
                            <p class="info-text">Exercícios de Matematica resolvidos</p>
                            <p class="info-text">Exercícios de Física resolvidos</p>
                            <p class="info-text">Simulados resolvidos</p>
                            <p class="info-text">Maior sequência de consistência</p>
                        </section>
            
                        <section class="dashboard-numbers container">
                            <p class="info-text">13</p>
                            <p class="info-text">4</p>
                            <p class="info-text">10</p>
                            <p class="info-text">8</p>
                            <p class="info-text">9</p>
                            <p class="info-text">13</p>
                        </section>
                </div>
        
                <div class="graphic-1 container">
                    <FrequencyTab></FrequencyTab>
                </div>
            </div>
    
            <aside class="column-2">
                <div class="container-double-form">
                    <div class="form-1 container">
                        <h3 class="consistency-title">Sequência de consistência:</h3>
                        <h1 class="consistency-num">3</h1>
                    </div>
    
                    <div class="form-1 container">
                        <div class="chart-container">
                            <canvas id="resolucao-grafico"></canvas>
                        </div>
                    </div>
                </div>
    
                <div class="form-2 container">
                    <ConquistaMold></ConquistaMold>
                </div>
            </aside>
        </div>

    </main>
</template>

<script setup>
    import { onMounted } from "vue";
    import Chart from "chart.js/auto";
    import FrequencyTab from "@/components/Dashboard Elements/FrequencyTab.vue";
    import ConquistaMold from "@/components/Dashboard Elements/ConquistaMold.vue";

    onMounted(() => {
    const ctx = document.getElementById("resolucao-grafico").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
        labels: ["Respostas corretas", "Respostas erradas"],
        datasets: [
            {
            data: [70, 30],
            backgroundColor: ["#011936", "#465362", "#82A3A1"],
            borderColor: 'white',
            borderWidth: 0.4,
            },
        ],
        },
    });
    });
</script>

<style >
    .dashboard-content{
        background-color: #06253E;
        color: whitesmoke;
        max-width: 100%;
        height: 89vh;
        overflow-x: hidden;
    }

    .profile-container{
        display: flex;
        padding: 20px 0px 0px 25px;
    }

    .profile-pic{
        width: 10rem;
        height: 10rem;
        object-fit: cover; 
        margin: 0px 2rem 0px 2.5rem;
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

    .container{
        background-color: #02182A;
        border-radius: 0.8rem;
    }

    .container-geral{
        display: flex;
        justify-content: center;
        gap: 0.8rem;
        margin-top: 1rem;

    }

    .dashboard-infos{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 53vw;
        height: 38vh;
        margin: 0px 0px 0px 20px;
        padding: 40px;
        
    }

    .column-1{
        color: white;
    }

    .info-text{
        padding: 10px;
        font-size: 2vh;
        white-space: nowrap;
    }

    .graphic-1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53vw;
        height: 27.5vh;
        margin: 10px 0px 0px 20px;
        
    }

    .container-double-form{
        display: flex;
        gap: 10px;
    }

    .form-1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        width: 20vw;
        height: 35vh;
        
    }

    .consistency-num{
        font-size: 6rem;
    }

    .consistency-title{
        font-size: 1.2rem;
    }

    .chart-container{
        display: flex;
        justify-content: center;
        width: 30vw;
        height: 30vh;
    }

    .form-2{
        margin-top: 10px;
        height: 30.4vh;
    }

</style>