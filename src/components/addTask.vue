<template>
  <div id="add-blog" class="add-blog">
    <h2>Add a New Task</h2>
    <form class="add-form">
      <label>Task Title:</label>
      <input 
        class="title-input" 
        type="text" 
        v-model="title" 
        required />
      <label>Assignee:</label>
      <input
        class="author-input" 
        type="text"
        v-model="author"/>
      <div class="departments">
        <p>Task Department:</p>
        <label>IT</label>
        <input 
          type="radio" 
          value="IT" 
          v-model="department"/>
        <label>New Hire PaperWork</label>
        <input 
          type="radio" 
          value="New Hire PaperWork" 
          v-model="department" />
        <label>Culture Orientation</label>
        <input 
          type="radio" 
          value="Culture Orientation" 
          v-model="department" />
        <label>HR</label>
        <input 
          type="radio" 
          value="HR" 
          v-model="department" />
        <label>other</label>
        <input 
          type="radio" 
          value="other" 
          v-model="department" />
        <label>Manager</label>
        <input 
          type="radio" 
          value="Manager" 
          v-model="department" />
      </div>
      <label class="date-label">Assigned Date:</label>
      <input 
        class="date-input" 
        type="date" 
        v-model="date" 
        required />
      <button 
        class="submit-button" 
        @click.prevent="submit">
          Add Task
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
        this.tasks= JSON.parse(localStorage.tasks);
      }
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.title = '';
      this.author = '';
      this.department = '';
      this.date = '';
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
  .add-blog{
    background: whitesmoke;
    border-style: inset;
    margin-top: 2rem;
    padding: 1rem;
  }
  .add-form {
    display: flex;
    flex-direction: column;
  }
  .title-input, .author-input, .date-input {
    align-self: center;
    border-style: inset;
    margin: 1rem;
    width: 20rem;
  }

  .submit-button {
    align-self: center;
    width: 7rem;
  }

  .date-label {
    margin-top: 2rem;
  }
  
</style>

