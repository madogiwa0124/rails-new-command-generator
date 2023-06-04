<script setup lang="ts">
import { ref } from "vue";

type Props = {
  name: string;
  description: string;
  type: "boolean" | "choice";
  value: string | boolean;
  choices?: string[];
};

const props = defineProps<Props>();
const emits = defineEmits(["input"]);
const value = ref("");
const handleOnInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emits("input", { name: props.name, value: value.value });
};
</script>
<template>
  <div class="v-generate-option">
    <input v-if="type === 'boolean'" type="checkbox" :id="name" :value="true" @change="handleOnInput" />
    <select v-if="type === 'choice'" :id="name" @change="handleOnInput">
      <option v-for="choice in choices" :value="choice">{{ choice }}</option>
    </select>
    <label :for="name" :title="description">{{ name }}</label>
  </div>
</template>
