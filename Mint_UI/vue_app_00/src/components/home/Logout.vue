<template>
  <div class="logout">
    <button class="out" @click="logout">退出登录</button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return{}
  },
  methods:{
    logout(){
      var url ="http://localhost:3000/logout";
      this.axios.get(url).then(result=>{
        Toast(result.data.msg)
      })
    }
  }
}
</script>
<style scoped>
.logout .out{
  border: 1px solid #e83632;
  color:#e83632;
  background: #fff;
  border-radius: 4px;
  width: 100%;
  height: 40px;
}
.logout .out:hover{
  background: #e83632;
  color: #fff;
}
</style>
