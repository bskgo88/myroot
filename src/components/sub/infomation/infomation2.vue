<template>
  <div id="subpage">
    <SubBox/>
    <div class="infoBox">
      <SubSide/>
      <div class="SubInBox">
        <SubHeader/>
        <div class="SubFullBox">
          <div class="SFBox">
            <img src="@/assets/images/sub-content2.jpg">
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

export default {
  name: 'infomationPage',
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