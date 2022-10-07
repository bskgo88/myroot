<template>
  <div class="subTopBox" :style="{'background-image': 'url(' + require('@/assets/images/sub-background.png') + ')'}">
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
      return this.$route.meta.subname;
    },
  },
}
</script>