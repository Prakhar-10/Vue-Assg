<template>
  <div class="completed-task">
    <p class="complete-task-title">
      {{donetask.title}}
    </p>
    &nbsp;
    <p class="complete-task-author">
      Completed By {{donetask.author}}
    </p>
    &nbsp;
    <p class="complete-task-date">
      on {{donetask.date}}
    </p>
  </div>  
</template>

<script>
export default {
  name: "completedtask",
  props: {
    checked: null,
    donetask: [],
  },
}
</script>

<style>
  .completed-task {
    display: flex;
    flex-direction: row;
  }
  
  .complete-task-title {
    color: black;
    text-decoration-line: line-through;
  }

  .complete-task-author, .complete-task-date {
    color: slategray;
  }

</style>

