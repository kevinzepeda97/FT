<template>
  <div class="home">
    <div class="block">
      <div class="box">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Fitness Tracker</h1>
              <h2 class="subtitle">Record and Track your progress to a healthy lifestyle!</h2>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="block">
      <div class="box">
        <h1 class="subtitle">Login!</h1>

        <div class="field column is-4 is-offset-one-third">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field column is-4 is-offset-one-third">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="Enter password here" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="signup">
          <h1>
            Don't have an account?
            <router-link exact-active-class="active" to="/signup">Sign Up!</router-link>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>
