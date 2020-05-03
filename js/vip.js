//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();


//获取页面订阅中的canvas
var ctxhead = document.querySelector('#canvas-header').getContext('2d');

//新建路径
ctxhead.beginPath();


//获取页面订阅中的canvas
var ctxcourse = document.querySelector('#canvas-course').getContext('2d');

//新建路径
ctxcourse.beginPath();


// //获取页面订阅中的canvas
// var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

// //新建路径
// ctxsub.beginPath();


//创建图片
let imghead = new Image();
imghead.src = './images/vip/header-bg.jpg';

//创建图片
let imgcourse = new Image();
imgcourse.src = './images/vip/howitworks-bg.jpg';


//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawDownTu(ctxhead, 0, 0, 158, 532, 1340, 3180, '#019ef9');
    ctxhead.drawImage(imghead, 0, 0, 2000, 600);


    drawCenAo(ctxcourse, 0, 0, 158, 741, 1340, 3180, '#019ef9');
    ctxcourse.drawImage(imgcourse, 0, 0, 1519, 741);



    // drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');
}