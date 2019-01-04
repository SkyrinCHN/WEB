<template>
<div class="register">
  <div class="mui-card">
    <div class="mui-card-header">
      <h3>Sign In</h3>
      <router-link to="/Login">Sign Up</router-link>
    </div>
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <form>
          <input type="text" placeholder="Username" v-model="name" @blur="checkName">
          <input type="password" placeholder="Password" v-model="pwd">
          <input type="password" placeholder="Password Again" v-model="pwdAgain">
          <mt-button type="primary" size="large" @click="register">Sign In</mt-button>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      pwdAgain: "",
      isSubmit:false,//是否允许触发提交事件,默认为false
    };
  },
  methods: {
    checkName(){
      var name = this.name ;
      var reg = /^[a-z0-9_]{8,12}$/i;
      if(!reg.test(name)){
        Toast({
          message:"用户名格式不正确",
          positon:"bottom",
        });
        return;
      }
      var url = "http://localhost:3000/existsName?name="+name;
      this.axios.get(url).then(result=>{
        if(result.data.code>0){
          Toast(result.data.msg);
          this.isSubmit = true;
        }
        if(result.data.code<0){
          Toast(result.data.msg);
          this.isSubmit = false;
        }
      })
    },
    register() {
      if(!this.isSubmit){
        return;//用户名已被使用后,不允许触发注册事件
      }
      var name = this.name;
      var pwd = this.pwd;
      var pwdAgain = this.pwdAgain;
      var regPwd = /^[a-z0-9_]{8,12}$/i;
      if(!regPwd.test(pwd)){
        Toast("密码格式不正确");
        return;
      }
      if(pwd!=pwdAgain){
        Toast("两次密码不一致");
        return;
      }
      var url = "http://localhost:3000/Register?name=" + name + "&pwd=" + pwd;
      this.axios.get(url).then(result => {
        // console.log(result.data.code);
        if (result.data.code > 0) {
          Toast(result.data.msg);
        }
        if (result.data.code < 0) {
          Toast(result.data.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
.register .mui-card{
  /* background-image: url("http://127.0.0.1:3001/img/BG.png"); */
  /* background: #006699; */
  font-family: Hurricane;
}
.register .mui-card h3{
  margin: 0 auto;
  font-family:Hurricane;
  font-size: 23px;
  color: #e83632;
}
</style>


