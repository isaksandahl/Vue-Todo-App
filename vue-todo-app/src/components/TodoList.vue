<template>
  <div>
    <div>
      <AddTodo @addTask="handleAddTask($event)" />
    </div>
    <div class="w-4/5 m-auto mt-10 border border-zinc-500 shadow-xl">
      <div class="flex border-b border-zinc-500 text-white uppercase">
        <p class="flex-1 p-2 border-r border-zinc-500">Task</p>
        <p class="p-2 border-r border-zinc-500">Status</p>
        <p class="p-2 border-r border-zinc-500">Edit</p>
        <p class="p-2">Delete</p>
      </div>
      <ul v-for="(todo, i) in todos" :key="i" class="text-orange-600">
        <li class="flex justify-center content-center">
          <p class="flex-1 p-2 border-zinc-500" @click="markAsDone(todo)">
            {{ todo.task }}
          </p>
          <p class="p-2 border-zinc-500">{{ todo.status }}</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "../models/Todo";
import AddTodo from "./AddTodo.vue";

@Options({
  components: {
    AddTodo,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Vakna upp", false),
    new Todo("Äta något kanske", false),
    new Todo("Gå lägg dig", false),
  ];

  handleAddTask(t: Todo) {
    this.todos.push(t);
  }

  markAsDone(t: Todo) {
    if (t.isDone === false) {
      t.isDone = true;
      t.status = "Done";
    } else {
      t.isDone = false;
      t.status = "In progress";
    }
  }
}
</script>
