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
          <button class="mdc-button  mdc-button--raised  mdc-button--leading">
            <router-link 
              class="navbar-link" 
              to="/add">
              <span class="mdc-button__ripple" />
              <i 
                class="material-icons  mdc-button__icon" 
                aria-hidden="true">
                add
              </i>
              <span class="mdc-button__label">
                Add Task
              </span>
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
    background: #262626;
    display: flex;
    height: 3rem;  
    width: 100%;
  }
  .navbar-link {
    color: black;
    vertical-align: super;
  }
  .container {
    width: 100%;
  }
  
  .navbar-header {
    color: white;
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: none;
  }

  .material-icons {
    vertical-align: text-bottom;
  }

  .mdc-button {
    height: 100%;
    margin-bottom: 0.4rem;
    padding: 0;
  }

</style>
