<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Testcases',
  setup() {
    const testCaseAmount = ref(0);

    return {testCaseAmount}
  }
}
</script>

<template>
  <h2>Número de testes</h2>

  <input class="testcase-style" type="number" v-model.number="testCaseAmount" :min="1" :max="10" placeholder="1" />
  <div class="btns">
    <button>Gerar casos</button>
    <button>baixar casos(.txt)</button>
  </div>

  <h3>Teste 1</h3>
  <table class="sample-testcase">
    <thead>
      <tr>
        <th>Entrada</th>
        <th>Saída</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><pre>1 2 3 4 5</pre></td>
        <td><pre>15</pre></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

.testcase-style{
  background-color: #031836;
  padding: 0.5rem;
  border: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: #061F3C;
}

table th,
table td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #02152b;
}

table th {
  background-color: #031836;
  color: #fff;
}

table td pre {
  margin: 0;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word; 
}

.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
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
  background-color: #174D98;
}
.btns > button:nth-child(2) {
  background:none;
  border: solid 2px #174D98;
}

.btns > button:hover {
  opacity: .7;
}
</style>