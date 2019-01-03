<template>
  <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <a href="javascript:;">
            <img :src="item.img_url">
          </a>
        </mt-swipe-item>
      </mt-swipe>

    </div>
</template>
<script>
export default {
  data(){return{
    
  }},
  props:["list"],
}
</script>
<style scoped>

</style>

