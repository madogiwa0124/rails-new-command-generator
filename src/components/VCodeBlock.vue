<script setup lang="ts">
defineProps<{ code: string }>();
</script>
<template>
  <div class="v-code-block">
    <code>
      {{ code }}
    </code>
  </div>
</template>
