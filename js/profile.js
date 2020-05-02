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


//设置初始样式
$('.user-list').eq(0).css('backgroundColor','#019ef9');
$('.main-content-bottom').eq(0).show();

//页面主体内容列表切换
$('.user-lists').on('click','.user-list',function(){
    //获取索引    
    let index = $(this).index();

    //更改样式
    $(this).css('backgroundColor','#019ef9').siblings('.user-list').css('backgroundColor','#222222');

    $('.main-content-bottom').eq(index).fadeIn(400).siblings('.main-content-bottom').hide();
  
    //判断index
    if(index == 0){
        $('.main-pin').css('height','1390px');
    }else if(index == 1){
        $('.main-pin').css('height','1200px');
    }
})


//登录注册按钮创建鼠标点击事件
$('.login-button').on('click',function(){
    $('.mask-layer').fadeIn(400);
    $('.vip').fadeIn(400);
})

//创建vip菜单X号和取消的点击事件
$('#close').on('click',function(){
    $('.mask-layer').fadeOut(400);
    $('.vip').fadeOut(400);
})

$('.close-button').on('click',function(){
    $('.mask-layer').fadeOut(400);
    $('.vip').fadeOut(400);
})