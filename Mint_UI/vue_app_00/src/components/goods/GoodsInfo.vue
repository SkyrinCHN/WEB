<template>
  <div class="goods-info">
    <swipe-box :list="list"></swipe-box>
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-inner">
          <div class="price">
            <p>市场价:
              <del>¥2999.00</del>
            </p>
            <p>销售价:
              <span>¥1999.00</span>
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
        <button class="in-cart">加入购物车</button>
      </div>
    </div>
  </div>
</template>
<script>
//引入轮播图组件
import swipe from "../sub/swipe";
export default {
  data() {
    return { id: this.$route.params.id, list: [], val: 1 };
  },
  methods: {
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
    }
  },
  created() {
    this.getImageList();
  },
  components: { "swipe-box": swipe }
};
</script>
<style scoped>
.mui-card-footer button{
 background: #e83632;
 color: #fff;
 border-radius: 4px;
 width: 159px;
 height: 40px;
}
.mui-card-footer .in-cart{
 background: #26a2ff;
}
</style>
