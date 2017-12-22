import Vue from 'vue';
import Router from 'vue-router';
import Demo from '@/views/Demo.vue';
import Home from '@/views/Home.vue';
import Editor from '@/views/Editor.vue';
import Articles from '@/views/Articles.vue';
import Works from '@/views/Works.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    }
  ]
});
