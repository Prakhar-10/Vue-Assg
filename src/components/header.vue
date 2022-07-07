<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-list">
        <li class="title-list">
          <router-link 
            class="navbar-header" 
            to="/">
            OnBoarding Tasks
          </router-link>
        </li>
        <li class="add-task-list">
          <button class="add-button">
            <router-link 
              class="navbar-link" 
              to="/add">
              Add Task
            </router-link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .navbar-list {
    margin: 1rem;
    text-align-last: justify;
  }

  .add-task-list, .title-list {
    display: inline-block;
  }

  .add-task-list {
    margin: 0 3rem;
  }

  .navbar-header, .navbar-link {
    padding: 0.5rem;
    text-decoration: none;
  }

  .navbar {
    align-items: center;
    background: lightgray;
    display: flex;
    height: 3rem;  
    width: 100%;
  }

  .navbar-link {
    color: black;
  }

  .container {
    width: 100%;
  }
  
  .navbar-header {
    color: black;
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .add-button {
    border-bottom-style: groove;
  }

</style>

