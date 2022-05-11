<template>
  <div class="w-full flex justify-center align-center">
    <input
      type="text"
      placeholder="New Task"
      v-model="newTask"
      class="appearance-none rounded-l p-3"
    />
    <button
      type="submit"
      @click="addNewTask"
      class="transition ease-in-out border border-white bg-green-500 text-white rounded-r px-2 uppercase text-xs hover:bg-white hover:text-green-500 hover:border-green-500"
    >
      Add Task
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Todo } from "../models/Todo";

export default class AddTodo extends Vue {
  newTask = "";

  addNewTask() {
    if (this.newTask === "") return;
    else {
      console.log("du lkickade");
      console.log(this.newTask);
      this.$emit("addTask", new Todo(this.newTask, false));
      this.newTask = "";
    }
  }
}
</script>
