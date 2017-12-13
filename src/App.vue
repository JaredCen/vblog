<template>
  <div id="app">
    <my-nav></my-nav>
    <img src="./assets/images/logo.png">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Nav, Footer } from './components';
@Component({
  components: {
    MyNav: Nav,
    MyFooter: Footer
  }
})
export default class App extends Vue {
  name: string = 'app';
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
