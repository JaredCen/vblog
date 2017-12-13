<template>
  <div class="hello">
    <h1>{{ author }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ example.msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { State as ExampleState } from '../store/modules/example';

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'Junrey' })
  author: string;
  message: string = 'Hello vblog!';
  @State('example') example: ExampleState;
  @Action('add') add: Function;

  mounted () {
    this.add();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
