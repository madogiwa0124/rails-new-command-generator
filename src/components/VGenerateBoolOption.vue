<script setup lang="ts">
import { ref } from "vue";

type Props = {
  name: string;
  description: string;
  value: boolean;
};

const props = defineProps<Props>();
const emits = defineEmits<{ input: [value: { name: string; value: boolean }] }>();
const value = ref("");
const handleOnInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emits("input", { name: props.name, value: !!value.value });
};
</script>
<template>
  <div class="v-generate-bool-option">
    <input type="checkbox" :id="name" class="v-generate-bool-option__input" :value="true" @change="handleOnInput" />
    <label :for="name" :title="description" class="v-generate-bool-option__label">{{ name }}</label>
  </div>
</template>
<style scoped>
.v-generate-bool-option {
  display: flex;
  padding: 0.25rem;
}

.v-generate-bool-option__input {
  display: block;
}

.v-generate-bool-option__label {
  display: block;
  padding-left: 0.5rem;
}
</style>
