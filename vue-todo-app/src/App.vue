<template>
  <div class="container">
    <TodoApp />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoApp from "./components/TodoApp.vue";

@Options({
  components: {
    TodoApp,
  },
})
export default class App extends Vue {}
</script>
