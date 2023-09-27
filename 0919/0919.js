(() => {
  // window.onscroll = function () {
  //   const windowTop = document.documentElement.scrollTop; //获取滚动距离
  //   const windowHeight = document.documentElement.clientHeight; //页面高度
  //   console.log(windowTop , windowHeight);

  // };

  // const func=function() {
  //     const windowTop = document.documentElement.scrollTop; //获取滚动距离
  //     const windowHeight = document.documentElement.clientHeight; //页面高度
  //      console.log(windowTop, windowHeight, window);
  //   };
  //   window.onscroll =func

  window.onscroll = function () {
    const listHeight = list.offsetHeight;
    const listTop = list.offsetTop;
    console.log('check页面高度',listHeight + listTop); //获取当前页面总高度
    // console.log(listHeight, listTop)

    const windowTop = document.documentElement.scrollTop || document.body.scrollTop; //兼容性在考虑范围内
    const windowHeight = document.documentElement.clientHeight;
    console.log('check取整',Math.round(windowTop + windowHeight)); //获取滚动总高度 windowHeigh固定，windowTop变化  为什么取整 差在哪？？？？
    console.log('check2',windowTop,windowHeight)

    if (Math.round(windowTop + windowHeight) === listHeight + listTop) {
      console.log("到达底部");
      //渲染下一页页面 
      // renderHTML()//结构不固定 不能映射 没思路 如何实现 待考究
      // function renderHTML(){
      //   list.innerHTML+=
      // };

      //模拟
    //   setATimeout(function(){
    //     renderHTML()
    //     isLoading=false
    //   },2000)
    // }
    ;
  };
   }
  
  }

)();
