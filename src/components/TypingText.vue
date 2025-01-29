<script lang="ts">
import { ref, onMounted } from 'vue';
// TODO: word list should be passed as props from parent

export default {
  name: 'TypingText',
  props: {
    wordList: {
      type: Array as () => string[],
      required: false,
      default: ["Create", "Compete", "Code", "Imagine"],
    },
    typingSpeed: {
      type: Number,
      required: false,
      default: 100,
    },
    erasingSpeed: {
      type: Number,
      required: false,
      default: 50,
    },
    delay: {
      type: Number,
      required: false,
      default: 1000,
    }
  },
  setup(props) {
    const showWord = ref("");
    const wordId = ref(0);
    let chIdx = 0;
    let isErasing = false;

    const typeEffect = () => {
      const currentWord = props.wordList[wordId.value];

      if (!isErasing) {
        if (chIdx < currentWord.length) {
          showWord.value += currentWord[chIdx];
          chIdx++;
          setTimeout(typeEffect, props.typingSpeed)
        } else {
          isErasing = true;
          setTimeout(typeEffect, props.delay);
        }
      } else {
        if (chIdx > 0) {
          showWord.value = currentWord.slice(0, chIdx - 1);
          chIdx--;
          setTimeout(typeEffect, props.erasingSpeed);
        } else {
          isErasing = false;
          wordId.value = (wordId.value + 1) % props.wordList.length;
          setTimeout(typeEffect,  props.typingSpeed);
        }
      }
    }
    
    onMounted(() => {
      typeEffect()
    })

    return {showWord}
  }
}

</script>

<template>
  <span>{{ showWord }}</span>
</template>

<style scoped>
  span {
    display: inline-block;
    background: linear-gradient(to right, rgb(167, 15, 228) 0%, rgb(85, 14, 216) 50%, rgb(61, 15, 228) 80%, rgb(228, 15, 192) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    position: relative;
  }
  span::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 100%;
    background-color: rgb(228, 15, 192);
    position: absolute;
    right: 0;
    animation: blinkAnimation 1s infinite
  }

  @keyframes blinkAnimation {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>