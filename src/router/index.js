import { createWebHistory, createRouter } from "vue-router";

/*가져온 페이지들*/
import MainPage from "@/components/MainPage.vue";
import SubPage1 from "@/components/sub/subpage.vue";
import MainSet from "@/components/MainSet.vue";

/* 파종회소개 */
import infoSet from "@/components/sub/infomation/infomation.vue"

/* 자료실 */
import databoard from "@/components/sub/data/databoard.vue"

/* 열린마당 */
import board from "@/components/sub/board/notice.vue"

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

  //파종회 소개
  {
    path: "/info",
    name: "파종회 소개",
    component: infoSet,
    meta: {
      headerSub: true,
      code:1,
      subcode:1,
      subType:true,
      subname:"파종회 약사",
    }, 
  },

  //열린마당
  {
    path: "/databoard",
    name: "자료실",
    component: databoard,
    meta: {
      headerSub: true,
      code:5,
      subcode:1,
      subType:true,
      subname:"공지 사항",
    }, 
  },

  //열린마당
  {
    path: "/notice",
    name: "열린마당",
    component: board,
    meta: {
      headerSub: true,
      code:6,
      subcode:1,
      subType:true,
      subname:"공지 사항",
    }, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;