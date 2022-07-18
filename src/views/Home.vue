<template>
  <div class="home">
    <div 
      class="task-department" 
      v-for="(departmentTask, department) in Alltasks" 
      :key="department.id">
      <h3 class="department-title">{{department}}</h3>
      <div 
        v-for="task in departmentTask" 
        :key="task.id">
        <show-task 
          :task="task" 
          @taskcompleted="addtask(task)" />
      </div>
    </div>
    <div 
      class="completed-task" 
      v-for="donetask in completetasks" 
      :key="donetask.id">
      <completed-task :donetask="donetask" />
    </div>  
  </div>
</template>

<script>
import CompletedTask from "../components/Home-CompletedTask.vue";
import ShowTask from "../components/Home-ShowTask.vue";
export default {
  name: "Home",
  components: {
    'completed-task': CompletedTask,
    'show-task': ShowTask,
  },
  data() {
    return {
      Alltasks: {
        'HR': [],
        'Culture Orientation': [],
        'IT': [],
        'New Hire PaperWork': [],
        'other': [],
        'Manager': [],
      },
      tasks: [],
      checked: false,
      completetasks: [],
    }
  },
  created: function() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i=0; i<this.tasks.length; i++) {
      this.Alltasks[this.tasks[i].department].push(this.tasks[i]);
    }
  },
  methods: {
    addtask(task) {
      this.completetasks.push(task);
    }
  }
}
</script>

<style scoped>
  .home {
    background: white;
    border-top-color: red;
    border-top-style: groove;
    border-width: thick;
    height: 100vh;
    margin: 0 2rem;
    padding-top: 0.5rem;
    width: 90%;
  }

  .department-title {
    background: #262626;
    color: white;
    font-size: 1.1rem;
    margin: 0rem;
    text-align: justify;
    width: max-content;
  }

</style>

