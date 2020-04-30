//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();

//获取新闻页面顶部中的canvas
var ctxhd = document.querySelector('#canvas-header').getContext('2d');

//新建路径
ctxhd.beginPath();

//获取页面订阅中的canvas
var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

//新建路径
ctxsub.beginPath();

//创建图片
let imghd = new Image();
imghd.src = './images/news/header-bg.jpg';


//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawDownTu(ctxhd, 0, 0, 158, 872, 1340, 3180, '#019ef9');
    ctxhd.drawImage(imghd, 0, 0, 1519, 930);

    drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');
}


//创建头部板块鼠标移入移出事件
$('.header-lists').on({
    'mouseenter': function () {

        //放大图片
        $(this).find('img').addClass('img-change');

        $(this).find('.mask-layer').css({
            'backgroundColor': 'rgba(0,0,0,0.75)'
        })

        $(this).find('.newsimg-title').css({
            'bottom': 8
        });
    },
    'mouseleave': function () {
        //缩小图片
        $(this).find('img').removeClass('img-change');

        $(this).find('.mask-layer').css({
            'backgroundColor': 'rgba(0,0,0,0.15)'
        })

        $(this).find('.newsimg-title').css({
            'bottom': 0
        });
    }
}, '.header-list-othernews')


//创建主体内容板块鼠标移入移出事件
$('.main-lists').on({
    'mouseenter': function () {
        //放大图片
        $(this).find('img').addClass('img-change');

        $(this).find('.main-list-content').css({
            'backgroundColor': '#032a45'
        })

    },
    'mouseleave': function () {
        //缩小图片
        $(this).find('img').removeClass('img-change');

        $(this).find('.main-list-content').css({
            'backgroundColor': '#021523'
        })
    }
}, '.main-list')

