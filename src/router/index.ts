import store from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

/**
 * Define route configuration with role-based access control
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: { role: "all" },
        component: () => import('@/components/NotFoundPage.vue')
        // component: () => import('@/components/NotFoundPage.vue')
    },
    {
        path: '/login',
        meta: { role: "all" },
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/salles',
        meta: { role: "all" },
        component: () => import('@/components/Salles.vue')
    },
    {
        path: '/calendar',
        meta: { role: "all" },
        component: () => import('@/components/Calendar.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: { role: 'all' },
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { role: "all" },
        component: () => import('@/components/NotFoundPage.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        meta: { role: "all" },
        component: () => import('@/components/NotFoundPage.vue')
    },
    {
        path: '/changePassword',
        name: 'changePassword',
        meta: {
            role: "all"
        },
        component: () => import('@/components/NotFoundPage.vue')
    },
    {
        path: '/404',
        name: 'Page404',
        meta: {
            role: "all"
        },
        component: () => import('@/components/NotFoundPage.vue')
    },
    // Catch-all route to handle undefined routes
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: { role: "all" },
        component: () => import('@/components/NotFoundPage.vue')
    }
]

// Create router instance with history mode
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // Scroll behavior to reset scroll position on route change
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})



/**
 * Global navigation guard for authentication and role-based access
 */
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    next();

    // dispatchModuleForRoute(to);

    if (!isRouteAccessible(to)) {
        next('/404');
        return;
    }

});

function isRouteAccessible(to: RouteLocationNormalized): boolean {
    /**
     * return to.meta.role === "all" || checkUserByRole([to.meta.role as string]);
     */
    return to.meta.role === "all"

}

function dispatchModuleForRoute(to: RouteLocationNormalized): void {
    const moduleDispatches: Record<string, string> = {
        "home": "home",
    };
    const moduleKey = Object.keys(moduleDispatches).find(key => to.path.includes(key));
    store.dispatch("module", moduleKey ? moduleDispatches[moduleKey] : "home");
}


export default router