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
          <p class="task-title">{{task.title}}</p>
          <p class="task-author">{{task.author}}</p>
          <p class="task-date">{{task.date}}</p>
        </label>
      </div>
    </div>  
  </div>
</template>

<script>
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
  },
}
</script>

<style>
  .department-div {
    border-bottom: inset;
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

  .task-checkbox {
    display: flex;
  }

</style>

