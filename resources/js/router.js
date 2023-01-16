import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login-page",
            component: () => import("./views/login/index.vue")
        },
        /**
         * Ticket routes
         */
        {
            path: "/admin/tickets",
            name: "tickets",
            component: () => import("./views/ticket/index.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
