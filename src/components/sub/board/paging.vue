<template>
    <div class="pagination">
        <span class="icon first" :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-first.png') + ')'}"></span>
        <span class="icon prev" :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-prev.png') + ')'}"></span>
        <span class="icon active">1</span>
        <span class="icon">2</span>
        <span class="icon">3</span>
        <span class="icon">4</span>
        <span class="icon">5</span>
        <span class="icon next" :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-next.png') + ')'}"></span>
        <span class="icon last" :style="{'background-image': 'url(' + require('@/assets/images/icon/icon-last.png') + ')'}"></span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NoticePage',
    components: {
    },
    data (){
    return {
        }
    },
    computed: {
    },
  }
  </script>