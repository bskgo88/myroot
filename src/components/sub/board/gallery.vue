<template>
  <div class="MTBoard">
      <div class="SearchBox">
          <div class="SBhit">
              <strong>125</strong>
              <span>건의 정보가 있습니다.</span>
          </div>
          <div class="SBSelBox">
              <select>
                  <option>제목</option>
              </select>
              <input/>
              <button :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-subsearch.png') + ')'}"></button>
          </div>
      </div>
      <div class="galleryBox">
        <ul>
            <li v-for="itemNum in 6" :key="itemNum" class="galleryItem" >
                <span><img :src="require(`@/assets/images/gallery/`+itemNum+`.jpg`)" alt=""></span>
                <b>제목이 들어갑니다 </b>
                <router-link to="/view"></router-link>
            </li>
        </ul>
      </div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'BoardPage',
    components: {
    },
    data (){
    return {
        }
    },
  }
  </script>