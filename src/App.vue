<template>
  <Header :class="{on:SubActive}" />
  <router-view/>
</template>

<script>
import Header from '@/include/header.vue'; // 헤더
import '@/assets/overrides.sass'

export default {
  name: 'App',
  components: {
    Header,
  },
	data (){
    return {
      headerSub : false,
		}
	},
  computed: {
    SubActive() {
      return this.$route.meta.headerSub;
    },
  },
}
</script>