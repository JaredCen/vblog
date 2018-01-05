<template>
  <div class="nav">
    <div class="logo">logo</div>
    <ul class="menus">
      <li v-for="(menu, i) in menus" :key="i" @click="switched(menu)">{{menu.label}}</li>
    </ul>
    <div class="search">search</div>
    <div class="toolbar">tools</div>
    <div class="sign">sign</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import menus, { Menu } from '../../config/nav';

@Component
export default class MyNav extends Vue {
  get menus (): Menu[] {
    return menus;
  }

  switched (menu: Menu): void {
    this.$router.push(menu.path);
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.nav {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: @height-nav;
  background-color: @color-nav-bg;
  .menus {
    display: flex;
    li {
      padding: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
