<template>
  <div id="add-blog" class="add-blog">
    <h2>Add a New Task</h2>
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
      <label>Assignee:</label>
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
      <div class="departments">
        <p>Task Department:</p>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">IT</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">New Hire PaperWork</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">Culture Orientation</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">HR</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios"  
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">other</label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input 
              class="mdc-radio__native-control" 
              type="radio" 
              id="radio-1" 
              name="radios" 
              v-model="department" 
              checked>
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class="mdc-radio__ripple" />
          </div>
          <label for="radio-1">Manager</label>
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
        department: this.department,
        title: this.title,
        author: this.author,
        date: this.date,
      }
      if(localStorage.tasks) {
        this.tasks = JSON.parse(localStorage.tasks);
      }
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.title = '';
      this.author = '';
      this.department = '';
      this.date = '';
      this.$router.push('/');
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
    padding: 0.5rem;
  }
  .add-form {
    display: flex;
    flex-direction: column;
  }
  .date-input {
    align-self: center;
    border-style: inset;
    height: 1.5rem;
    margin: 1rem;
    width: 15rem;
  }

  .mdc-button {
    border-color: black;
    margin: 0 17rem;
  }

  .date-label {
    margin-top: 2rem;
  }

  .title-input, .author-input {
    align-self: center;
    margin: 1rem 0rem;
    width: max-content;
  }
  
</style>

