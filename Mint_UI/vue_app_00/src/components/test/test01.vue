<template>
  <div>
    <h3>test01.vue</h3>
    <h3>方式一:</h3>
    <router-link :to="`/test02?id=`+id">跳转到test02.vue</router-link>
    <h3>方式二:</h3>
    <h4 @click="go">跳转到test02.vue</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {id:5};
  },
  methods:{
    go(){
      this.$router.push("/test02?id="+this.id);
      this.$router.push("/test02/19");
    }
  }
};
</script>
<style scoped>
</style>
