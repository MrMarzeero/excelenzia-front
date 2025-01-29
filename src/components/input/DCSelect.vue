<script lang="ts">
import { ref, watch } from 'vue';

interface Option {
  label: string;
  value: string;
}

export default {
  name: 'DCSelect',
  props: {
    options: {
      type: Array as () => Option[],
      required: true
    },
    selected: {
      type: String,
      default: '',
    }
  },
  emits:['update:modelValue'],
  setup(props, {emit}) {
    const isOpen = ref(false);
    const selected = ref(props.selected)

    watch(selected, (newVal) => {
      emit('update:modelValue', newVal);
    })

    return {isOpen, selected}
  }
}
</script>

<template>
<div class="select-container">
  <select v-model="selected" @blur="isOpen = false" @click="isOpen = !isOpen">
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
  <div :class="{'flipped': isOpen}" class="icon-wrapper">

    <ion-icon  name="caret-down-outline"></ion-icon>
  </div>
</div>
</template>

<style scoped>
.select-container {
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;
}

select {
  width: max-content;
  padding: .5rem 2rem .5rem .8rem;
  font-size: .8rem;
  background-color: var(--blue-800);
  border-radius: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
select:hover {
  opacity: .9;
}
select option {
  border: none;
  font-size: .75rem;
  line-height: 1;
}

.icon-wrapper {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-height: fit-content;
  color: #fff;
  right:.3rem;
  pointer-events: none;
  transform: rotate(0deg);
  transition: transform .3s ease;
}

.flipped {
  transform: rotate(180deg);
}
</style>