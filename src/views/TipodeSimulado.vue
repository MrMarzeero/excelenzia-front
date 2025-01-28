<template> 
    <main class="escolha-tipo-simulado">
        <div class="opcoes1">
            <h1 class="titulo">Qual o estilo do seu simulado?</h1>
            <div class="botoes">
                <button class="opcao" @click="goToPersonalizado">
                    <h2>Personalizado</h2>
                    <p>Escolha entre diferentes tópicos e assuntos, especifique o que quer aprender através do quiz.</p>
                </button>
                <button class="opcao">
                    <h2>Baseado em materiais</h2>
                    <p>Forneça textos, anotações e outros materiais de estudo em escrito, receba um simulado totalmente baseado neles.</p>
                </button>
            </div>
        </div>
    </main>
</template>
<script>
export default {
  methods: {
    goToPersonalizado() {
      this.$router.push('/Escolha-de-Personalizado');
    },
  },
};
</script>

<style>

.escolha-tipo-simulado {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #02182A; 
    color: #D3E7F8;
    text-align: center;
}

.titulo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

/* Estilo das opções */
.opcoes1 {
    display: flex;
    flex-direction: column; /* Coluna para alinhar título e botões */
    align-items: center;
    
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 2rem; 
    
}

.opcao {
    width: 400px; /* Largura fixa */
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #0B2B52;
    text-align: center;
    transition: transform 0.2s, background-color 0.2s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
    cursor: pointer;
    border: none;
}

/* Estilo dos textos nos botões */
.opcao h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.opcao p {
    font-size: 1rem;
    line-height: 1.5;
    color: #FFFFFF;
}


.opcao:hover {
    transform: scale(1.05);
    background-color: #0c376b; /* Alteração de cor no hover */
}


.opcao:active {
    transform: scale(0.95);
}
</style>
