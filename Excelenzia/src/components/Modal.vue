<script lang="ts">
export default {
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  }, 
  methods: {
    closeModal() {
      this.$emit('update:modelValue', false);
    },
    handleOverlayClick(event: MouseEvent) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    }
  }
}
</script>

<template>
  <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal">
      <div class="btns">
        <button class="close-btn" @click="closeModal">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal {
  position: relative;
  width:fit-content;
  height: fit-content;
  background-color: var(--blue-600);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .15rem;
  top: 1rem;
  right: 1rem;
  background-color: var(--grey-400);
  border-radius: 50%;
  border:none;
  cursor: pointer;
  transition: opacity .2s linear;
}
.close-btn:hover {
  opacity: .7;
}

</style>