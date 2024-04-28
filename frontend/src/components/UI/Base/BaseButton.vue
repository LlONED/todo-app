<script setup></script>

<template>
  <button
    :class="[
      'button',
      {
        danger: $attrs.hasOwnProperty('danger'),
        success: $attrs.hasOwnProperty('success'),
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  color: var(--vt-c-white-soft);
  cursor: pointer;
  outline: none;
  border: none;
}

.success {
  background-color: var(--green-soft);

  transition: 0.3s ease;
}

.success:not(:disabled):hover,
.success:not(:disabled):focus {
  background-color: var(--green-mute);

  transition: 0.3s ease;
}

.danger {
  background-color: var(--red-soft);

  transition: 0.3s ease;
}

.danger:not(:disabled):hover,
.danger:not(:disabled):focus {
  background-color: var(--red-mute);

  transition: 0.3s ease;
}

.button:disabled {
  cursor: default;

  opacity: 0.6;
  color: var(--vt-c-text-dark-2);
  background-color: var(--vt-c-divider-dark-1);

  transition: 0.3s background-color ease;
}
</style>
