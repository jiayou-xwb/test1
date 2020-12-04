// 侧边栏 的 点击事件
let items = document.querySelectorAll("#list>ul>li");
let article = document.querySelectorAll(".content>article");
let index = 0;
for(let i=0; i<items.length; i++){
    items[i].onclick = function(){
        for(let i=0; i<items.length; i++){
            items[i].classList.remove("active");
            article[i].classList.remove("show");
        }
        items[i].classList.add("active");
        article[i].classList.add("show");
    }

}

// canvas 动画
let c = document.querySelector(".wrap>.mycanvas");
let ctx = c.getContext("2d");
ctx.fillStyle="rgba(21,215,21,.23)";

ctx.beginPath();
ctx.fillRect(50,150,400,75);
ctx.fill();