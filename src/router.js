import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './Views/dashboard.vue'
import order from './Views/order.vue'
 
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: dashboard
    },
{
    path: '/order',
    component: order
}]
})

export default router;