<script lang="ts">
  import { ref } from 'vue';
  import Modal from '../../components/Modal.vue'
  import 'highlight.js/lib/common';
  import hljsVuePlugin from "@highlightjs/vue-plugin";
  import { useSolveModel } from '../../composables/useSolveModel';
  import SkeletonPlaceholder from '@/components/SkeletonPlaceholder.vue';
  import DCSelect from '@/components/input/DCSelect.vue';

  export default {
    name: 'Solve',
    components: {DCSelect, Modal, highlightjs:hljsVuePlugin.component, SkeletonPlaceholder},
    data() {
      return {content: ''}
    },
    setup() {
      const showAns = ref(false);
      const { formData, loading, result, error, submitForm } = useSolveModel();

      const handleSubmit = async () => {
        showAns.value = true;
        await submitForm()
      }

      return {
        formData,
        loading,
        error,
        result,
        showAns,
        handleSubmit
      }
    }
  }
</script>

<template>
  <Modal v-model="showAns">
    <div class="placeholder" v-if="!result && loading">
      <SkeletonPlaceholder width="20rem" height="1rem" border-radius="2rem"/>
      <SkeletonPlaceholder width="20rem" height="1rem" border-radius="2rem"/> 
      <SkeletonPlaceholder width="20rem" height="1rem" border-radius="2rem"/>
      <SkeletonPlaceholder width="20rem" height="1rem" border-radius="2rem"/>
    </div>

<highlightjs v-else autodetect :code="result?.solution ?? ''" />
  </Modal>
  <div class="header">
    <h2>Código de resolução</h2>
    <DCSelect v-model="formData.language" id="language" name="language" :options="[{label: 'C++', value: 'CPP'}, {label: 'Python', value: 'PY'}, {label: 'JavaScript', value: 'JS'}]" selected="CPP"/>
  </div>
  <textarea class="texarea-style" v-model="content" id="editor"></textarea>
  <div class="btns">
    <button>Submeter</button>
    <button :disabled="loading" @click="handleSubmit">Gerar resposta</button>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

pre {
  border: none;
  height: 20rem;
}

pre:focus,
code:focus {
  outline: none;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.texarea-style{
  background-color: #021C40;
  padding: 0.5rem;
}

.btns > button {
  width: max-content;
  padding: .5rem 1rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  transition: opacity .2s ease-in;
  margin-top: .8rem;
}
.btns > button:nth-child(1) {
  background-color: #1A62C6;
}
.btns > button:nth-child(2) {
  background:none;
  border: solid 2px #1A62C6;
}

.btns > button:hover {
  opacity: .7;
}
</style>