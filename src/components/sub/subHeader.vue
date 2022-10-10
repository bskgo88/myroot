<template>
  <div id="SubHeader">
    <ul class="Invigator">
      <li><router-link to="/" class="home"><img src="@/assets/images/icon/icon-home.png"/></router-link></li>
      <li v-if="SetListCode === 1"><router-link to="/info">파종회 소개</router-link></li>
      <li v-if="SetListCode === 1 && SetListSubCode === 1"><router-link to="/info">파종회 약사</router-link></li>

      <li v-if="SetListCode === 5"><router-link to="/databoard">자료실</router-link></li>
      <li v-if="SetListCode === 5 && SetListSubCode === 1"><router-link to="/databoard">자료실1</router-link></li>

      <li v-if="SetListCode === 6"><router-link to="/board">열린마당</router-link></li>
      <li v-if="SetListCode === 6 && SetListSubCode === 1"><router-link to="/board">공지사항</router-link></li>
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
    SetSubName() {
      return this.$route.meta.subname;
    },
  }
}
</script>