import Vue from 'vue';
import Home from './components/Home.vue'
import store from './store'

new Vue({
    // el: '#home',
    store,
    render: h => h(Home)
}).$mount('#home');
  