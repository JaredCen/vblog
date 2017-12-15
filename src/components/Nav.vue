<template>
  <div class="nav">
    Nav
    <ul class="menus">
      <li v-for="(menu, i) in menus" :key="i" @click="switched(menu)">{{menu.label}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import menus, { Menu } from '../config/nav';

@Component
export default class MyNav extends Vue {
  get menus (): Menu[] {
    return menus;
  }

  switched (menu: Menu): void {
    if (menu.ask) {
      // TODO Message
      this.$router.push(menu.path);
    } else {
      this.$router.push(menu.path);
    }
  }
}
</script>

<style lang="less">
.nav {
  flex: 0 0 auto;
  height: 100px;
}
</style>
