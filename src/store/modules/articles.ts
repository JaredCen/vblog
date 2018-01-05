import { Action } from '../index';
import * as types from '../mutation-types';
import { articles as Api } from '../../api';
import { Article } from '../../api/articles';

export interface State {
  articles: Article[];
}

const state: State = {
  articles: []
};

const getters = {
  articles: (state: State) => state.articles
};

const actions = {
  getArticles (ctx: Action) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const articles = Api.getArticles();
        ctx.commit(types.GET_ARTICLES, articles);
      }, 1000);
      resolve();
    });
  }
};

const mutations = {
  [types.GET_ARTICLES] (state: State, articles: Article[]) {
    state.articles = articles;
  },
  [types.GET_MORE_ARTICLES] (state: State, articles: Article[]) {
    // state.articles = articles;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
