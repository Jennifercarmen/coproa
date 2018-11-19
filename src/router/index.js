import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main';
import ExpTramCop from '../components/ExpTramCop';
import ListasCoproa from '../components/ListasCoproa';
import Inicio from '../components/Inicio'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },
        {
            path: '/ExpTramCop',
            name: 'ExpTramCop',
            component: ExpTramCop
        },
        {
            path: '/ListasCoproa',
            name: 'ListasCoproa',
            component: ListasCoproa
        }
    ]
})

export default router;