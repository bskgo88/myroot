<template>
  <div id="SubHeader">
    <ul class="Invigator">
      <li><router-link to="/" class="home"><img src="@/assets/images/icon/icon-home.png"/></router-link></li>
      <li v-if="SetListCode === 1"><router-link to="/info">파종회 소개</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 1"><router-link to="/info">파종회 약사</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 2"><router-link to="/info2">인사말씀</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 3"><router-link to="/info3">회칙</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 4"><router-link to="/info4">임원명단</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 5"><router-link to="/info5">파종회사무실</router-link></li>

      <li v-if="SetListCode === 2"><router-link to="/book1">선원보감</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 1"><router-link to="/book1">원파기, 선원</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 2"><router-link to="/book2">선원계보도</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 3"><router-link to="/book3">선원선계</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 4"><router-link to="/book4">선원계</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 5"><router-link to="/book5">분산도 및 비명</router-link></li>
      <li v-if="SetListCode === 2 && SetListSubCode === 6"><router-link to="/book6">열성실기 및 기적비명</router-link></li>

      <li v-if="SetListCode === 4"><router-link to="/new1">파종회소식</router-link></li>
      <li v-if="SetListCode === 4 && SetListSubCode === 1"><router-link to="/new1">행사일정</router-link></li>
      <li v-if="SetListCode === 4 && SetListSubCode === 2"><router-link to="/new2">행사갤러리</router-link></li>
      <li v-if="SetListCode === 4 && SetListSubCode === 3"><router-link to="/new3">행사동영상</router-link></li>


      <li v-if="SetListCode === 5"><router-link to="/databoard">자료실</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 1"><router-link to="/databoard">보학자료</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 2"><router-link to="/databoard2">전통예절</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 3"><router-link to="/databoard3">계촌법</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 4"><router-link to="/databoard3">동서양 년대대조표</router-link></li>


      <li v-if="SetListCode === 6"><router-link to="/notice">열린마당</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 1"><router-link to="/notice">게시판</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 2"><router-link to="/notice2">자유게시판</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 3"><router-link to="/notice3">관련사이트</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 4"><router-link to="/notice4">갤러리</router-link></li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  components: {
  },
  computed: {
    SetListCode() {
      return this.$route.meta.code;
    },
    SetListSubCode() {
      return this.$route.meta.subcode;
    },
    SetSubType() {
      return this.$route.meta.subType;
    },
  }
}
</script>