<template>
  <div id="add-blog" class="add-blog">
    <h2>Add Task</h2>
    <form class="add-form">
      <label>Task Title:</label>
      <label 
        class="title-input  mdc-text-field  mdc-text-field--filled  mdc-text-field--no-label">
        <span class="mdc-text-field__ripple" />
        <input 
          class="mdc-text-field__input" 
          type="text" 
          placeholder="Title" 
          aria-label="Label" 
          v-model="title"
          required>
        <span class="mdc-line-ripple" />
      </label>
      <label class="Assignee-title">Assignee:</label>
      <label 
        class="author-input  mdc-text-field  mdc-text-field--filled  mdc-text-field--no-label">
        <span class="mdc-text-field__ripple" />
        <input 
          class="mdc-text-field__input" 
          type="text" 
          placeholder="Assignee" 
          aria-label="Label" 
          v-model="author"
          required>
        <span class="mdc-line-ripple" />
      </label>
      <p class="department-title">Task Department:</p>
      <div class="departments">
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              value="IT"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">IT</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              value="New Hire PaperWork"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">New Hire PaperWork</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              value="Culture Orientation"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">Culture Orientation</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              value="HR"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">HR</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              value="other"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">other</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios" 
              value="Manager"
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="department" class="department-label">Manager</label>
        </div>
      </div>
      <label class="date-label">Assigned Date:</label>
      <input 
        class="date-input" 
        type="date" 
        v-model="date" 
        required />
      <button 
        class="mdc-button  mdc-button--outlined"
        @click.prevent="submit">
        <span class="mdc-button__ripple" />
        <span class="mdc-button__label">Add Task</span>
      </button>
    </form> 
  </div>
</template>

<script>
import Vue from 'Vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios,axios);

export default {
  data() {
    return {
      title: '',
      author: '',
      department: '',
      date: '',
      tasks: [],
    }
  },
  methods: {
    submit() {
      let task = {
        Department: this.department,
        Title: this.title,
        Assignee: this.author,
        AssignedDate: this.date,
      }
      task = JSON.stringify(task);
      Vue.axios.post('https://b3yjil01ik.execute-api.ap-south-1.amazonaws.com/v2/task',task)
        .then((res) =>{
          this.$router.push({name: 'Home'});
        }) 
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>

<style scoped>
  .add-blog{
    background: whitesmoke;
    border-style: groove;
    border-top-color: red;
    border-top-width: thick;
    height: 48rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  .add-form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  .mdc-form-field {
    font-size: 1.2rem;
    white-space: pre;
  }
  .departments {
    display: flex;
    width: 100%;
  }
  .date-input {
    align-self: center;
    border-style: inset;
    height: 2.5rem;
    margin: 1rem;
    width: 15rem;
  }
  .mdc-button {
    border-color: black;
    margin: 1rem 24rem;
  }
  .date-label {
    margin-top: 1rem;
  }
  .title-input, .author-input {
    align-self: center;
    margin: 0.5rem 0rem;
    width: max-content;
  }
  .department-title {
    font-weight: bold;
    margin: 1rem 0rem;
  }
  .Assignee-title {
    margin: 1rem 0rem;
  }
  
  .department-label {
    margin-top: 0.6rem;
  }
  
</style>

