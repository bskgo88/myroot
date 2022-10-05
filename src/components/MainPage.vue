<template>
  <div id="main">
    <div class="main-slide">
      <ul>
        <li :style="{'background-image': 'url(' + require('../assets/images/main_slide1.png') + ')'}"></li>
      </ul>
    </div>
    <div class="slide-bottom">
      <div class="slide-buttonbox">
        <button class="leftBtn" :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainSlideLeft.png') + ')'}" ></button> 
        <span><i class="active">01</i>/<i>04</i></span>
        <button class="rightBtn" :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainSlideRight.png') + ')'}"></button>        
      </div>
      <div class="main-search">
        <div class="search-box">
          <i class="" :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainsearch.png') + ')'}"></i>
          <input type="text" placeholder="검색내용을 입력하세요">
        </div>
        <button class="search-button">검색하기</button>
      </div>
    </div>
    <Shortcut/>
    <Aside/>
    <Footer/>
    
  </div>
</template>

<script>
  import Shortcut from '@/include/shortcut.vue'; // 바로가기 서비스
  import Footer from  '@/include/footer.vue'; // 푸터
  import Aside from  '@/include/aside.vue'; // 메인 사이드 메뉴

export default {
  name: 'MainPage',
  components: {
    Shortcut, Footer, Aside
  }
}   
</script>