<template>
  <div class="showtask">
    <div 
      class="department-div" 
      v-show="!checked">
      <input 
        type="checkbox" 
        class="checkbox-check" 
        v-model="checked" 
        @change="check($event)">
      <p class="task-title">{{task.title}}</p>
      <p class="task-author">{{task.author}}</p>
      <p class="task-date">{{task.date}}</p>
    </div>  
  </div>
</template>
<script>
export default {
  name: "showtask",
  props: {
    task: [],
  },
  data() {
    return{
      checked: false,
      completetasks: [],
    }
  },
  methods: { 
    check(e) {  
      this.completetasks.push(this.task);
      this.$emit('taskcompleted',this.task);
    },
  },
}
</script>

<style>
  .department-div {
    border-bottom: groove;
    display: flex;
  }

  .task-title, .task-author, .task-date {
    margin: 0.5rem;
  }

  .task-title {
    color: dodgerblue;
  }

  .task-author, .task-date {
    color: slategrey;
  }
  
</style>

