<template>
  <div id="footer">
    <div class="footer-cont">
      <ul>
        <li><router-link to="">파종회 소개</router-link></li>
        <li><router-link to="">개인정보취급방침</router-link></li>
        <li><router-link to="">이메일 무단수집거부</router-link></li>
        <li><router-link to="">책임의 한계와 법적고지</router-link></li>
      </ul>
      <div class="footer-address">
        <h1><router-link to=""  :style="{'background-image': 'url(' + require('../assets/images/logo-block.png') + ')'}"></router-link></h1>
        <div>
          <address>주소 : 서울특별시 관악구 봉천로 575-1 육군회관 501호 | 전화 02-886-6980 , 070-7670-0275 팩스 02-885-0041</address>
          <p>익현군파종회翼峴君派宗會 © All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterItem',
  components: {
  }
}
</script>
