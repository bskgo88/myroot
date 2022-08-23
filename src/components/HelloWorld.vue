<template>
  <div>
    <carousel :items-to-show="1">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  name: 'HelloWorld',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>
