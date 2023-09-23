// ES6の形式でやっていきます！
//  (()=>{
// js命令应该写在这里面！ 防止代码被污染
//  })();

(() => {
  //$:DOM要素のことを明示する
  const $tab = document.getElementById("js-tab");
  const $nav = document.querySelectorAll("[data-nav]");
  const $contents = document.querySelectorAll("[data-contents]");
  const ACTIVECLASS='is-active'

  //初期化
  const init = () => {
    $contents[0].style.display = "block"; //解除css中对dontents的非表示即none
  };
  init();

  //クリックしたら起きるイベント
  const clickHandler = (e) => {
    e.preventDefault(); //取消默认行为
    //クリックされたnavとそのdata
    const $this = e.target;
    const targetVal = $this.dataset.nav;
    console.log($this, targetVal);

    //対象外リセット
    index=0;
    while(index<$nav.length){
      $contents[index].style.display='none';
    $nav[index].classList.remove(ACTIVECLASS);
      index++;
    }
    
    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-contents="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVECLASS)
  };
  
  //全nav要素に対して関数を適用
  let index = 0;
  const $navLength = $nav.length;
  while (index < $navLength) {
    $nav[index].addEventListener("click", (e) => clickHandler(e));
    index++;
  }
})();
