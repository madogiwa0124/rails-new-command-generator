<script setup lang="ts">
import { RAILS_VERSION } from "../services/rails";
import VGenerateBoolOption from "./VGenerateBoolOption.vue";
import VGenerateChoiceOption from "./VGenerateChoiceOption.vue";
import VCode from "./VCode.vue";
import { textOptions, boolOptions, joinTextOptions, joinBoolOptions } from "../services/rails/Option";
import { computed, ref } from "vue";

const booleanOptions = ref([...boolOptions]);
const stringOptions = ref([...textOptions]);
const railsGenarateCommand = computed(() => {
  return "rails new app_name" + stringOptionsText.value + booleanOptionsText.value;
});
const booleanOptionsText = computed(() => {
  return joinBoolOptions(booleanOptions.value.filter((option) => option.value));
});
const stringOptionsText = computed(() => {
  return joinTextOptions(stringOptions.value.filter((option) => option.value));
});
const handleOnBoolOptionInput = (arg: { name: string; value: boolean }) => {
  const boolOptioncommands = booleanOptions.value.map((option) => option.commandText);
  if (boolOptioncommands.includes(arg.name)) {
    const option = booleanOptions.value.find((option) => option.commandText === arg.name);
    if (option) option.value ? (option.value = false) : (option.value = true);
  }
};
const handleOnTextOptionInput = (arg: { name: string; value: string }) => {
  const textOptioncommands = stringOptions.value.map((option) => option.commandText);
  if (textOptioncommands.includes(arg.name)) {
    const option = stringOptions.value.find((option) => option.commandText === arg.name);
    if (option) option.value = arg.value;
  }
};
</script>
<template>
  <main class="v-main">
    <header class="v-main__header">
      <h1 class="v-main__header__title">Rails new command generator</h1>
      <p class="v-main__header__description">
        This is a tool to help you generate a rails new command with the options you want. ( for Ruby on Rails v
        {{ RAILS_VERSION }} )
      </p>
    </header>
    <section class="v-main__content">
      <div class="v-main__content__code">
        <VCode :code="railsGenarateCommand" />
      </div>
      <div class="v-main__content__options">
        <h3>⚙ Options</h3>
        <ul>
          <li v-for="option in stringOptions">
            <VGenerateChoiceOption
              :name="option.commandText"
              :description="option.description"
              :value="option.value"
              :choices="option.choices"
              @input="handleOnTextOptionInput"
            />
          </li>
          <li v-for="option in booleanOptions">
            <VGenerateBoolOption
              :name="option.commandText"
              :description="option.description"
              :value="option.value"
              :choices="option.choices"
              @input="handleOnBoolOptionInput"
            />
          </li>
        </ul>
      </div>
    </section>
    <footer class="v-main__footer">madogiwa0124 ©️ 2023</footer>
  </main>
</template>
<style lang="css" scoped>
.v-main {
  height: 100%;
}

.v-main__header__title {
  background-color: var(--main-color);
  color: var(--white-color);
  padding: 0 0.25rem;
}

.v-main__header__description {
  background-color: var(--info-color);
  padding: 0.5rem;
}

.v-main__content {
  margin: 0.5rem;
}

.v-main__content__code {
  margin: 0.5 0rem;
}

.v-main__content__options ul {
  list-style: none;
  padding: 0;
}

.v-main__content__options li {
  margin-bottom: 0.25rem;
}

.v-main__footer {
  background-color: var(--main-color);
  color: var(--white-color);
  padding: 0.25rem;
  position: sticky;
  top: 100vh;
  text-align: center;
}
</style>
