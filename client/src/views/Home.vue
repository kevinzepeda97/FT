<template>
  <div class="home">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Fitness Tracker</h1>
          <h2 class="subtitle">Record and Track your progress to a healthy lifestyle!</h2>
        </div>
      </div>
    </section>

    <h1 class="subtitle">Login!</h1>

    <div class="field column is-4 is-offset-one-third">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </div>

    <div class="field column is-4 is-offset-one-third">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="Enter password here" />
      </div>
    </div>

    <div class="signup">
      <h1>
        Don't have an account?
        <router-link exact-active-class="active" to="/signup">
        Sign Up!</router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>
