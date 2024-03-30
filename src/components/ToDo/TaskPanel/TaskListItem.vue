<script setup>
import IconTrash from "@/components/icons/IconTrash.vue";

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
        class="task-checkbox"
      />

      <h4 class="task-name">{{ name }}</h4>

      <BaseButton @click="emit('remove')" danger class="task-remove">
        <IconTrash height="20" class="trash-icon" />
      </BaseButton>
    </div>

    <p v-html="description" class="task-description"></p>
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

.task-name {
  max-width: 70%;
  overflow-wrap: break-word;
}

.task-checkbox {
  width: 28px;
  height: 28px;
}

.task-remove {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.task-description {
  overflow-wrap: break-word;
}

.done {
  opacity: 0.8;
  text-decoration: line-through;
  transition: 0.2s opacity ease;
}
</style>
