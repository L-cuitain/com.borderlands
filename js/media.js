//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();

//获取页面订阅中的canvas
var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

//新建路径
ctxsub.beginPath();

//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');
}


//创建主体板块鼠标移入移出事件
$('.main-lists-page').on({
    'mouseenter': function () {

        //放大图片
        $(this).find('img').addClass('img-change');

        $(this).find('.mask-layer').css({
            'backgroundColor': 'rgba(0,0,0,0.75)'
        })

        $(this).find('.newsimg-title').css({
            'bottom': 8
        });

        //判断是否存在播放的类
        if($(this).children('.video-player')){
            
            $(this).find('.video-player').css({'backgroundPositionX' : '-430px' , 'backgroundPositionY' : '-237px'});
        }
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

        //判断是否存在播放的类
        if($(this).children('.video-player')){
            
            $(this).find('.video-player').css({'backgroundPositionX' : '-242px' , 'backgroundPositionY' : '-150px'});
        }
    }
}, '.game-handpick-new')


// 创建列表按钮点击事件
$('.main-btn-lists').on('click','.feature-button',function(){
    //清除按钮样式
    $('.main-btn-lists>.feature-button').children('.feature-btn-left').removeClass('btn-left-white');
    $('.main-btn-lists>.feature-button').children('.feature-btn-center').removeClass('btn-center-white');
    $('.main-btn-lists>.feature-button').children('.feature-btn-right').removeClass('btn-right-white');


    //给点击的按钮添加样式
    $(this).children('.feature-btn-left').addClass('btn-left-white');
    $(this).children('.feature-btn-center').addClass('btn-center-white');
    $(this).children('.feature-btn-right').addClass('btn-right-white');

    //获取索引
    let index = $(this).index();

    //显示索引对应的列表
    $('.media-list').eq(index).fadeIn(600).siblings('.media-list').css({'display' : 'none'});

})


//小圆点列表
//获取当前列表页数
$('.media-list').eq(0).children('.main-lists-page').each(function(i){
    $('.video-count').append('<li></li>');
})

$('.media-list').eq(1).children('.main-lists-page').each(function(i){
    $('.img-count').append('<li></li>');
})

$('.media-list').eq(2).children('.main-lists-page').each(function(i){
    $('.download-count').append('<li></li>');
})


//显示第一排的列表
$('.video-count').children('li').eq(0).addClass('list-count-white').siblings('li').addClass('list-count-black');
$('.img-count').children('li').eq(0).addClass('list-count-white').siblings('li').addClass('list-count-black');
$('.download-count').children('li').eq(0).addClass('list-count-white').siblings('li').addClass('list-count-black');

$('.main-vedio-lists>.main-lists-page').eq(0).show().siblings('.main-lists-page').hide();
$('.main-img-lists>.main-lists-page').eq(0).show().siblings('.main-lists-page').hide();
$('.main-download-lists>.main-lists-page').eq(0).show().siblings('.main-lists-page').hide();


//创建小圆点点击事件
$('.video-count').on('click','li',function(){

    $('.video-count').children('li').removeClass('list-count-white').addClass('list-count-black');

    let index = $(this).index();

    $(this).addClass('list-count-white');

    $('.main-vedio-lists>.main-lists-page').eq(index).fadeIn(600).siblings('.main-lists-page').css({'display' : 'none'});
})

$('.img-count').on('click','li',function(){

    $('.img-count').children('li').removeClass('list-count-white').addClass('list-count-black');

    let index = $(this).index();

    $(this).addClass('list-count-white');

    $('.main-img-lists>.main-lists-page').eq(index).fadeIn(600).siblings('.main-lists-page').css({'display' : 'none'});
})

$('.download-count').on('click','li',function(){

    $('.download-count').children('li').removeClass('list-count-white').addClass('list-count-black');

    let index = $(this).index();

    $(this).addClass('list-count-white');

    $('.main-download-lists>.main-lists-page').eq(index).fadeIn(600).siblings('.main-lists-page').css({'display' : 'none'});
})
