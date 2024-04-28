<script setup>
const emit = defineEmits(["change"]);
const { checked } = defineProps({
  checked: Boolean,
});
</script>

<template>
  <label class="label relative cursor-pointer">
    <input
      @change="emit('change', $event.target.checked)"
      :checked="checked"
      type="checkbox"
      class="input"
    />
    <span class="mask"></span>
  </label>
</template>

<style scoped>
.label {
  position: relative;
  cursor: pointer;
}

.input {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  appearance: none;
  outline: none;
}

.mask {
  border: 1px solid var(--color-border);
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 8px;
}

.input:checked + .mask {
  background-color: var(--green-soft);
  transition: 0.2s background-color ease;
}

.input:checked:hover + .mask,
.input:checked:focus + .mask {
  background-color: var(--green-mute);
  transition: 0.2s background-color ease;
}

.input:not(:checked) + .mask {
  background-color: var(--red-soft);
  transition: 0.2s background-color ease;
}

.input:not(:checked):hover + .mask,
.input:not(:checked):focus + .mask {
  background-color: var(--red-mute);
  transition: 0.2s background-color ease;
}
</style>
