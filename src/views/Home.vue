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
        <showtask 
          :task="task" 
          @taskcompleted="addtask(task)"/>
      </div>
    </div>
    <div 
      class="completed-task" 
      v-for="donetask in completetasks" 
      :key="donetask.id">
      <completedtask :donetask="donetask"/>
    </div>  
  </div>
</template>

<script>
import showtask from "../components/showtask.vue";
import completedtask from "../components/completedtask.vue";
export default {
  name: "Home",
  components:{
    showtask,
    completedtask,
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
      console.log(this.completetasks);
    }
  }
}
</script>

<style scoped>
  .home {
    background: white;
    height: 100vh;
    margin: 0 2rem;
    padding-top: 0.5rem;
    width: 90%;
  }

  .department-title {
    background: lightgrey;
    margin: 0rem;
    text-align: justify;
    width: max-content;
  }

</style>

