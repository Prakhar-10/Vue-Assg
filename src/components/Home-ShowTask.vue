<template>
  <div class="showtask">
    <div 
      class="department-div" 
      v-show="!checked">
      <div class="mdc-form-field">
        <div class="mdc-checkbox">
          <input 
            type="checkbox"
            class="mdc-checkbox__native-control"
            id="checkbox-1"
            @change="check($event)"
            v-model="checked" />
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
        <label class="task-checkbox"> 
          <p class="task-title">{{task.Title}}</p>
          <p class="task-author">{{task.Assignee}}</p>
          <p class="task-date">{{task.AssignedDate}}</p>
          <i 
          class="glyphicon glyphicon-trash" 
          @click.prevent="deleted" />
        </label>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "showtask",
  props: {
    task: { type: Object },
  },
  data() {
    return{
      checked: false,
    }
  },
  methods: { 
    check(e) {  
      this.$emit('taskcompleted', this.task);
    },
    deleted() {
      const url = 'https://b3yjil01ik.execute-api.ap-south-1.amazonaws.com/v2/task/';
      return axios.delete(`${url}${this.task.Department}/${this.task.AssignedDate}`)
        .then((res) =>{
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        }) ;
    },
  },
}
</script>

<style>
  .department-div {
    border-bottom: inset;
    text-align-last: left;
    width: 100%;
  }

  .task-title, .task-author, .task-date {
    font-size: 1.3rem;
    margin: 0.5rem;
  }

  .task-title {
    color: dodgerblue;
  }

  .task-author, .task-date {
    color: slategrey;
  }

  .task-checkbox {
    display: -webkit-box;
    width: 80%;
  }

  .glyphicon {
    font-size: larger;
    margin-top: 1.3rem;
    top: 0;
    writing-mode: vertical-rl;
  }

  .mdc-form-field {
    display: -webkit-box;
    line-height: 2;
  }

</style>

