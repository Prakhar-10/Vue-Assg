<template>
  <div class="completed-task">
    <div class="mdc-checkbox  mdc-checkbox--disabled">
      <input 
        type="checkbox"
        id="basic-disabled-checkbox"
        class="mdc-checkbox__native-control"
        disabled 
        checked/>
      <div class="mdc-checkbox__background">
        <svg 
          class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">
          <path 
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class="mdc-checkbox__mixedmark" />
      </div>
      <div class="mdc-checkbox__ripple" />
    </div>
    <p class="complete-task-title">
      {{donetask.Title}}
    </p>
    &nbsp;
    <p class="complete-task-author">
      Completed by {{donetask.Assignee}}
    </p>
    &nbsp;
    <p class="complete-task-date">
      on {{donetask.AssignedDate}}
    </p>
  </div>  
</template>

<script>
export default {
  name: "completedtask",
  props: {
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
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 3;
    text-decoration-line: line-through;
  }

  .complete-task-author, .complete-task-date {
    color: slategray;
    font-size: 1rem;
    line-height: 3.6;
  }

</style>

