<template>
  <div id="main">
    메인화면
    <Aside/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from  '@/include/footer.vue'; // 푸터
  import Aside from  '@/include/aside.vue'; // 메인 사이드 메뉴

export default {
  name: 'MainPage',
  components: {
    Footer, Aside
  }
}
</script>
