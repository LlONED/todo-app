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
  <li :class="['task', { done }]">
    <div class="task-options">
      <BaseInputCheckbox
        @change="emit('updateDone', $event)"
        :checked="done"
        class="checkbox"
      />

      <h4>{{ name }}</h4>

      <BaseButton @click="emit('remove')" danger class="remove">
        remove
      </BaseButton>
    </div>

    <p v-html="description"></p>
  </li>
</template>

<style scoped>
.task {
  opacity: 1;
  list-style: none;
  width: 100%;

  padding: 12px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: var(--vt-c-black-mute);
  transition: 0.2s opacity ease;
}

.task-options {
  display: flex;
  justify-content: space-between;
}

.done {
  opacity: 0.8;
  text-decoration: line-through;
  transition: 0.2s opacity ease;
}

.checkbox {
  width: 28px;
  height: 28px;
}

.remove {
  padding: 4px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
</style>
