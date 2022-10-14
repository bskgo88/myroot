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

    <ul class="SSInBox" v-if="SetListNum === 5">
      <li><router-link to="/databoard">자료실1</router-link></li>
      <li><router-link to="/databoard2">자료실2</router-link></li>
      <li><router-link to="/databoard3">자료실3</router-link></li>
    </ul>

    <ul class="SSInBox" v-if="SetListNum === 6">
      <li><router-link to="/notice">공지사항</router-link></li>
      <li><router-link to="/notice">자유게시판</router-link></li>
      <li><router-link to="/notice">관련사이트</router-link></li>
      <li><router-link to="/notice">갤러리</router-link></li>
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