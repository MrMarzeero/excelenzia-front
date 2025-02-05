<template>
    <main class="biblioteca-problemas">
        <div>
            <button class="novo-simulado">
                <h4>Novo Simulado +</h4>
            </button>
            <button class="filtro">
                <h4>Filtrar</h4>
            </button>
        </div>
    </main>
</template>

<style>
.biblioteca-problemas{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86vh;
    background-color: #02182A; 
    color: #FFFFFF;
    text-align: center;
}

.novo-simulado{
    margin-top: 1rem;
    background-color: #D3E6F8;
    color:#F2F2F2;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
    padding: 1rem;
    border-radius: 30px;
    border: none;
    text-align: center;
    cursor: pointer;
    background: linear-gradient(45deg, #093B82, #1079be);/* Degradê */
    animation: gradient 5s ease infinite;
}

.filtro{
    margin-top: 1rem;
    background-color: #02182A;
    border:#1079be, solid, 0.5px;
    color:#F2F2F2;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
    padding: 1rem;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    animation: gradient 5s ease infinite;
}

</style>