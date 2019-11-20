<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link exact-active-class="active" class="navbar-item" to="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
        </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

        <router-link exact-active-class="active" class="navbar-item" to="/profile">
            <i class="fas fa-user fa-pull-left"></i>
            Profile
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/log">
            <i class="fas fa-database fa-pull-left"></i>
            Log Data
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/about">
            <i class="fas fa-info fa-pull-left"></i>
            About
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" active-class="kind-of-active">
            More
            </a>

            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/about" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    About
                </router-link>
            <a class="navbar-item">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
                <router-link to="/signup" exact-active-class="active" class="button is-primary">
                <strong>Sign up</strong>
                </router-link>
            <router-link to="/" exact-active-class="active" class="button is-light">
                    Login
                </router-link>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
    .active {
        background-color: aliceblue;
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(244, 248, 252);
        font-weight: 100;
    }
</style>
