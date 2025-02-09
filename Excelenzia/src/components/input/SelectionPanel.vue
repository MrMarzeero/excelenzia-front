<script lang="ts">
export default {
  name: 'SelectionPanel',
  props: {
    options: {
      type: Array as () => string[], 
      required: true, 
    }
  },
  data() {
    return {
      dropdownVisible: false,
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
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<template>
  <div class="selection">
    <div class="btn" @click="toggleDropdown">
      <span>Adicionar</span>
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
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  color: inherit;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

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
  background-color: #021C40;
  border-radius: 2rem;
  cursor: pointer;
  font-size: .8rem;
}

.dropdown {
  position: absolute;
  width: 20rem;
  top: 2.5rem;
  opacity: 0;
  padding: .5rem;
  pointer-events: none;
  background-color: #021C40;
  border-radius: .25rem;
  transition: opacity .5s ease-in, top .3s ease;
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
  background-color: #02367e00;
  border-radius: 2rem;
  border: solid 1px #0052c5;
  cursor: pointer;
}

.dropdown li.selected {
  background-color: #003f97;
}

.selected-options {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  padding: .5rem;
}

.selected-options > div {
  display: flex;
  align-items: center;
  background-color: #174D98;
  padding: .25rem .5rem .25rem 1rem;
  border-radius: 1rem;
  gap: .2rem;
}
.selected-options >div > ion-icon {
  font-size: .9rem;
  cursor: pointer;
  background-color: #022f6e;
  border-radius: 2rem;
}
</style>

