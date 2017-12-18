import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import demo from './modules/demo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export interface Action {
  commit: Commit;
  dispatch: Dispatch;
}

export default new Vuex.Store({
  modules: {
    demo
  },
  strict: debug
});

