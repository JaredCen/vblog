<template>
  <div id="app">
    <my-nav></my-nav>
    App
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
