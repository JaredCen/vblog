<template>
  <div class="editor">
    <h1>Editor</h1>
    <div class="editor__hd">
      hd
    </div>
    <div class="editor__toolbar">
      toolbar
    </div>
    <div class="editor__bd">
      <div class="editor__input">
        <textarea v-model="content"/>
      </div>
      <div class="editor__output">
        <div 
          class="e-o-ctn" 
          v-html="result"
        />
      </div>
    </div>

    <!-- <messagebox></messagebox>
    <my-mask></my-mask> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css';
import { storage } from '../utils';

import { Messagebox, Mask } from '../components';

@Component({
  components: {
    Messagebox,
    MyMask: Mask
  }
})
export default class Editor extends Vue {
  content: string = '';

  get markedOpts (): object {
    return {
      highlight: (code: any) => {
        return highlight.highlightAuto(code).value;
      }
    };
  }

  get result (): string {
    return marked(this.content, this.markedOpts);
  }

  @Watch('content')
  onCtnChanged (val: string, oldVal: string) {
    storage.setItem('blogCtn', val);
  }

  registerNavGuards (): void {
    this.$router.beforeEach((to, from, next) => {
      // TODO: message box
      next();
    });
  }

  mounted () {
    const cacheCtn = storage.getItem('blogCtn');
    this.content = cacheCtn;

    this.registerNavGuards();

    this.$confirm()
    .then((val: boolean) => {
      console.log(val);
    })
    .catch((val: boolean) => {
      console.log(val);
    });
  }
}
</script>

<style lang="less">
.editor {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  .mixin-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 35px 35px 50px;
    overflow: auto;
  }
  .editor__hd {
    flex: 0 0 auto;
    height: 50px;
  }
  .editor__toolbar {
    flex: 0 0 auto;
    height: 30px;
  }
  .editor__bd {
    flex: 1 1 auto;
    display: flex;
    .editor__input,
    .editor__output {
      flex: 0 0 auto;
      margin: 0 2%;
      width: 46%;
    }
    .editor__input {
      textarea {
        .mixin-content;
        font-size: 13px;
        resize: none;
      }
    }
    .e-o-ctn {
      .mixin-content;
      border: 1px solid rgb(169, 169, 169);
    }
  }
}
</style>
