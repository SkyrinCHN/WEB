<template>
  <div id="NewsList">
    <ul class="mui-table-view mui-table-view-chevron">
      <li v-for="l in list" :key="l.id" class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="l.img_url">
          <div class="mui-media-body">{{l.title}}  
            <p class="mui-ellipsis">{{l.content}}</p>
          </div>
          <p class="button">
              <span>{{l.ctime|datetimeFilter}} </span>
              <span> 
                 <img src="http://127.0.0.1:3001/img/eye.png" alt="">
                 <span class="point">{{l.point}}</span>
              </span>
            </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { list: [], pageIndex: 0, pageSize: 10, pageCount: 1 };
  },
  methods: {
    getNews() {
      this.pageIndex++;
      console.log("测试测试");
      var url = "http://127.0.0.1:3000/getNews?pno="+this.pageIndex+"&pageSize="+this.pageSize;
      this.axios.get(url).then(result => {
        // console.log(result);
        this.list = result.data.data;
        console.log(this.list);
        this.pageCount=result.data.pageCount;
        // console.log(this.list[0].title);
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped>
#NewsList p.button {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}
#NewsList img{
  border-radius: 3px;
}
#NewsList>ul>li>a p span span.point{
  margin-left: 12px;
  font-size: 14px;
}
#NewsList a{
  margin-bottom: 0;
}
</style>

