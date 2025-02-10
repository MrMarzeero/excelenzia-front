<script lang="ts">
export default {
  name: 'Skeleton',
  props: {
    width: {
      type: String,
      default: '' 
    },
    height: {
      type: String,
      default: '' 
    },
    borderRadius: {
      type: String,
      default: '' 
    }
  }
}
</script>

<template>
  <div 
    class="placeholder" 
    :style="{
      width: width || 'auto', 
      height: height || 'auto', 
      borderRadius: borderRadius || '0'
    }"
  >
    &nbsp;
  </div>
</template>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  background-image: linear-gradient(
    to right,
    #1E1E39 0%,
    #4444EC 10%,
    #1E1E39 20%,
    #1E1E39 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
