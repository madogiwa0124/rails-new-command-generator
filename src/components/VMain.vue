<script setup lang="ts">
import VOption from "./VGenerateOption.vue";
import VCodeBlock from "./VCodeBlock.vue";
import { textOptions, boolOptions, joinTextOptions, joinBoolOptions } from "../services/rails/Option";
import { computed, ref } from "vue";

const booleanOptions = ref([...boolOptions]);
const stringOptions = ref([...textOptions]);
const railsGenarateCommand = computed(() => {
  return "$ rails new app_name" + stringOptionsText.value + booleanOptionsText.value;
});
const booleanOptionsText = computed(() => {
  return joinBoolOptions(booleanOptions.value.filter((option) => option.value));
});
const stringOptionsText = computed(() => {
  return joinTextOptions(stringOptions.value.filter((option) => option.value));
});
const handleOnBoolOptionInput = (arg: { name: string; value: boolean | string }) => {
  const boolOptioncommands = booleanOptions.value.map((option) => option.commandText);
  if (boolOptioncommands.includes(arg.name)) {
    const option = booleanOptions.value.find((option) => option.commandText === arg.name);
    if (option) option.value ? (option.value = false) : (option.value = true);
  }
};
const handleOnTextOptionInput = (arg: { name: string; value: boolean | string }) => {
  const textOptioncommands = stringOptions.value.map((option) => option.commandText);
  if (textOptioncommands.includes(arg.name)) {
    const option = stringOptions.value.find((option) => option.commandText === arg.name);
    if (option && typeof arg.value === "string") option.value = arg.value;
  }
};
</script>
<template>
  <main>
    <h1>Rails new command generator for v 7.0.5</h1>
    <p>This is a tool to help you generate a rails new command with the options you want.</p>
    <VCodeBlock :code="railsGenarateCommand" />
    <ul>
      <li v-for="option in stringOptions">
        <VOption
          :name="option.commandText"
          :description="option.description"
          :value="option.value"
          :choices="option.choices"
          type="choice"
          @input="handleOnTextOptionInput"
        />
      </li>
      <li v-for="option in booleanOptions">
        <VOption
          :name="option.commandText"
          :description="option.description"
          :value="option.value"
          :choices="option.choices"
          type="boolean"
          @input="handleOnBoolOptionInput"
        />
      </li>
    </ul>
  </main>
</template>
