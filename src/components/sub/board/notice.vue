<template>
  <div id="subpage">
    <SubBox/>
    <div class="infoBox">
      <SubSide/>
      <SubHeader/>
		</div>
  </div>
</template>

<script>
  import SubBox from '@/components/sub/subtopBox.vue';
  import SubHeader from '@/components/sub/subHeader.vue';
  import SubSide from '@/components/sub/subSideBox.vue';

export default {
  name: 'NoticePage',
  components: {
    SubBox,
    SubSide,
    SubHeader,
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