<template>
  <div id="main">
    <div class="main-slide">
      <ul>
        <li style="background:url('../assets/images/main_slide1.png')"></li>
      </ul>
    </div>
    <div class="slide-bottom">
      <div class="slide-buttonbox">
        <button class="leftBtn"></button> 
        <span><i>1</i>/<i>4</i></span>
        <button class="rightBtn"></button>        
      </div>
      <div class="main-search">
        <div class="search-box">
          <input type="text" placeholder="검색내용을 입력하세요">
        </div>
        <button>검색하기</button>
      </div>
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