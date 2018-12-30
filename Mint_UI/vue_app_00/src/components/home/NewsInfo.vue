<template>
  <div id="newsInfo">
    <h3>{{info.title}}</h3>
    <h5>{{info.ctime|datetimeFilter}}</h5>
    <p>{{info.content}}</p>
    <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
import comment from "../sub/comment.vue"
export default {
  data(){return{info:[],id:this.$route.query.id}},
  created(){this.getNewsInfo()},
  methods:{
    getNewsInfo(){
     var  id = this.$route.query.id;
      // console.log(this.$route.query.id);
      // console.log(id);
      var url = "http://127.0.0.1:3000/getNewsInfo?id="+id;
      this.axios.get(url).then(result=>{
        this.info = result.data.data;
        console.log(this.info);
      })
    }
  },
  components:{"comment-box":comment}
}
</script>
<style scoped>
  h3{
    font-size: 18px;
    text-align: center;
  }
  h5{
    text-align: right;
    padding-right: 20px;
  }
  p{
    font-size: 14px;
  }
</style>
