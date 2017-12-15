<template>
  <div class="hello">
    <h1>{{ author }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';

@Component
export default class Demo extends Vue {
  @Prop({ default: 'Junrey' })
  author: string;
  message: string = 'Hello vblog!';
  @State(state => state.example.msg) msg: string;
  @Action('add') add: Function;

  mounted () {
    this.add();
  }
}
</script>

<style>

</style>
