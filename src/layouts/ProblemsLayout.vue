<script>
  import Navbar from '../components/EXNavbar.vue';
  import TabList from '../components/TabList.vue';
  import TabsHeader from '../components/problems/TabsHeader.vue';
  import ProblemView from '../components/ProblemView.vue';

  export default {
    name: 'ProblemLayout',
    components: {
      Navbar, TabList, ProblemView, TabsHeader
    },
    data() {
      return {
        resizing: false,
        wrapper_left: -1,
        wrapper_width: -1,
        mainSize : '600px'
      }
    },
    methods: {
      handleDown() {
        this.resizing = true;
      },
      handleUp() {
        this.resizing = false;
      },
      handleMove(event) {
        if (!this.resizing) return;
        this.mainSize = `${event.clientX - this.wrapper_left}px`;
        console.log(this.mainSize)
      }
    },
    mounted() {
      const wrapper = document.querySelector('.wrapper')
      window.onmouseup = this.handleUp;
      window.onmousemove = this.handleMove
      if (wrapper) this.wrapper_left = wrapper.getBoundingClientRect().left
      if (wrapper) this.wrapper_width = wrapper.getBoundingClientRect().width
    }
  }
</script>

<template>
  <Navbar></Navbar>
  <div class="main-wrapper">
    <TabList />
    <div class="wrapper" >
      <div class="main-content" :style="{'width': mainSize}">
        <TabsHeader />
        <RouterView />
      </div>
      <div class="splitter" @mousedown="handleDown">
        <ion-icon name="remove-outline" size="large"></ion-icon>
      </div>
      <ProblemView :style="{'width': `${wrapper_width - parseInt(mainSize)}px`}"/>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  margin: .5rem 4rem;
}

.wrapper {
  width: 100%;
  height: calc(100vh - 10rem);
  margin: 1rem 0;
  display: flex;
}


.wrapper > div:not(.splitter) {
  background-color: var(--blue-600);
}

.splitter {
  position: relative;
  width: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  transition: background-color .2s linear;
  cursor: e-resize;
}
.splitter:hover {
  background-color: var(--grey-400);
}
.splitter >ion-icon{
  position: absolute;
  opacity: .7;
  transform: rotate(90deg);
  width: 2rem;
}

.main-content {
  border-radius: 2rem .5rem .5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  overflow-y: auto;
  padding: 2rem;
}
</style>