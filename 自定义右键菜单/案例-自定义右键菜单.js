(() => {
  const list = document.getElementById("list");
  document.addEventListener("contextmenu", function (evt) {
    evt.preventDefault();
    list.style.display = "block";

    //鼠标固定在ul的左上角
    let X = evt.clientX;
    let Y = evt.clientY;

    if (X >= document.documentElement.clientWidth - list.offsetWidth) {
      X = document.documentElement.clientWidth - list.offsetWidth;
    }
    if (Y >= document.documentElement.clientHeight - list.offsetHeight) {
      Y = document.documentElement.clientHeight - list.offsetHeight;
    }
    list.style.left = X + "px";
    list.style.top = Y + "px";
  });
  document.addEventListener('click',function(){
    list.style.display='none';
  })
  //利用冒泡机制实现事件委托 evt.target
  list.addEventListener('click',function(evt){
    console.log(evt.target||evt.srcElement)//兼容性
    const className=document.getElementsByClassName('#class')
    if(evt.target.className==='a'){
        console.log('获取到a')
    }
  })
})();
