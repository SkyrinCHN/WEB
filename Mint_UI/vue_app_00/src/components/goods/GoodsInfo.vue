<template>
  <div class="goods-info">
    <swipe-box :list="list"></swipe-box>
    <div class="mui-card">
      <div class="mui-card-header">{{info.name}}</div>
      <div class="mui-card-content">
        <div class="mui-card-inner">
          <div class="price">
            <p>
              市场价:
              <del>¥{{info.price}}</del>
            </p>
            <p>
              优惠价:
              <span>¥{{info.price*.88}}</span>
              <span class="cheap">Just Today</span>
            </p>
          </div>
          <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="less">-</button>
            <input id="test" class="mui-input-numbox" type="number" v-model="val">
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="more">+</button>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        <!-- <mt-button size="small" type="danger" class="buy">立即购买</mt-button> -->
        <button class="buy">立即购买</button>
        <!-- <mt-button size="small" type="primary">加入购物车</mt-button> -->
        <button class="in-cart" @click="addCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
//引入轮播图组件
import swipe from "../sub/swipe";
export default {
  data() {
    return { id: this.$route.params.id, list: [], val: 1, info: {} };
  },
  methods: {
    getGoodsInfo() {
      var id = this.id;
      var url = "http://localhost:3000/getProduct?id="+id;
      this.axios.get(url).then(result => {
         this.info= result.data.data
        console.log(this.info);
      });
    },
    // getGoodsInfo(){
    //     //1:获取参数 id
    //     var id = this.id;
    //     //2:发送ajax请求获取商品信息
    //     var url = "http://127.0.0.1:3000/getProduct?id="+id;
    //     this.axios.get(url).then(result=>{
    //         this.info = result.data.data;
    //     });
    //   },
    getImageList() {
      var url = "http://localhost:3000/getGoodsInfo";
      this.axios.get(url).then(result => {
        this.list = result.data;
        console.log(this.list);
      });
    },
    less() {
      if (this.val > 1) {
        this.val--;
      }
    },
    more() {
      if (this.val < 998) {
        this.val++;
      }
    },
    addCart() {
      //参数 uid = 1 pid count price
      var pid = this.id,
        count = this.val,
        price = 9.9,
        uid = 1;
      //发送ajax请求将数据发送到服务器
      var url =
        "http://127.0.0.1:3000/addCart?pid="+ 
        pid +
        "&count=" +
        count +
        "&price=" +
        price+"&uid="+uid;
      this.axios.get(url).then(result => {
        // console.log(result.data);
        if (result.code > 0) {
          Toast(result.data.msg);
        } else {
          Toast(result.data.msg);
        }
      });
      //获取返回结果
      //显示提示信息
    }
  },
  created() {
    this.getImageList();
    this.getGoodsInfo();
  },
  components: { "swipe-box": swipe }
};
</script>
<style scoped>
.mui-card-footer button {
  border: 1px solid #e83632;
  color:#e83632;
  background: #fff;
  border-radius: 4px;
  width: 159px;
  height: 40px;
}
.mui-card-footer button:hover{
  background: #e83632;
  color: #fff;
}
.mui-card-footer .in-cart {
  background: #fff;
  color:#26a2ff;
  border: 1px solid #26a2ff;
}
.goods-info .mui-card-inner .price span{
  color: #e83632;
  font-size: 20px;
}
.goods-info .mui-card-inner .price span.cheap{
  margin-left: 80px;
  font-size: 30px;
  font-family:Hurricane;
}
</style>
