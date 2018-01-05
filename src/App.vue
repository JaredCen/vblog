<template>
  <div id="app">
    <my-nav/>
    <div class="main">
      <router-view/>
    </div>
    <my-footer/>
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

<style lang="less">
@import './assets/styles/var.less';

#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: @color-home-bg;
  .main {
    display: flex;
    flex: 1 1 auto;
  }
}
</style>

