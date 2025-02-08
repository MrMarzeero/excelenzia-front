<script setup lang="ts">
    import { ref } from 'vue'

    const conquistas = ref(["🎯 Primeiro simulado feito", "🖥️ Primeiro problema de programação respondido", "🧑 Atualize seu perfil", " 📈 Atinja o nível 10"])

</script>

<template>
    <div class="conquistas-container">
        <h2 class="title-conquistas">Conquistas 🏆</h2>
        <div v-for="(conquista, index) in conquistas" :key="index" class="conquistas-lista">
            <span class="conquista-style"> {{ conquista }} </span>
        </div>
    </div>

</template>


<style>
    .title-conquistas{
        font-size: 1.4rem;
        font-weight: 500;
        padding-left: 0.3rem;
    }

    .conquistas-container{
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        padding: 1rem 2rem;
        max-height: 100%;
        overflow-y: auto;
    }

    .conquista-style{
        background-color: #012557;
        padding: 0.5rem 0.6rem;
        border-radius: 1rem;
        font-size: 1.2rem;
    }

    .conquista-style:hover{
        background-color: #00347c;
        transition: 0.2s;
    }

        /* Estiliza a barra de rolagem */
    .conquistas-container::-webkit-scrollbar {
        width: 9px; 
    }

    /* Fundo da barra de rolagem */
    .conquistas-container::-webkit-scrollbar-track {
        background: #012147; 
        border-radius: 10px;

    }

    /* Cor da barra de rolagem */
    .conquistas-container::-webkit-scrollbar-thumb {
        background: #023c61; 
        border-radius: 10px; 
    }

    /* Hover na barra de rolagem */
    .conquistas-container::-webkit-scrollbar-thumb:hover {
        background: #82A3A1; 
    }
</style>