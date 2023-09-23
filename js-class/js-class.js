(() => {
  class Accordion {
    constructor(obj) {
      const $elm = document.querySelector(obj.hookName);
      const $head = document.getElementsByTagName(obj.tagName); // $elm.getElementsByTagName('a')无效为啥？？？
      const $headLength = $head.length;
      let $headIndex = 0;
      while ($headIndex < $headLength) {
        $head[$headIndex].addEventListener("click", (e) =>
          this.clickHandler(e)
        );
        $headIndex++;
      }
    }

    // const clickHandler = (e) => { 由于写在class中，因此变成14行的格式
    clickHandler(e) {
      e.preventDefault();
      const $target = e.currentTarget;
      const $contents = $target.nextElementSibling; //次の要素を取得
      // console.log('click');

      if ($contents.style.display === "block") {
        $contents.style.display = "none";
      } else {
        $contents.style.display = "block";
      }
    }
  }

  const clssAccordion0 = new Accordion({
    hookName: "#js-faq0",
    tagName: "p",
  });
  const clssAccordion1 = new Accordion({
    hookName: "#js-faq1",
    tagName: "a",
  });
  const clssAccordion2 = new Accordion({
    hookName: "#js-faq2",
    tagName: "dl",
  });



})();
