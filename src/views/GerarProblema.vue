<script lang="ts">

</script>

<template>
    <main class="gen-problem-content">
        <div class="coluna-1">
            <h1 class="title-tab">Personalização</h1>
            <div class="personalization-tab tab">

                <div class="container-options">
                    <h2 class="title-option"> Matéria </h2>
                    
                    <h2 class="title-option"> Tópico </h2>
        
                    <h2 class="title-option"> Tipo de Quiz </h2>
        
                    <h2 class="title-option"> Número de Questões </h2>
                    
                </div>

            </div>
        </div>

        <div class="coluna-2">
            <h1 class="title-tab"> Descrição </h1>
            <div class="description-tab tab">
            </div>
        </div>
    </main>
</template>

<style >
    .gen-problem-content{
        display: flex;
        justify-content: center;
        flex-direction: row;
        background-color: #02182A;
        color: whitesmoke;
        width: 100vw;
        height: 88vh;
    }


    .title-tab{
        font-size: 1.3rem;
        font-family: "Poppins", serif;
        font-weight: 600;
        font-style: normal;
        padding: 1.3rem 0px 0px 30px;
    }

    .personalization-tab{
        background-color: #0B2B52;
    }

    .tab{
        width: 47vw;
        height: 80vh;
        background-color: #0B2B52;
        border-radius: 20px;
        margin: 8px 15px;
    }

    .container-options{
        padding: 2rem ;
    }

    .title-option{
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
</style>