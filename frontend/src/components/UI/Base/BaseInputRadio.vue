<script setup>
const emit = defineEmits(["update:modelValue"]);
const { modelValue, value } = defineProps({
  modelValue: String,
  value: String,
});
</script>

<template>
  <label class="input-label">
    <span>{{ value }}</span>

    <input
      @change="emit('update:modelValue', $event.target.value)"
      :checked="modelValue === value"
      :value="value"
      type="radio"
      class="input"
    />
  </label>
</template>

<style scoped>
.input-label {
  position: relative;
  padding: 4px 8px;
  border-radius: 4px;
  overflow: hidden;
}

.input {
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: var(--green);
  transition: 0.2s background-color ease;
}

.input:not(:checked) {
  cursor: pointer;
}

.input:checked {
  background-color: var(--green-light);
  transition: 0.2s background-color ease;
}

.input:hover {
  background-color: var(--green-soft);
  transition: 0.2s background-color ease;
}
</style>
