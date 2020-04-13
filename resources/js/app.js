/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//import and set to use VueRouter
import VueRouter from 'vue-router';
window.Vue = require('vue');
window.Vue.use(VueRouter);

//import vue products components
import ProductsIndex from './components/Products/ProductsIndex.vue';
import ProductsCreate from './components/Products/ProductsCreate.vue';
import ProductsEdit from './components/Products/ProductsEdit.vue';


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const routes = [
    {
        path: '/',
        components: {
            ProductsIndex: ProductsIndex
        }
    },
    {path: '/admin/products/create', component: ProductsCreate, name: 'createProduct'},
    {path: '/admin/products/edit/:id', component: ProductsEdit, name: 'editProduct'},
]

const router = new VueRouter({ routes });
const app = new Vue({ router }).$mount('#app');
