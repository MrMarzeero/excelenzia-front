<template>
    <main class="escolha-personalizado">
        <div>
            <h1 class="titulo">Escolha uma matéria</h1>
            <div class="buttons">
                <button class="opcoes">
                    <h2>Programação</h2>
                </button>
                <button class="opcoes">
                    <h2>Matemática</h2>
                </button>
                <button class="opcoes">
                    <h2>Física</h2>
                </button>
            </div>
        </div>
    </main>
</template>

<style>
.escolha-personalizado{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86vh;
    background-color: #02182A; 
    color: #FFFFFF;
    text-align: center;
}

.buttons{
    margin-top: 2rem;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 2rem;
}

.opcoes{
    width: 400px; 
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #0B2B52;
    text-align: center;
    font-size: 1rem;
    transition: transform 0.2s, background-color 0.2s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
    cursor: pointer;
    border: none;
}
.opcoes:hover {
    transform: scale(1.05);
    background-color: #0c376b; /*Alteração de cor no hover*/
}

.opcoes:active {
    transform: scale(0.95);
}
</style>