import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth/auth';
import user from './modules/user/user';
import post from './modules/post/post';
import find from './modules/find/find';
import comment from './modules/comment/comment';
import anotherUser from './modules/another-user/another-user';
import subscribe from './modules/subscribe/subscribe';
import search from './modules/search/search';
import scrap from './modules/scrap/scrap';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
    find,
    user,
    auth,
    comment,
    anotherUser,
    subscribe,
    search,
    scrap,
  },
  state: {},
  getters: {},
  mutations: {},
});
