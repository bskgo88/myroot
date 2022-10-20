<template>
  <div id="subpage">
    <SubBox />
    <div class="infoBox">
      <SubSide />
      <div class="SubInBox">
        <SubHeader />
        <div class="SubFullBox">
          <div class="SFBox">
          </div>
        </div>
      </div>
    </div>
  </div><Footer />
</template>

<script>
import SubBox from '@/components/sub/subtopBox.vue';
import SubHeader from '@/components/sub/subHeader.vue';
import SubSide from '@/components/sub/subSideBox.vue';
import Footer from '@/include/footer.vue'; // 푸터
export default {
  name: 'NoticePage',
  components: {
    SubBox,
    SubSide,
    SubHeader,
    Footer,
  },
  data() {
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