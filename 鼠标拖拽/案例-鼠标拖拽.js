// const box_mouseover=document.getElementById('box')
// console.log('check1',box_mouseover)

// //鼠标移入时显示说明文
// box_mouseover.onmouseover=function(){
// /*console.log('check2',this.firstElementChild)获取第一个元素*/
// this.firstElementChild.style.display='block'/*解除none状态 */
// const box_p=this.getElementsByTagName('p');
// // console.log('check3',box_p)
// }
// //鼠标移出时说明文非表示
// box_mouseover.onmouseout=function(){
//     this.firstElementChild.style.display='none'
//     const box_p=this.getElementsByTagName('p');
//     }
// //说明文跟随鼠标移动显示
// box_mouseover.onmousemove=function(evt){//注意evt，不能用this
// //  console.log('check4',evt.offsetX,evt.offsetY)
// this.firstElementChild.style.left=evt.offsetX+'px'//注意 setoffX setoffY均为number，需要加‘px’才能操作行内样式
// this.firstElementChild.style.top=evt.offsetY+'px'

//     }

const box_mouse = document.getElementById("box");

box_mouse.onmousedown = function () {
  console.log("check1", "mousedowne");

  document.onmousemove = function (evt) {
    //    console.log('check4',evt.offsetX,evt.offsetY)
    //为了让鼠标处于box中心
    let x = evt.clientX - box_mouse.offsetWidth / 2; /*evt.clientX-'100px'*/
    let y = evt.clientY - box_mouse.offsetHeight / 2; /*evt.clientY-'100px'*/

    //限制box的活动范围为页面范围
    if (y < 0) y = 0;
    if (y >= document.documentElement.clientHeight - box_mouse.offsetHeight)
      y = document.documentElement.clientHeight - box_mouse.offsetHeight;

    if (x < 0) x = 0;
    if (x >= document.documentElement.clientWidth - box_mouse.offsetWidth)
      x = document.documentElement.clientWidth - box_mouse.offsetWidth;

    box_mouse.style.left = x + "px";
    box_mouse.style.top = y + "px";
  };
};
box_mouse.onmouseup = function () {
  console.log("check2", "mouseup");
  document.onmousemove = null; //move解绑
};
