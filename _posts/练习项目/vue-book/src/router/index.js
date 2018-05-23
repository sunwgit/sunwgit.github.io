import Vue from "vue";
import Router from "vue-router";

import home from "../components/home.vue";
import list from "../components/list.vue";
import collect from "../components/collect.vue";
import add from "../components/add.vue";
import detail from "../components/detail.vue";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/list",
            name: "list",
            component: list
        },
        {
            path: "/collect",
            name: "collect",
            component: collect
        },
        {
            path: "/add",
            name: "add",
            component: add
        },
        {
            path: "/detail/:bid",
            name: "detail",
            component: detail
        },
        {
            path: "/*",
            redirect: "/home"
        }
    ]
});
