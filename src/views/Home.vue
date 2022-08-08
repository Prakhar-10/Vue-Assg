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
import Vue from 'Vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios,axios);

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
    Vue.axios.get('https://b3yjil01ik.execute-api.ap-south-1.amazonaws.com/v2/task')
      .then((resp) => {
        console.log(resp);
        for(let i=0; i<resp.data.length; i++) {
          this.tasks.push(resp.data[i]);
        }

        for(let i=0; i<this.tasks.length; i++) {
          this.Alltasks[this.tasks[i].Department].push(this.tasks[i]);
        }
      });
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
    font-size: 2rem;
    margin: 0rem;
    text-align: justify;
    width: max-content;
  }

</style>

