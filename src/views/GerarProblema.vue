<template>
    <main class="gen-problem-content">
        <div class="problem-personalization">
            <h1 class="title-tab">Personalização</h1>

            <div class="personalization-tab tab">
                <h2 class="title-option"> Matéria </h2>


                <h2 class="title-option"> Tópicos </h2>

                <h2 class="title-option"> Tipo de Quiz </h2>

                <h2 class="title-option"> Número de Questões </h2>
            </div>

            <div class="description-tab tab">
                <h1 class="title-tab"> Descrição </h1>
            </div>
        </div>

    </main>
</template>

<script setup>


</script>

<style >



    .gen-problem-content{
        background-color: #02182A;
        color: whitesmoke;
        width: 100%;
        height: 100%;
    }

    .title-tab{
        font-size: 20px;
        font-family: "Poppins", serif;
        font-weight: 600;
        font-style: normal;
        padding: 15px 0px 0px 30px;
    }

    .personalization-tab{
        width: 40%;
        height: 80vh;
        background-color: #0B2B52;
        border-radius: 20px;
        margin: 12px 20px;
    }
</style>