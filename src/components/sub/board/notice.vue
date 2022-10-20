<template>
  <div id="subpage">
    <SubBox/>
    <div class="infoBox">
      <SubSide/>
      <div class="SubInBox">
        <SubHeader/>
        <div class="SubFullBox">
          <div class="SFBox">
            <MTBoard/>
            <Paging/>
            {{info}}
          </div>
        </div>
      </div>
		</div>
  </div>
</template>

<script>
  import axios from 'axios';

  import SubBox from '@/components/sub/subtopBox.vue';
  import SubHeader from '@/components/sub/subHeader.vue';
  import SubSide from '@/components/sub/subSideBox.vue';
  import MTBoard from '@/components/sub/board/mtboard.vue';
  import Paging from '@/components/sub/board/paging.vue';

export default {
  name: 'NoticePage',
  components: {
    SubBox,
    SubSide,
    SubHeader,
    MTBoard,
    Paging,
  },
	data (){
    return {
      info: null,
		}
	},
  computed: {
    SubActive() {
      return this.$route.meta.headerSub;
    },
  },
  mounted () {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data.bpi))
  }
}
</script>