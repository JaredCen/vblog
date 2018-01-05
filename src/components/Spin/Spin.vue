<template>
  <div class="spin" :style="getSize(size)">
    <div v-for="(n, i) in 12" class="spin__daisy-petal" :class="getPetalClass(n)" :key="i"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spin extends Vue {
  @Prop({ default: 25 })
  size: number;

  @Prop({ default: '#ccc' })
  color: string;

  getPetalClass (n: number): string {
    return `spin__daisy-petal-${n}`;
  }

  getSize (size: number): object {
    return {
      'width': `${size}px`,
      'height': `${size}px`
    };
  }

  created () {
    (document.styleSheets[0] as CSSStyleSheet).addRule(`.spin__daisy-petal:before`, `background-color:${this.color}`);
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.spin {
  position: relative;
  display: inline-block;

  .generate-petal(@n, @i: 1) when (@i =< @n) {
    .spin__daisy-petal-@{i} {
      transform: rotate(360deg / @n * (@i - 1));
      &:before {
        // 减去@animation-time适配动画开端
        animation-delay: @time-spin-cycle / @n * (@i - 1) - @time-spin-cycle;
      }
    }
    .generate-petal(@n, (@i + 1));
  }

  @keyframes my-spin {
    0%, 40%, 100% {opacity: 0;}
    50% {opacity: 1;}
  }

  .spin__daisy-petal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 8%;
      height: 24%;
      border-radius: 5px;
      animation: my-spin @time-spin-cycle infinite ease-in-out;
    }        
  }

  .generate-petal(12);
}
</style>

