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
export default class HelloWorld extends Vue {
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
