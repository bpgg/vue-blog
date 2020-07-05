import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    // 首页
    {
        path: "/",
        redirect: "login",
        hidden: true,
        meta: {
            name: "主页"
        }

    },
    // 登录页
    {
        path: "/login",
        name: "Login",
        hidden: true,
        meta: {
            name: "登录"
        },
        component: () => import("../pages/Login/index.vue")
    },
    {
        path: "/Home",
        name: "Home",
        hidden: true,
        meta: {
            name: "首页"
        },
        component: () => import("../pages/Home/index.vue")
    },
    // 文章详情
    {
        path: "/ArticleDetail",
        name: "ArticleDetail",
        component: () => import("../pages/Article/ArticleDetail.vue")
    }
];


const router = new VueRouter({
    routes
})

export default router;