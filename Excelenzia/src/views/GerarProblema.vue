<script setup>
    import SelectionPanel from "@/components/input/SelectionPanel.vue"
    import DCSelect from "@/components/input/DCSelect.vue"
    import { ref, watch } from "vue"
    import { RouterLink } from "vue-router"

    const SelectedSubject = ref("Math")
    const optionsSubject = ref([])
    const selectedTopics = ref([])

    const updateOptions = () => {
        if (SelectedSubject.value === "Math") {
            optionsSubject.value = ['Álgebra', 'Geometria Plana', 'Geometria Espacial', 'Trigonometria', 'Estatística', 'Probabilidade']
        } else if (SelectedSubject.value === "Physics") {
            optionsSubject.value = ['Cinemática', 'Dinâmica', 'Hidrostática', 'Óptica', 'Ondulatória', 'Eletromagnetismo', 'Gravitação']
        }
        selectedTopics.value = []
    }


    watch(SelectedSubject, updateOptions)

    updateOptions()

    const editing = ref(false)
    const text = ref("")

    const enableEditing = () => {
        editing.value = true
    }

    const disableEditing = () => {
        editing.value = false
        text.value = ""
    }
</script>

<template>
    <main class="gen-problem-content">
        <div class="coluna-1">
            <h1 class="title-tab">Personalização</h1>
            <div class="personalization-tab tab">

                <div class="container-options">
                    <h2 class="title-option"> Matéria </h2>
                    <DCSelect v-model="SelectedSubject" :options="[{label: 'Matematica', value: 'Math'}, {label: 'Física', value: 'Physics'}]" selected="Math" />

                    <h2 class="title-option"> Tópico </h2>
                    <SelectionPanel class="selection-style" v-model="selectedTopics" :options="optionsSubject" />
        
                    <h2 class="title-option"> Tipo de Quiz </h2>
                    <DCSelect :options="[{label: 'Discursivo', value: 'Discursive'}, {label: 'Múltipla escolha', value: 'Multiple choice'}]" selected="Multiple choice" />
                    
                    <h2 class="title-option"> Número de Questões </h2>
                    <input class="questNum-style" type="number" v-model="questNumberAmount" :min="1" :max="10" placeholder="1" />
                    
    
                </div>
                <RouterLink to="/quiz">
                    <button class="submitButton" type="submit" :disabled="loading">Gerar problema</button>
                </RouterLink>
            </div>
        </div>

        <div class="coluna-2">
            <h1 class="title-tab"> Descrição </h1>
            <div class="description-tab">
                <button v-if="!editing" class="btn" @click="enableEditing"> + Clique para adicionar uma descrição </button>
                <div v-else class="text-area-container">
                    <textarea v-model="text" class="text-area tab">  </textarea>
                    <button @click="disableEditing" class="btn-cancelar">Cancelar</button>
                </div>
        
            </div>
        </div>
    </main>
</template>

<style >
    .gen-problem-content{
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-direction: row;
        background-color: #02182A;
        color: whitesmoke;
        width: 100%;
        height: 88vh;
    }


    .title-tab{
        font-size: 1.3rem;
        font-family: "Poppins", serif;
        font-weight: 600;
        font-style: normal;
        padding: 0.6rem 0px 0px 30px;
    }

    .personalization-tab{
        background-color: #0B2B52;
    }

    
    .tab{
        width: 43vw;
        height: 80vh;
        border-radius: 1rem;
        margin: 0.5rem 0.6rem;
    }
    
    .container-options{
        padding: 0.2rem 2rem ;
    }
    
    .title-option{
        font-weight: 600;
        font-size: 1.2rem;
        padding-left: 0.4rem;
        margin-bottom: 0.3rem;
        margin-top: 1.5rem;
    }

    .selection-style{
        padding: 0 3rem 0 0;
    }

    .description-tab{
        width: 47vw;
        height: 80vh;
        border-radius: 1rem;
        margin: 8px 15px;
    }

    .questNum-style{
        background-color: #021C40;
        text-align: center;
        padding: 0.5rem 0.2rem;
        margin-left: 0.4rem;
        border-radius: 0.8rem;
        border: none;
    }

    .btn{
        color: gray;
        text-align: left;
        padding: 0rem 0 0 1.3rem;
        gap: 0.4rem;
        width: 47vw;
        height: 6vh;
        border-radius: 1rem;
        background-color: #0b2b5200;
        border: 1px solid #093B82;
        font-size: 1rem;
    }

    .btn:hover{
        border: 1px solid #1a6ee2;
        transition: 0.5s;
        color: white;
    }

    .submitButton{
        width: max-content;
        padding: .5rem 1rem;
        margin: 1.4rem 2.3rem;
        border: none;
        border-radius: .25rem;
        background-color: #174D98;
        cursor: pointer;
        transition: opacity .2s ease-in;
        margin-top: .8rem;
    }

    .submitButton:hover{
        background-color: #0f3872;
        transition: 0.2s;
    }

    .text-area-container{
        color: black;
    }

    .text-area{
        max-height: 72.5vh;
        max-width: 47vw;
        background-color: #093b8200;
        border: 1px solid #093B82;
        color: rgb(216, 216, 216);
        outline: none; 
        padding: 1rem 0 0 1.3rem;
        font-size: 1rem;
    }

    .btn-cancelar{
        background-color: #02182a00;
        border: 1px solid #093B82;
        color: white;
        padding: 0.6rem 2rem;
        border-radius: 1rem;
        margin: 0 0.6rem;
        font-size: 1rem;
    }

    .btn-cancelar:hover{
        background-color: #093B82;
        transition: 0.5s;
    }
</style>