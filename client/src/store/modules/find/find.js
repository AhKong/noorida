import * as types from './mutation_types';
import api from '@/api/ApiService';

const state = {
  foundNickName: '',
  findPasswordSuccess: false,
};
const getters = {
  getFindNickname: state => state.foundNickName,
  getFindPasswordSuccess: state => state.findPasswordSuccess,
};
const actions = {
  findPasswordProcess: async ({commit}, payload) => {
    const { realName, nickName, email} = payload;
    const data = await api.findPassword(realName, nickName, email)
      .then(result => result.data)
      .catch(err=>err);

    if(data && !(data instanceof Error)) {
      commit(types.FIND_PASSWORD_SUCCESS, true);
      await api.insertTmpPassword(payload.email);
    }else {
      commit(types.FIND_PASSWORD_SUCCESS, false);
    }
  },
  findIdProcess: async ({ commit } , payload) => {
    const { realName, email } = payload;
    const data =  await api.findId(realName , email)
      .then(result => result.data)
      .catch(err => err);
    if (data && !(data instanceof Error)) {
      commit(types.SET_FOUND_ID, data.nickName);
    } else {
      commit(types.SET_FOUND_ID, null);
    }
  },
};
const mutations = {
  [types.SET_FOUND_ID] (state, payload) {
    state.foundNickName = payload;
  },
  [types.FIND_PASSWORD_SUCCESS] (state, payload) {
    state.findPasswordSuccess = payload;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

