(() => {
  //获取input
  const myForm = document.querySelector("input");

  //定义三个强度的正则表达
  const reg1 = /\d/;
  const reg2 = /[a-z]/i;
  const reg3 = /[#$%^&*()]/;

  //绑定input事件
  myForm.oninput = function (evt) {
    // console.log(this.value);
    // console.log(evt.target.value);
    let level = 0;
    if (reg1.test(evt.target.value)) level++;
    if (reg2.test(evt.target.value)) level++;
    if (reg3.test(evt.target.value)) level++;
    console.log(level);
    const ospan = document.querySelectorAll("span");
    for (let i = 0; i < ospan.length; i++) {
      ospan[i].classList.remove("active");
      if (i < level) {
        ospan[i].classList.add("active");
        console.log(level);
      }
    }
  };
})();
