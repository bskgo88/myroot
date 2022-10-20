<template>
  <div class="subTopBox" :class="{low:SubLow}" :style="{'background-image': 'url(' + require('@/assets/images/sub-background.png') + ')'}">
			<strong>{{SetName}}</strong>
  </div>
</template>

<script>
export default {
  name: 'SubTopBox',
  components: {
  },
  computed: {
    SetName() {
      return this.$route.name;
    },
    SubLow() {
      return this.$route.meta.subType;
    },
  },
}
</script>