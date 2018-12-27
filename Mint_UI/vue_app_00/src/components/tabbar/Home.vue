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
	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">主页</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">2</span></span>
		                    <div class="mui-media-body">邮箱</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
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

