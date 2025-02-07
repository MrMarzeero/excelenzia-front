<script lang="ts">
  import TabList from '../components/TabList.vue';
  import Tabs from '../components/problems/Tabs.vue';
  import ProblemView from '../components/ProblemView.vue';

  export default {
    name: 'ProblemLayout',
    components: {
      TabList, ProblemView, Tabs
    },
    data() {
      return {
        _resizing: false,
        _wrapper_left: -1,
        _wrapper_width: -1,
        mainSize : '600px'
      }
    },
    methods: {
      handleDown() {
        this._resizing = true;
      },
      handleUp() {
        this._resizing = false;
      },
      handleMove(event: MouseEvent) {
        if (!this._resizing) return;
        this.mainSize = `${event.clientX - this._wrapper_left}px`;
        console.log(this.mainSize)
      }
    },
    mounted() {
      const wrapper = document.querySelector('.wrapper')
      window.onmouseup = this.handleUp;
      window.onmousemove = this.handleMove
      if (wrapper) this._wrapper_left = wrapper.getBoundingClientRect().left
      if (wrapper) this._wrapper_width = wrapper.getBoundingClientRect().width
    }
  }
</script>

<template>
  <div class="main-wrapper">
    <div class="wrapper" >
      <div class="main-content" :style="{'width': mainSize}">
        <Tabs />
        <RouterView />
      </div>
      <div class="splitter" @mousedown="handleDown">
        <ion-icon name="remove-outline" size="large"></ion-icon>
      </div>
      <ProblemView :style="{'width': `${_wrapper_width - parseInt(mainSize)}px`}"/>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100vw;
  height: 88vh;
  color: rgb(255, 255, 255);
}

.wrapper {
  display: flex;
  width: 90%; /* Ajuste de tamanho para não ocupar a tela toda */
  height: 80vh; /* Ajusta a altura para deixar margens pequenas */
  background-color: #0B2B52;
  margin: 1.3rem;
  border-radius: 1rem;
  overflow: hidden;
}

.splitter {
  position: relative;
  width: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #00132c;
  transition: background-color .2s linear;
  cursor: e-resize;
}
.splitter:hover {
  background-color: #5f5f5f;
}
.splitter > ion-icon {
  position: absolute;
  opacity: .7;
  transform: rotate(90deg);
  width: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  overflow-y: auto;
  padding: 2rem;
  width: 50%; /* Ajusta o tamanho do container principal */
  min-width: 300px;
}

.problem-view {
  width: 50%;
  min-width: 300px;
  background-color: #0B2B52;
}

/* Resetando margens e padding do body e html */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00132c; /* Fundo para melhor visualização */
}

</style>