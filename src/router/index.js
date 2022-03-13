import { createRouter, createWebHistory } from 'vue-router'
import BadgeGenerator from '../components/BadgeGenerator.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'generator',
            component: BadgeGenerator,
        },
    ],
})

router.beforeEach((to, from, next) => {
    to.fullPath === '/' ? next() : next({ name: 'generator' })
})

export default router
