import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

// 子路由组件
import AboutOverview from "@/components/AboutOverview.vue";
import AboutTeam from "@/components/AboutTeam.vue";
import AboutHistory from "@/components/AboutHistory.vue";

Vue.use(Router);

export default new Router({
    mode: "history", // 使用 HTML5 History 模式
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
            children: [
                {
                    path: "overview", // 子路由的路径
                    name: "AboutOverview",
                    component: AboutOverview,
                },
                {
                    path: "team",
                    name: "AboutTeam",
                    component: AboutTeam,
                },
                {
                    path: "history",
                    name: "AboutHistory",
                    component: AboutHistory,
                },
            ],
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
    ],
});
