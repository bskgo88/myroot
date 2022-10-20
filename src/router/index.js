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


/* 선원보감 */
import book1 from "@/components/sub/book/book1.vue"
import book2 from "@/components/sub/book/book2.vue"
import book3 from "@/components/sub/book/book3.vue"
import book4 from "@/components/sub/book/book4.vue"
import book5 from "@/components/sub/book/book5.vue"
import book6 from "@/components/sub/book/book6.vue"


/* 파종회 소식*/
import news1 from "@/components/sub/news/news1.vue"
import news2 from "@/components/sub/news/news2.vue"
import news3 from "@/components/sub/news/news3.vue"

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
    name: "보학자료",
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
    name: "전통예절",
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
    name: "계촌법",
    component: databoard,
    meta: {
      headerSub: true,
      code:5,
      subcode:3,
      subType:false,
      subname:"자료실",
    }, 
  },
  {
    path: "/databoard4",
    name: "동서양 년대대조표",
    component: databoard,
    meta: {
      headerSub: true,
      code: 5,
      subcode: 4,
      subType: false,
      subname: "자료실",
    },
  },


  //선원보감
  {
    path: "/book1",
    name: "원파기, 선원",
    component: book1,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 1,
      subType: false,
      subname: "선원보감",
    },
  },

  {
    path: "/book2",
    name: "선원계보도",
    component: book2,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 2,
      subType: false,
      subname: "선원보감",
    },
  },

  {
    path: "/book3",
    name: "선원선계",
    component: book3,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 3,
      subType: false,
      subname: "선원보감",
    },
  },

  {
    path: "/book4",
    name: "선원계",
    component: book4,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 4,
      subType: false,
      subname: "선원보감",
    },
  },

  {
    path: "/book5",
    name: "분산도 및 비명",
    component: book5,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 5,
      subType: false,
      subname: "선원보감",
    },
  },

  {
    path: "/book6",
    name: "열성실기 및 기적비명",
    component: book6,
    meta: {
      headerSub: true,
      code: 2,
      subcode: 6,
      subType: false,
      subname: "선원보감",
    },
  },

  //파종회 소식
  {
    path: "/news1",
    name: "행사일정",
    component: news1,
    meta: {
      headerSub: true,
      code: 4,
      subcode: 1,
      subType: false,
      subname: "파종회 소식",
    },
  },
  {
    path: "/news2",
    name: "행사갤러리",
    component: news2,
    meta: {
      headerSub: true,
      code: 4,
      subcode: 2,
      subType: false,
      subname: "파종회 소식",
    },
  },
  {
    path: "/news3",
    name: "행사동영상",
    component: news3,
    meta: {
      headerSub: true,
      code: 4,
      subcode: 3,
      subType: false,
      subname: "파종회 소식",
    },
  },
  //열린마당
  {
    path: "/notice",
    name: "게시판",
    component: board,
    meta: {
      headerSub: true,
      code:6,
      subcode:1,
      subType:false,
      subname:"열린마당",
    }, 
  },
  {
    path: "/notice2",
    name: "자유게시판",
    component: board,
    meta: {
      headerSub: true,
      code: 6,
      subcode: 2,
      subType: false,
      subname: "열린마당",
    },
  }, {
    path: "/notice3",
    name: "관련사이트",
    component: board,
    meta: {
      headerSub: true,
      code: 6,
      subcode: 3,
      subType: false,
      subname: "열린마당",
    },
  }, {
    path: "/notice4",
    name: "갤러리",
    component: board,
    meta: {
      headerSub: true,
      code: 6,
      subcode: 4,
      subType: false,
      subname: "열린마당",
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