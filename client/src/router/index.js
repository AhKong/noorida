import Vue from 'vue';
import Vuesax from 'vuesax';
import Router from 'vue-router';
import VeeValidate from 'vee-validate';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import LoginPage from './../pages/LoginPage';
import JoinPage from './../pages/JoinPage';

Vue.use(Router);
Vue.use(Vuesax);
Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '',
      redirect: LoginPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/join',
      name: 'JoinPage',
      component: JoinPage,
    },
  ],
});
