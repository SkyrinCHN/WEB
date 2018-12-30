<template>
  <div>
   
    <!-- 第二个: 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="p in pics" :key="p.id">
          <a href="javascript:;">
            <img :src="p.img_url">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="grid">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/NewsList">
            <img src="../../img/menu1.png">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="javascript:;">
            <span>
              <img src="../../img/menu2.png">
              <!-- <span class="mui-badge">5</span> -->
            </span>
            <div class="mui-media-body">点餐</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="javascript:;">
            <img src="../../img/menu3.png">
            <div class="mui-media-body">购物车</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="javascript:;">
            <img src="../../img/menu4.png">
            <div class="mui-media-body">支付</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="javascript:;">
            <img src="../../img/menu5.png">
            <div class="mui-media-body">下单</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="javascript:;">
            <img src="../../img/menu6.png">
            <div class="mui-media-body">更多</div>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  methods: {
    getImages() {
      //获取轮播图片 1. 发送ajax请求   2.获取返回数据 保存到pics
      console.log("测试测试");
      var url = "http://127.0.0.1:3000/getImages";
      this.axios.get(url).then(result => {
        console.log(result);
        this.pics = result.data;
      });
    }
  },
  created() {
    //当组件对象创建成功后,就开始发送ajax请求
    this.getImages();
  },
  data() {
    return {
      pics: []
    };
  }
};
</script>
<style>
div.swipe {
  width: 100%;
  height: 150px;
}
div.swipe img {
  width: 100%;
}
#grid ul li img {
  width: 60px;
}
#grid>ul{
  background: #fff;
}
#grid>ul>li{
  border: 0;
}
header{
  border-radius: 3px;
}
</style>

