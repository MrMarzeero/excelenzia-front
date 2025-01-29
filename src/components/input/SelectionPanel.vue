<script lang="ts">
export default {
  name: 'SelectionPanel',
  data() {
    return {
      dropdownVisible: false,
      options: ['Array', 'String', 'Map', 'Dynamic Programming', 'Matemática', 'Ordernação', 'Guloso', 'DFS', 'Busca Binária', 'Árvore', 'BFS'],
      selectedOptions: [] as string[],
    };
  },
  emits: ['update:modelValue'],
  methods: {
    toggleDropdown(event: Event) {
      event.stopPropagation();
      this.dropdownVisible = !this.dropdownVisible;
    },
    toggleOption(option: string) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      } else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
      }
      this.dropdownVisible = false;
      this.updateValue(this.selectedOptions.join(','));
    },
    handleClickOutside(event: Event) {
      const dropdown = this.$el.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownVisible = false;
      }
    },
    updateValue(value: string) {
      this.$emit('update:modelValue', value);
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }
};
</script>

<template>
  <div class="selection">
    <div class="btn" @click="toggleDropdown">
      <span >Adicionar</span>
      <ion-icon name="add-outline"></ion-icon>
    </div>
    
    <div class="dropdown" :class="{'show': dropdownVisible}">
      <ul>
        <li v-for="(option, index) in options" :key="index" @click="toggleOption(option)" :class="{'selected': selectedOptions.includes(option)}">
          {{ option }}
        </li>
      </ul>
    </div>

    <div v-if="selectedOptions.length > 0" class="selected-options">
      <div v-for="(option, index) in selectedOptions" :key="index">
        <p>{{ option }}</p>
        <ion-icon name="close-outline" @click="toggleOption(option)"></ion-icon>
      </div>
    </div>
  </div>
</template>


<style scoped>
.selection {
  position: relative;
}
.btn {
  position: relative;
  width: fit-content;
  height: max-content;
  display: flex;
  gap: .5rem;
  align-items: center;
  padding: .6rem 1rem;
  background-color: var(--blue-800);
  border-radius: 2rem;
  cursor: pointer;
  font-size: .8rem;
}

.btn > button {
  border: none;
  background: none;
  pointer-events: none
}
.btn > span {
  color: white;
  font-size: .75rem;
  line-height: 1;
}

.dropdown {
  position: absolute;
  width: 20rem;
  top: 2.5rem;
  opacity: 0;
  padding: .5rem;
  pointer-events: none;
  background-color: var(--blue-800);
  border-radius: .25rem;
  transition: opacity .5s ease-in;
  transition: top .3s ease;
  z-index: 2;
}

.dropdown.show {
  top: 2rem;
  pointer-events: all;
  opacity: 1;
}

.dropdown > ul {
  width: 20rem;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}


.dropdown li {
  width: max-content;
  padding: .5rem;
  font-size: .8rem;
  line-height: 1;
  background-color: var(--blue-900);
  border-radius: 2rem;
  border: solid 1px var(--primary);
  cursor: pointer;
}

.dropdown li.selected {
  background-color: var(--primary);
}

.dropdown li:hover {
  opacity: .9;
}

.selected-options {
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  padding: .5rem;
}
.selected-options > div {
  display: flex;
  align-items: center;
  background-color: var(--primary);
  padding: .25rem .5rem .25rem 1rem;
  border-radius: 1rem;
  gap: .2rem;
}
.selected-options > div > p {
  font-size: .75rem;
  line-height: 1;
}
.selected-options >div > ion-icon {
  font-size: .9rem;
  cursor: pointer;
  background-color: var(--blue-600);
  opacity: 1;
  border-radius: 2rem;
  --ionicon-stroke-width: 3rem;
}
</style>
