<template>
 <div id="shortCut">
    <ul>
        <li><span>유물<br />및 유적<router-link to="/">더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></router-link></span></li>
        <li><span>전주이씨<br />유래 <router-link to="/">더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></router-link></span></li>
        <li class="book"><span>인터넷족보 <router-link to="/"><i :style="{'background-image': 'url(' + require('../assets/images/icon/books.png') + ')'}"></i></router-link></span></li>
        <li><span>가문을<br />빛낸인물 <router-link to="/">더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></router-link></span></li>
    </ul>
 </div>
</template>

<script>
export default {
    name: 'shortCut',
    components: {
    }
}
</script>
