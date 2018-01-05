<template>
  <div class="articles">
    <h1>articles</h1>
    <div class="articles__cell" v-for="art in articles" :key="art.id">
      <div class="articles__cell-tit">{{art.title}}</div>
      <div class="articles__cell-bd">
        <span>{{art.author}}</span>
        <span>{{art.create_time}}</span>
        <!-- <span>{{art.tag}}</span> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { Article } from '../api/articles';

@Component
export default class Articles extends Vue {
  @Action('getArticles') getArticles: Function;
  @Getter('articles') articles: Article[];
  created () {
    this.getArticles();
  }
}
</script>

<style lang="less">
.articles {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

