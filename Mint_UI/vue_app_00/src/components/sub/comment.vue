<template>
  <div class="comment">
    <h5>发表评论</h5>
    <textarea
      name="commentTxt"
      id="comment"
      cols="20"
      rows="8"
      placeholder="吐糟100个字,不能再多了"
      maxlength="100"
      v-model="msg"
    ></textarea>
    <!-- <button>提交</button> -->
    <mt-button size="large" type="primary" @click="addComment">提交</mt-button>
    <hr>
    <div class="cmt-list" v-for="l in list">
      <div class="ctm-item">{{l.ctime|datetimeFilter}}
        <div class="ctm-body">{{l.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return { msg: "", list: [], pageIndex: 0, pageSize: "7", pageCount: 1 };
  },
  props: ["id"],
  created() {
    console.log(this.id);
    this.getMore();
  },
  methods: {
    getMore(){
      this.pageIndex++;
      var nid = this.id;
      var pno = this.pageIndex;
      var ps = this.pageSize;
     var url="http://localhost:3000/getComments?pno="+pno+"&pageSize="+ps+"&nid="+nid;
     this.axios.get(url).then(result=>{
      //  var output = result.data.data;
      //  console.log(result);
       var rows = this.list.concat(result.data.data);
       this.list= rows;
       console.log(this.list.content)
       if(this.list.content=null){
         this.list.content="还没有人发表评论";
       }
     })
    },
    addComment() {
      //获取新闻编号 评论内容
      var content = this.msg;
      var nid = this.id;
      if (!content.trim().length == 0) {
        var url =
          "http://127.0.0.1:3000/addComment?nid=" + nid + "&content=" + content;
        //接收返回数据
        this.axios.get(url).then(result => {
          var output = result.data;
          if (output.code == "1") {
            Toast(result.data.msg);
            //提示用户toast 清空评论框
            this.msg = "";
          } else {
            Toast(result.data.msg);
          }
        });
      } else {
        Toast("好歹整两句嘛");
      }
    }
  },
};
</script>

<style scoped>
.comment div.cmt-list {
  margin: 5px;
}
.comment div.cmt-list div.cmt-item {
  border: 1px solid #aaa;
  margin-top: 15px;
}
textarea {
  font-size: 13px;
  height: 150px;
  border-radius: 5px;
}
</style>
