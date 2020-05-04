//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();


//获取页面订阅中的canvas
var ctxhead = document.querySelector('#canvas-header').getContext('2d');

//新建路径
ctxhead.beginPath();


//获取页面教程中的canvas
var ctxcourse = document.querySelector('#canvas-course').getContext('2d');

//新建路径
ctxcourse.beginPath();


//获取页面注册中的canvas
var ctxrgs = document.querySelector('#canvas-register').getContext('2d');

//新建路径
ctxrgs.beginPath();

//获取页面注册中的canvas
var ctxques = document.querySelector('#canvas-question').getContext('2d');

//新建路径
ctxques.beginPath();


//获取页面订阅中的canvas
var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

//新建路径
ctxsub.beginPath();


//创建图片
let imghead = new Image();
imghead.src = './images/vip/header-bg.jpg';

//创建图片
let imgcourse = new Image();
imgcourse.src = './images/vip/howitworks-bg.jpg';

//创建图片
let imgrgs = new Image();
imgrgs.src = './images/vip/register-bg.jpg';


//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawDownTu(ctxhead, 0, 0, 158, 532, 1340, 3180, '#019ef9');
    ctxhead.drawImage(imghead, 0, 0, 2000, 600);


    drawCenAo(ctxcourse, 0, 0, 158, 741, 1340, 3180, '#019ef9');
    ctxcourse.drawImage(imgcourse, 0, 0, 1519, 741);

    drawCenTu(ctxrgs, 0, 60, 158, 479, 1340, 3180, '#019ef9');
    ctxrgs.drawImage(imgrgs, 0, -120, 1519, 800);

    drawUpAo(ctxques, 0, 0, 158, 60, 1290, 3180, '#fff', '#fff');

    drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');
}

$('.question-list').eq(1).children('.question-list-sections').slideDown();
$('.question-list').find('.question-list-icon').eq(1).addClass('question-list-icon-change1');

//创建鼠标点击事件
$('.question-lists').on('click', '.question-list', function (e) {
    // let index = $(this).index();
    // console.log(index);

    // $('.question-list-sections').hide(500);
    $('.question-list').find('.question-list-icon').removeClass('question-list-icon-change1').addClass('question-list-icon-change2');


    let target = $(e.target);


    if (target.is('.question-list-content') || target.is('.question-list-content>h3') || target.is('.question-list-icon')) {

        $(this).siblings('.question-list').children('.question-list-sections').hide(500);
        $(this).children('.question-list-sections').slideToggle(500);
        $(this).find('.question-list-icon').addClass('question-list-icon-change1').removeClass('question-list-icon-change2');
    }
})