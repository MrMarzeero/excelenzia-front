<script lang="ts">
import { computed } from 'vue';
import { useProblemStore } from '../stores/problemStore';
import SkeletonPlaceholder from './SkeletonPlaceholder.vue';
import katex from 'katex';

function renderLatex(content: string) {
  return content.replace(/\$(.+?)\$/g, (match, p1) => {
    try {
      return katex.renderToString(p1, { throwOnError: false });
    } catch {
      return match;
    }
  });
}

export default {
  name: 'ProblemView',
  components: {SkeletonPlaceholder},
  setup() {
    const problemStore = useProblemStore();
    const result = computed(() => problemStore.result);
    const loading = computed(() => problemStore.loading);

    const renderedName = computed(() => renderLatex(result.value?.name || ''));
    const renderedStatement = computed(() => renderLatex(result.value?.statement || ''))
    const renderedInput = computed(() => renderLatex(result.value?.input || ''))
    const renderedOutput = computed(() => renderLatex(result.value?.output || ''))

    return {result, loading, renderedName, renderedStatement, renderedInput, renderedOutput};
  }
}
</script>

<template>
  <div class="visualize-wrapper">
    <div v-if="!result && !loading">
      <h1 class="title">Visualizar</h1>
      <p>O enunciado do problema aparecerá aqui...</p>
    </div>
    <div v-else-if="loading" class="placeholder">
      <SkeletonPlaceholder width="10rem" height="2rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="10rem" height="2rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="10rem" height="2rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="1rem" borderRadius="2rem"/>
      <SkeletonPlaceholder width="100%" height="10rem"/>
    </div>
    <div v-else>
      <h1 class="title" v-html="renderedName"></h1>
      <p class="statement" v-html="renderedStatement"></p>
      <h2>Entrada</h2>
      <p class="input" v-html="renderedInput"></p>
      <h2>Saída</h2>
      <p class="output" v-html="renderedOutput"></p>

      <table class="sample-testcase">
        <thead>
          <tr>
            <th>Exemplo de entrada</th>
            <th>Exemplo de saída</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><pre>{{ result?.sample_input ?? '' }}</pre></td>
            <td><pre>{{ result?.sample_output ?? '' }}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.visualize-wrapper {
    display: flex;
    width: auto;
    height: inherit;
    border-radius: .5rem 2rem 2rem .5rem;
    padding: 2rem 2rem;
    overflow-y: auto;
  }
  .visualize-wrapper > .title {
    font-size: 1.2rem;
  }

  .visualize-wrapper > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  p {
    color: #cfcfcf;
  }

  .sample-testcase {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: var(--blue-900);
}

.sample-testcase th,
.sample-testcase td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid var(--blue-600);
}

.sample-testcase th {
  background-color: var(--primary);
  color: #fff;
}

.sample-testcase td pre {
  margin: 0;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word; 
}
</style>