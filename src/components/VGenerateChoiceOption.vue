<script setup lang="ts">
import { ref } from "vue";

type Props = {
  name: string;
  description: string;
  value: string;
  choices: string[];
};

const props = defineProps<Props>();
const emits = defineEmits<{ input: [value: { name: string; value: string }] }>();
const value = ref("");
const handleOnInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emits("input", { name: props.name, value: value.value });
};
</script>
<template>
  <div class="v-generate-choice-option">
    <select :id="name" class="v-generate-choice-option__input" @change="handleOnInput">
      <option v-for="choice in choices" :value="choice">{{ choice }}</option>
    </select>
    <label class="v-generate-choice-option__label" :for="name" :title="description">{{ name }}</label>
  </div>
</template>
<style scoped>
.v-generate-choice-option {
  display: flex;
  padding: 0.125rem;
}

.v-generate-choice-option__input {
  display: block;
  min-width: 150px;
  padding: 0.25rem;
}

.v-generate-choice-option__label {
  display: block;
  padding-left: 0.5rem;
}
</style>
