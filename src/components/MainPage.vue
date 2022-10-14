<template>
  <div id="main">
    <carousel :items-to-show="1" :wrap-around="true" class="main-slide" ref="carousel" v-model="currentSlide" snapAlign="start">
      <slide v-for="slide in 4" :key="slide" class="msItem" :style="{backgroundImage: 'url('+require(`@/assets/images/main_slide`+slide+`.png`)+')'}">
      </slide>
      <template #addons>
        <!--<navigation />-->
        <pagination />
      </template>
    </carousel>
    <div class="slide-bottom">
      <div class="slide-buttonbox">
        <button class="leftBtn" @click="prev"
          :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainSlideLeft.png') + ')'}"></button>
        <span><i class="active">0{{currentSlide+1}}</i>/<i>0{{maxslide}}</i></span>
        <button class="rightBtn" @click="next"
          :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainSlideRight.png') + ')'}"></button>
      </div>
      <div class="main-search">
        <div class="search-box">
          <i class=""
            :style="{'background-image': 'url(' + require('../assets/images/icon/icon-mainsearch.png') + ')'}"></i>
          <input type="text" placeholder="검색내용을 입력하세요">
        </div>
        <button class="search-button">검색하기</button>
      </div>
    </div>
    <Shortcut />
    <Aside />
    <Notice />
    <Footer/>
    
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, /*Navigation*/ } from 'vue3-carousel';

import Shortcut from '@/include/shortcut.vue'; // 바로가기 서비스
import Footer from  '@/include/footer.vue'; // 푸터
import Aside from '@/include/aside.vue'; // 메인 사이드 메뉴
import Notice from '@/include/notice.vue'; // 
export default {
  name: 'MainPage',
  components: {
    Shortcut,
    Footer,
    Aside,
    Notice,
    Carousel,
    Slide,
    Pagination,
    //Navigation,
  },
  data: () => ({
    currentSlide: 0,
    slide:0,
    maxslide:4,
    
  }),
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
}   
</script>