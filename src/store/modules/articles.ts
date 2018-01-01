import { Action } from '../index';
import * as types from '../mutation-types';
import { articles as Api } from '../../api';
import { Article } from '../../api/articles';

export interface State {
  articles: Article;
}

const actions = {
  getArticles (ctx: Action) {
    setTimeout(() => {
      const articles = Api.getArticles();
      ctx.commit(types.GET_ARTICLES, articles);
    }, 1000);
  }
};

const mutations = {
  [types.GET_ARTICLES] (state: State, articles: Article) {
    state.articles = articles;
    // TODO:
    console.log(123, state);
  },
  [types.GET_MORE_ARTICLES] (state: State, articles: Article) {
    // state.articles = articles;
  }
};

export default {
  actions,
  mutations
};
