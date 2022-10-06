import { createWebHistory, createRouter } from "vue-router";

/*가져온 페이지들*/
import MainPage from "@/components/MainPage.vue";
import SubPage1 from "@/components/sub/subpage.vue";
import MainSet from "@/components/MainSet.vue";
import infoSet from "@/components/sub/infomation/infomation.vue"

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

  //서브페이지 라우터
  {
    path: "/info",
    name: "파종회소개",
    component: infoSet,
    subname:{
      subSet:true, // 메뉴가 늘어날지 말지를 판단
      firstName:"파종회소개", // 첫번째 이름
      secondName:"파종회소개", // 두번째 이름
    },
    meta: {
      headerSub: true, // headerSub: true == '상단,하단,좌측 메뉴를 생성해줌'
    }, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;