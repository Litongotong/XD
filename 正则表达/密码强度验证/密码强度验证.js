(() =>
  function () {
    const oninput = document.querySelector("input");
    const reg1 = /\d/;
    const reg2 = /[a-z]/i;
    const reg3 = /[#$%^&*()]/;

    oninput.oninput = function (evt) {
      console.log(this.value);
      // console.log(evt.target.value )
      const level = 0;
      if (reg1.test(this.value)) level++;
      if (reg2.test(this.value)) level++;
      if (reg3.test(this.value)) level++;
      
    };console.log(level);
  })();
