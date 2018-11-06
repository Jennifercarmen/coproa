import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main';
import Inicio from '../components/Inicio'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
          
        {
            path: '',
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        }

    ]
})

export default router;