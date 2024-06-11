import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import ProjectComponent from "./pages/ProjectComponent.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectList
        },
        {
            path: "/projects/:slug",
            name: "solo-project",
            component: ProjectComponent,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },
    ]
});
export { router };