<script setup>
const emit = defineEmits(["update:modelValue"]);
const { modelValue } = defineProps({
  modelValue: String,
});
</script>

<template>
  <input
    @input="emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    class="text-field"
  />
</template>
