<template>
 <div id="shortCut">
    <ul>
        <li><router-link to="/">유물 및 유적 <span>더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></span></router-link></li>
        <li><router-link to="/">전주이씨 유래 <span>더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></span></router-link></li>
        <li><router-link to="/">가문을 빛낸인물 <span>더보기 <i :style="{'background-image': 'url(' + require('../assets/images/icon/more-arrow.png') + ')'}"></i></span></router-link></li>
        <li><router-link to="/">인터넷족보 <span i :style="{'background-image': 'url(' + require('../assets/images/icon/books.png') + ')'}"></span></router-link></li>
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
