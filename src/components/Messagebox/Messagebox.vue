<template>
  <transition name="message-box__fade">
    <div class="message-box" @click.self="doClose">
      <div class="message-box__wrapper">
        Messagebox
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Messagebox extends Vue {
  doClose (): void {
    console.log('close');
  }

  handleKeyboard (e: KeyboardEvent): void {
    if (e.keyCode === 13) {
      console.log('enter');
    } else if (e.keyCode === 27) {
      console.log('esc');
    }
  }

  beforeDestroy () {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  mounted () {
    window.addEventListener('keydown', this.handleKeyboard);
  }
}
</script>

<style lang="less">
.message-box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  text-align: center;

  &:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .message-box__wrapper {
    display: inline-block;
    vertical-align: middle;
    padding: 10px 15px;
    width: 420px;
    height: 100px;
    font-size: 18px;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
}
</style>
