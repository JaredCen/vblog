import { Component, Vue } from 'vue-property-decorator';
import MaskVue from './';

const MaskConstructor = Vue.extend(MaskVue);

@Component
export default class MixinMask extends Vue {
  instance: any;
  doOpen (): void {
    if (!this.instance) {
      this.instance = new MaskConstructor({
        el: document.createElement('div')
      });
      document.body.appendChild(this.instance.$el);
    }
  }
  doClose (): void {
    if (this.instance) {
      this.instance.$el.parentNode.removeChild(this.instance.$el);
      this.instance = null;
    }
  }
}
