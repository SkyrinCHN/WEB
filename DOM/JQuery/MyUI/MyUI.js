
// accordion
jQuery.fn.accordion = function () {
  //自动侵入class
  //给parent自己添加accordion class
  var $parent = this;
  $parent
    .addClass("accordion")
    //给parent下的奇数children添加title class
    .children(":nth-child(odd)")
    .addClass("title")
    //给title class 的下一个兄弟添加 content fade class
    .next()
    .addClass("content fade")
    //给第一个偶数元素(2)添加 in class
    .first()
    .addClass("in");
  //绑定行为
  $parent.on("click", ".title", function (e) { //on事件 点击的目标是.title class时 触发点击事件
      $(e.target)
        .next(".content") //下一个有.content class的元素
        .toggleClass("in") //添加/切换 in class
        .siblings(".content") //剩下有.content class的兄弟元素
        .removeClass("in") //都移除 in class
    }

  );
};

// TABS
jQuery.fn.tabs = function () {
  var $parent = this;
  $parent.children(":first").addClass("tabs").find("a").attr("data-toggle", "tab").parent().first().addClass("active");
  
  
  $parent.children(":last").addClass("container").children(":first").addClass("active");

  $parent.children(":first").on("click", "[data-toggle=tab]", function(e){
    var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
  })
}