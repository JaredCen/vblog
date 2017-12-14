<template>
  <div class="editor">
    <h1>Editor</h1>
    <span v-html="content"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import marked from 'marked';
import highlight from 'highlight.js';

@Component
export default class Demo extends Vue {

  get content () {
    return marked('```js\n console.log("hello"); \n```');
  }

  setMarkedOpts () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: code => {
        // TODO
        return highlight.highlightAuto(code).value;
      }
    });
  }
}
</script>

<style scoped>

</style>
