<template>
  <div>
    <!-- 第一个: 顶部状态栏 学子商城 -->
    <mt-header fixed title="学子商城"></mt-header>
    <!-- 第二个: 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="p in pics" :key="p.id">
          <a href="javascript:;"><img :src="p.img_url"></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 第三个: 九宫格 -->
    <!-- 第四个: tabbar -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        { id: 1, img_url: "http://127.0.0.1:3000/img/banner1.png" },
        { id: 2, img_url: "http://127.0.0.1:3000/img/banner2.png" },
        { id: 3, img_url: "http://127.0.0.1:3000/img/banner3.png" },
        { id: 4, img_url: "http://127.0.0.1:3000/img/banner4.png" },
      ]
    };
  }
};
</script>
<style>
div.swipe {
  width: 100%;
  height: 150px;
  border: 1px dotted pink;
}
div.swipe img {
  width: 100%;
}
</style>

