//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();


//获取社区页面顶部标题中的canvas
var ctxtop = document.querySelector('#canvas-top').getContext('2d');

//新建路径
ctxtop.beginPath();

//获取社区页面关注中的canvas
var ctxatt = document.querySelector('#canvas-attention').getContext('2d');

//新建路径
ctxatt.beginPath();


// //获取页面订阅中的canvas
// var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

// //新建路径
// ctxsub.beginPath();

//创建图片
let imgtop = new Image();
imgtop.src = './images/community/header-bg.webp';

//创建图片
let imgatt = new Image();
imgatt.src = './images/community/gbforum-bg.webp';


//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    drawDownTu(ctxtop, 0, 0, 158, 422, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');
    ctxtop.drawImage(imgtop, 0, 0, 1519,482);

    drawCenAo(ctxatt, 0, 0, 158, 495, 1340, 3180, '#019ef9');
    ctxatt.drawImage(imgatt, -60, 0, 1700,495);

    // drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');

}



//创建主体板块鼠标移入移出事件
$('.highlights-content').on({
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