import { createWebHistory, createRouter } from "vue-router";

/*가져온 페이지들*/
import MainPage from "@/components/MainPage.vue";
import SubPage1 from "@/components/sub/subpage.vue";
import MainSet from "@/components/MainSet.vue";

/* 파종회소개 */
import infoSet from "@/components/sub/infomation/infomation.vue"
import infoSet2 from "@/components/sub/infomation/infomation2.vue"
import infoSet3 from "@/components/sub/infomation/infomation3.vue"
import infoSet4 from "@/components/sub/infomation/infomation4.vue"
import infoSet5 from "@/components/sub/infomation/infomation5.vue"

/* 자료실 */
import databoard from "@/components/sub/data/databoard.vue"

/* 열린마당 */
import board from "@/components/sub/board/notice.vue"

/* 게시판관련 */
import viewboard from "@/components/sub/board/view.vue"


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
    name: "파종회 약사",
    component: infoSet,
    meta: {
      headerSub: true,
      code:1,
      subcode:1,
      subType:false,
      subname:"파종회 소개",
    }, 
  },
  {
    path: "/info2",
    name: "인사말씀",
    component: infoSet2,
    meta: {
      headerSub: true,
      code: 1,
      subcode: 2,
      subType: false,
      subname: "파종회 소개",
    },
  },
  {
    path: "/info3",
    name: "회칙",
    component: infoSet3,
    meta: {
      headerSub: true,
      code: 1,
      subcode: 3,
      subType: false,
      subname: "파종회 소개",
    },
  },
  {
    path: "/info4",
    name: "임원명단",
    component: infoSet4,
    meta: {
      headerSub: true,
      code: 1,
      subcode: 4,
      subType: false,
      subname: "파종회 소개",
    },
  },
  {
    path: "/info5",
    name: "파종회사무실",
    component: infoSet5,
    meta: {
      headerSub: true,
      code: 1,
      subcode: 5,
      subType: false,
      subname: "파종회 소개",
    },
  },
  //자료실
  {
    path: "/databoard",
    name: "자료실",
    component: databoard,
    meta: {
      headerSub: true,
      code:5,
      subcode:1,
      subType:false,
      subname:"자료실",
    }, 
  },
  {
    path: "/databoard2",
    name: "자료실2",
    component: databoard,
    meta: {
      headerSub: true,
      code:5,
      subcode:2,
      subType:false,
      subname:"자료실",
    }, 
  },
  {
    path: "/databoard3",
    name: "자료실3",
    component: databoard,
    meta: {
      headerSub: true,
      code:5,
      subcode:3,
      subType:false,
      subname:"자료실",
    }, 
  },

  //열린마당
  {
    path: "/notice",
    name: "공지 사항",
    component: board,
    meta: {
      headerSub: true,
      code:6,
      subcode:1,
      subType:false,
      subname:"열린마당",
    }, 
  },

  //내용보기
  {
    path: "/view",
    name: "내용 보기",
    component: viewboard,
    meta: {
      headerSub: true,
      code:6,
      subcode:1,
      subType:true,
      subname:"내용",
    }, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;