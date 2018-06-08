/* eslint-disable */
<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-for="todo in todos" v-bind:todo="todo"></todo>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'TodoList',
  components: { Todo },
  props: ['todos'],
};
</script>

<style scoped>

</style>
