<template>
  <div id="Subside">
    <strong class="SSTitle">{{SetBoxName}}</strong>
    <ul class="SSInBox" v-if="SetListNum === 1">
      <li><router-link to="/info">파종회약사</router-link></li>
      <li><router-link to="/info2">인사말씀</router-link></li>      
      <li><router-link to="/info3">회칙</router-link></li>
      <li><router-link to="/info4">임원명단</router-link></li>
      <li><router-link to="/info5">파종회사무실</router-link></li>
    </ul>

    <ul class="SSInBox" v-if="SetListNum === 2">
      <li><router-link to="/book1">원파기, 선원</router-link></li>
      <li><router-link to="/book2">선원계보도</router-link></li>
      <li><router-link to="/book3">선원선계</router-link></li>
      <li><router-link to="/book4">선원계</router-link></li>
      <li><router-link to="/book5">분산도 및 비명</router-link></li>
      <li><router-link to="/book6">열성실기 및 기적비명</router-link></li>
    </ul>

    <ul class="SSInBox" v-if="SetListNum === 4">
      <li><router-link to="/news1">행사일정</router-link></li>
      <li><router-link to="/news2">행사갤러리</router-link></li>
      <li><router-link to="/news3">행사동영상</router-link></li>
    </ul>

    <ul class="SSInBox" v-if="SetListNum === 5">
      <li><router-link to="/databoard">보학자료</router-link></li>
      <li><router-link to="/databoard2">전통예절</router-link></li>
      <li><router-link to="/databoard3">계촌법</router-link></li>
      <li><router-link to="/databoard4">동서양 년대대조표</router-link></li>

    </ul>

    <ul class="SSInBox" v-if="SetListNum === 6">
      <li><router-link to="/notice">게시판</router-link></li>
      <li><router-link to="/notice2">자유게시판</router-link></li>
      <li><router-link to="/notice3">관련사이트</router-link></li>
      <li><router-link to="/notice4">갤러리</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubSide',
  components: {
  },
  computed: {
    SetBoxName() {
      return this.$route.meta.subname;
    },
    SetListNum() {
      return this.$route.meta.code;
    },
  },
}
</script>