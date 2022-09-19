<template>
  <div id="main">
    <Header/>
    <img src="@/assets/images/main.png"/>
    <Aside/>
    <Footer/>
  </div>
</template>

<script>
  //import Header from '@/include/header.vue'; // 헤더
  import Footer from  '@/include/footer.vue'; // 푸터
  import Aside from  '@/include/aside.vue'; // 메인 사이드 메뉴

export default {
  name: 'MainPage',
  components: {
    /*Header*/Footer, Aside
  }
}
</script>
