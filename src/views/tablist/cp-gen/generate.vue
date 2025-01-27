<script lang="ts">
import EXSelect from '../../../components/input/EXSelect.vue';
import SelectionPanel from '../../../components/input/SelectionPanel.vue';
import { useGenerateModel } from '../../../composables/useGenerateModel';
import ProblemView from '../../../components/ProblemView.vue';
import Tabs from '../../../components/problems/TabsHeader.vue';
  
  export default {
    name: 'Generate',
    components: {SelectionPanel, EXSelect, ProblemView, Tabs},
    setup() {
      const { formData, loading, error, submitForm } = useGenerateModel();

      const handleSubmit = async (ev: Event) => {
        ev.preventDefault();
        await submitForm()
      }

      return {
        formData,
        loading,
        error,
        handleSubmit
      }
    }
  }
</script>

<template>
  <form @submit="handleSubmit">
    <label for="context">Contexto do problema</label>
    <textarea v-model="formData.context" name="context" id="context" placeholder="Descreva uma história para o problema..." maxlength="300"></textarea>

    <label for="selection">Tópicos</label>
    <SelectionPanel id="selection" v-model="formData.topics"/>
    
    <label for="difficulty">Dificuldade</label>
    <EXSelect class="text-sm" v-model="formData.level" id="difficulty" name="difficulty" :options="[{label: 'Fácil', value: 'Easy'}, {label: 'Médio', value: 'Medium'}, {label: 'Difícil', value: 'Hard'}, {label: 'Insano', value:'Insane'}]" selected="Easy"></EXSelect>

    <label for="language">Idioma</label>
    <EXSelect class="text-sm" v-model="formData.language" id="language" name="language" :options="[{label: 'Português', value: 'Portuguese'}, {label: 'Inglês', value: 'English'}]" selected="Portuguese"></EXSelect>

    <button class="text-sm" type="submit" :disabled="loading">Gerar problema</button>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  form > label {
    font-weight: bold;
    margin-top: .5rem;
  }

  form > textarea {
    min-height: 6rem;
    border: none;
    outline: none;
    padding: .3rem;
    resize: none;
    background-color: var(--blue-900);
    border-radius: .25rem;
  }

  form > button {
    width: max-content;
    padding: .5rem 1rem;
    border: none;
    border-radius: .25rem;
    background-color: var(--primary);
    cursor: pointer;
    transition: opacity .2s ease-in;
    margin-top: .8rem;
  }

  .text-sm {
    font-size: .75rem;
    line-height: 1;
  }

  form > button:hover {
    opacity: .8;
  }
</style>