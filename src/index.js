import Vue from 'vue'
import App from './App.vue';
import './assets/styles/common.scss';

new Vue({
    el: '#app',
    render: h => h(App),
});

const __svg__ = {
    path: './assets/icons/**/*.svg',
    name: 'assets/icons/[hash].pack.svg',
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
