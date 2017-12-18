import { Action } from '../index';
import * as types from '../mutation-types';

export interface State {
  msg: string;
}

export interface Payload {
  msg: string;
}

// state
const state: State = {
  msg: 'junrey'
};

// getters
const getters = {
  getMsg: (state: State) => state.msg
};

// actions
const actions = {
  add (ctx: Action) {
    setTimeout(() => {
      const payload: Payload = { msg: 'Qlr' };
      ctx.commit(types.ADD_MESSAGE, payload);
    }, 1000);
  }
};

// mutations
const mutations = {
  [types.ADD_MESSAGE] (state: State, payload: Payload) {
    state.msg += payload.msg;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
