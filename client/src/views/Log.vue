<template>
  <div class="log">
    <div class="block column is-4 is-offset-4">
      <div class="box">
        <p class="title">Update your data here!</p>
        <div class="field">
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Insert Steps Taken Here!" />
            <span class="icon is-small is-left">
              <i class="fas fa-walking"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Insert Miles Ran Here!" />
            <span class="icon is-small is-left">
              <i class="fas fa-running"></i>
            </span>
          </div>
        </div>
        <router-link exact-active-class="active" to="/profile/:name" class="button is-primary">
          <span class="icon">
            <i class="fa fa-chart-line"></i>
          </span>
          <span>Log!</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
