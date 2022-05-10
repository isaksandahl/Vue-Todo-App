<template>
  <div>
    <div v-for="(todo, i) in todos" :key="i" class="text-orange-600">
      <p>{{ todo.task }}</p>
      <p>{{ todo.status }}</p>
      <span>{{ todo.isDone }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Todo } from "../models/Todo";
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Vakna upp", true),
    new Todo("Äta något kanske", false),
    new Todo("Gå lägg dig", false),
  ];
}
</script>
