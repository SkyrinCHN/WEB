// $("ul>li").sum();
jQuery.fn.sum = function () {
  var result = 0;
  this.each((i, elem) => {
    result += parseInt($(elem).html());
  })
  return result;
}