<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import MyFooter from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Nav, MyFooter, Header,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4169d8;
}
</style>
