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

      <li v-if="SetListCode === 5"><router-link to="/databoard">자료실</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 1"><router-link to="/databoard">자료실1</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 2"><router-link to="/databoard2">자료실2</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 3"><router-link to="/databoard3">자료실3</router-link></li>

      <li v-if="SetListCode === 6"><router-link to="/notice">열린마당</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 1"><router-link to="/notice">공지사항</router-link></li>
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