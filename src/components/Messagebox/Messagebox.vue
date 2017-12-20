<template>
  <transition name="message-box__fade">
    <div class="message-box" @click.self="cancel">
      <div class="message-box__wrapper">
        <div class="message-box__hd">
          MessageboxHD
        </div>
        <div class="message-box__bd">
          MessageboxBD
        </div>
        <div class="message-box__btn">
          <button @click.prevent="confirm">confirm</button>
          <button @click.prevent="cancel">cancel</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MixinMask from '../Mask/Mask';

@Component
export default class Messagebox extends MixinMask {
  // TODO: message, title, cb等
  // @Prop()

  @Prop({ default: null })
  onConfirm: Function | null;

  @Prop({ default: null })
  onCancel: Function | null;

  @Prop({ default: null })
  onClose: Function | null;

  open (): void {
    this.doOpen();
  }

  close (): void {
    this.onClose && this.onClose();
    this.doClose();
    this.$destroy();
  }

  confirm (): void {
    console.log('confirm');
    this.onConfirm && this.onConfirm();
    this.close();
  }

  cancel (): void {
    console.log('cancel');
    this.onCancel && this.onCancel();
    this.close();
  }

  handleKeyboard (e: KeyboardEvent): void {
    if (e.keyCode === 13) {
      // keyboard: Enter
      this.confirm();
    } else if (e.keyCode === 27) {
      // keyboard: ESC
      this.cancel();
    }
  }

  beforeDestroy () {
    window.removeEventListener('keydown', this.handleKeyboard);
    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
  }

  mounted () {
    this.open();
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
