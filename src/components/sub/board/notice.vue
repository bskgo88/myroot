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
          </div>
        </div>
      </div>
		</div>
  </div>
</template>

<script>
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
		}
	},
  computed: {
    SubActive() {
      return this.$route.meta.headerSub;
    },
  },
}
</script>