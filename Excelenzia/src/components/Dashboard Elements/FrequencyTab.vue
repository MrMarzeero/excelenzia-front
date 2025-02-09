<script setup lang="ts">
    import { ref } from "vue";

    const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    const frequencia = ref([true, true, true, false, false, false, false]);
</script>

<template>
  <div class="tabela-frequencia">
    <div v-for="(dia, index) in diasSemana" :key="index" class="dia">
      <span class="dia-nome">{{ dia }}</span>
      <span class="fogo" :class="{ ativo: frequencia[index] }">🔥</span>
    </div>
  </div>
</template>

<style scoped>
    .tabela-frequencia {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 3.5rem;
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
    }

    .dia {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50px;
    }

    .dia-nome {
        font-size: clamp(1rem, 1.2vw, 1.4rem); 
        font-weight: bold;
        color: #fff;
        margin-bottom: 0.8rem;
    }

    .fogo {
        font-size: clamp(2rem, 2.5vw, 2.8rem);
        opacity: 0.3;
        transition: opacity 0.3s ease-in-out;
    }

    .fogo.ativo {
        opacity: 1;
    }
</style>