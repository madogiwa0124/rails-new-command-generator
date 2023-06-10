<script setup lang="ts">
import { ref, computed } from "vue";
import { clipBoardCopy } from "../services/clipboard";
const props = defineProps<{ code: string }>();
const isCopied = ref(false);
const copyButtonText = computed(() => (!isCopied.value ? "copy" : "copied"));
const handleOnCopy = () => {
  clipBoardCopy(props.code);
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 1000);
};
</script>
<template>
  <code class="v-code">
    <span class="v-code__text">$ {{ code }}</span>
    <button class="v-code__copy" @click="handleOnCopy">{{ copyButtonText }}</button>
  </code>
</template>
<style scoped>
.v-code {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  background-color: var(--code-color);
  color: var(--white-color);
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.v-code__text {
  display: block;
  line-height: 30px;
  font-family: "Anonymous Pro", "Inconsolata", "Menlo", "Consolas", "Bitstream Vera Sans Mono", "Courier New",
    monospace;
}

.v-code__copy {
  display: block;
  cursor: pointer;
  min-width: 5rem;
  max-height: 30px;
}
</style>
