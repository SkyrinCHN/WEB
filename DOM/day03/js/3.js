//Step1:为name为username和pwd的文本框绑定获得焦点事件
var form = document.forms[0];
var txtName = form.username;
var txtPwd = form.pwd;
txtName.onfocus = getFocus;
txtPwd.onfocus = getFocus;
function getFocus() {
  //this->当前文本框
  //当前文本框边框加粗
  this.className = "txt_focus";
  //清除旁边div的class
  var div = this.parentNode
    .nextElementSibling
    .firstElementChild;
  div.className = "";
}
txtName.onblur = function () {
  vali(this, /^\w{1,10}$/);
}
txtPwd.onblur = function () {
  vali(this, /^\d{6}$/);
}
function vali(txt, reg) {
  //清除当前文本框的class
  txt.className = "";
  //获取旁边div
  var div = txt.parentNode
    .nextElementSibling
    .firstElementChild;
  //用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if (reg.test(txt.value)) {
    div.className = "vali_success";
    return true;
  }
  //否则修改div的class为vali_fail
  else {
    div.className = "vali_fail";
    return false;
  }
}

//查找提交按钮
var btnSub = form.elements[form.elements.length - 2];
btnSub.onclick = function () {
  //如果两个文本框都验证通过了,才能提交表单
  var Yname = vali(txtName, /^\w{1,10}$/);
  var Ypwd = vali(txtPwd, /^\d{6}$/);
  if(!Yname) {
    //如果验证文本框用户名不正确,文本框获得焦点
    txtName.focus();
  } else if (!Ypwd) {
    txtPwd.focus();
  } else {
    alert("按钮可用");
    form.submit();
  }
}