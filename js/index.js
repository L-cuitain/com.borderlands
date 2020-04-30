// canvas画布
//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();

//获取精选中的canvas
var ctxgh = document.querySelector('#canvas-gh').getContext('2d');

//新建路径
ctxgh.beginPath();


//获取主页面特色内容中的canvas
var ctxfe = document.querySelector('#canvas-feat').getContext('2d');

//新建路径
ctxfe.beginPath();


//获取主页面购买中的canvas
var ctxby = document.querySelector('#canvas-buy').getContext('2d');

//新建路径
ctxby.beginPath();


//获取页面订阅中的canvas
var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

//新建路径
ctxsub.beginPath();

//创建图片
let imggh = new Image();
imggh.src = './images/index/highlights-bg.webp';

//创建图片
let imgfeat = new Image();
imgfeat.src = './images/index/gamefeatures-bg.webp';

//创建图片
let imgby = new Image();
imgby.src = './images/index/footer-bg.webp';


//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawCenAo(ctxgh, 0, 0, 158, 1050, 1340, 3180, '#019ef9', imggh);

    drawCenTu(ctxfe, 0, 60, 158, 922, 1340, 3180, '#019ef9');
    ctxfe.drawImage(imgfeat, 0, 0, 1519, 982);

    drawUpTu(ctxby, 0, 60, 158, 930, 1340, 3180, '#019ef9');
    ctxby.drawImage(imgby, 0, 0, 1519, 930);

    drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, '#019ef9', 'rgba(0,0,0,0.75)');
}



//精灵图动画
$('.shift-item').on({
    'mouseenter': function () {
        $('.shift').fadeOut(0, function () {
            $('.shift-nosee').fadeIn(200);
        });

    },
    'mouseleave': function () {
        $('.shift-nosee').fadeOut(0, function () {
            $('.shift').fadeIn(200);
        });
    },
})


$('.language-item').on({
    'mouseenter': function () {
        $('.language').fadeOut(0, function () {
            $('.language-nosee').fadeIn(200);
        });

    },
    'mouseleave': function () {
        $('.language-nosee').fadeOut(0, function () {
            $('.language').fadeIn(200);
        });
    },
})


//定时器动画

//获取元素个数
let len = $('.game-reviews-content').length;

$('.game-reviews-content').eq(0).fadeIn().animate({
    left: 140
}, 200);

//设置计数器
let count = 1;

let timer = setInterval(function () {

    if (count == len) {
        count = 0;
    }

    $('.game-reviews-content').eq(count).fadeIn().animate({
        left: 140
    }, 200).siblings().hide().css({
        left: 120
    });

    count++;
}, 6000)


//创建精品板块鼠标移入移出事件
$('.game-news-animate').on({
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
}, '.game-handpick-new')


//创建社区板块鼠标移入移出事件
$('.community-lists').on({
    'mouseenter': function () {

        //放大图片
        $(this).addClass('community-img-animate');

        $(this).children('.community-list-down').fadeIn(200);

    },
    'mouseleave': function () {
        //缩小图片
        $(this).removeClass('community-img-animate');

        $(this).children('.community-list-down').fadeOut(200);

    }
}, '.community-list')




//创建页面滚动事件
$(document).on('scroll', function () {
    //获取页面滚动高度
    let pageY = $(this).scrollTop();

    if (pageY >= $(document).scrollTop()) {
        pageY = $(document).scrollTop();
    }

    //将背景图跟随页面滚动
    $('.index-bg').css({
        'bottom': -pageY
    });
})




//特色内容 tab功能
$('.feature-content-bigImg>img').eq(0).show();
$('.feature-text-full').eq(0).show();
//创建点击事件
$('.feature-content-introduce').on('click', '.feature-button', function () {
    //清除按钮样式
    $('.feature-content-introduce>.feature-button').children('.feature-btn-left').removeClass('btn-left-white');
    $('.feature-content-introduce>.feature-button').children('.feature-btn-center').removeClass('btn-center-white');
    $('.feature-content-introduce>.feature-button').children('.feature-btn-right').removeClass('btn-right-white');


    //给点击的按钮添加样式
    $(this).children('.feature-btn-left').addClass('btn-left-white');
    $(this).children('.feature-btn-center').addClass('btn-center-white');
    $(this).children('.feature-btn-right').addClass('btn-right-white');

    //获取索引
    let index = $(this).index();

    //显示索引对应的图片
    $('.feature-content-bigImg>img').eq(index).fadeIn(600).siblings().fadeOut(600);

    //显示对应的文字
    $('.feature-text-full').eq(index).fadeIn(600).siblings().fadeOut(600);
})