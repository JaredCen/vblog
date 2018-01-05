<template>
  <div class="footer">
    © 2018 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class MyFooter extends Vue {
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.footer {
  flex: 0 0 auto;
  height: @height-footer;
  margin-top: 20px;
  background-color: @color-footer-bg;
}
</style>
