<template>
  <div id="main">
    <div class="main-slide">
      <ul>
        <li><a href="#none"><img src="" alt="">이미지1</a></li>
        <li><a href="#none"><img src="" alt="">이미지2</a></li>
        <li><a href="#none"><img src="" alt="">이미지3</a></li>
      </ul>
    </div>
    <div class="slide-bottom">
      
    </div>
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