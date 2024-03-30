<script setup>
const emit = defineEmits(["update:modelValue"]);
const { modelValue } = defineProps({
  modelValue: String,
});
</script>

<template>
  <textarea
    @input="emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  ></textarea>
</template>

<style scoped></style>
