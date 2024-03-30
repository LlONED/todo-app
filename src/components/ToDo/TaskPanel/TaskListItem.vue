<script setup>
const emit = defineEmits(["updateDone", "remove"]);

const { name, description, done } = defineProps({
  name: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  done: {
    type: Boolean,
    requried: true,
  },
});
</script>

<template>
  <li>
    <div>
      <input
        @change="emit('updateDone', $event.target.checked)"
        :checked="done"
        type="checkbox"
      />

      <h4>name</h4>

      <button @click="emit('remove')">remove</button>
    </div>

    <p>descriptions</p>
  </li>
</template>

<style scoped></style>
