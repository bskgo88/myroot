<template>
    <GoogleMap api-key="AIzaSyDSjlmg3paIzejy2os4qM15CGjVmxHI12o" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" /></GoogleMap>
</template>
 
<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 37.4775, lng: 126.9615 }
        return { center }
    },
})
</script>