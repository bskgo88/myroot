<template>
  <div id="subpage">
    <SubBox/>
    <div class="infoBox">
      <SubSide/>
      <div class="SubInBox">
        <SubHeader/>
        <div class="SubFullBox">
          <div class="SFBox">
            <GALBoard />
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
  import Paging from '@/components/sub/board/paging.vue';
  import GALBoard from '@/components/sub/board/gallery.vue';

export default {
  name: 'NoticePage',
  components: {
    SubBox,
    SubSide,
    SubHeader,
    Paging,
    GALBoard,
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
  }
}
</script>