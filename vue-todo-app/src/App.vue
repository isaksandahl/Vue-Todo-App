<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="container">
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    TodoList,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  background-color: #242323;
}
</style>
