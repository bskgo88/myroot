import { createWebHistory, createRouter } from "vue-router";

/*가져온 페이지들*/
import MainPage from "@/components/MainPage.vue";
import SubPage1 from "@/components/sub/subpage.vue";
import MainSet from "@/components/MainSet.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/sub1",
    name: "sub",
    component: SubPage1,
  },
  {
    path: "/test",
    name: "MainSet",
    component: MainSet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;