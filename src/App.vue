<template>
  <Header/>
  <router-view />
</template>

<script>
import Header from '@/include/header.vue'; // 헤더
import '@/assets/overrides.sass'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>