const box_mouseover=document.getElementById('box')
console.log('check1',box_mouseover)

//鼠标移入时显示说明文
box_mouseover.onmouseover=function(){
/*console.log('check2',this.firstElementChild)获取第一个元素*/ 
this.firstElementChild.style.display='block'/*解除none状态 */
const box_p=this.getElementsByTagName('p');
// console.log('check3',box_p)
}
//鼠标移出时说明文非表示
box_mouseover.onmouseout=function(){
    this.firstElementChild.style.display='none'
    const box_p=this.getElementsByTagName('p');
    }
//说明文跟随鼠标移动显示
box_mouseover.onmousemove=function(evt){//注意evt，不能用this
//  console.log('check4',evt.offsetX,evt.offsetY)
this.firstElementChild.style.left=evt.offsetX+'px'//注意 setoffX setoffY均为number，需要加‘px’才能操作行内样式
this.firstElementChild.style.top=evt.offsetY+'px'

    }