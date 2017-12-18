<template>
  <div class="footer">
    Footer
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class MyFooter extends Vue {
}
</script>

<style lang="less">
.footer {
  flex: 0 0 auto;
  height: 100px;
}
</style>
