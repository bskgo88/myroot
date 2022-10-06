<template>
  <div id="subpage">
    <SubBox/>
    <div class="infoBox">
		</div>
  </div>
</template>

<script>
import SubBox from '@/components/sub/subtopBox.vue';

export default {
  name: 'infomationPage',
  components: {
    SubBox,
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