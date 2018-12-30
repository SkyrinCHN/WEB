<template>
  <div>
    <h3>test02.vue</h3>
  </div>
</template>
<script>
export default {
  data(){return{lid:0}},
  created(){
    // console.log(this.$route.query.id);
    console.log(this.$route.params.age);
  }
}
</script>
<style scoped>

</style>