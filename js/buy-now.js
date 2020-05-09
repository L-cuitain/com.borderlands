//canvas画布
//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();


// //获取页面订阅中的canvas
// var ctxsub = document.querySelector('#canvas-sub').getContext('2d');

// //新建路径
// ctxsub.beginPath();



//加载图片
window.onload = function () {
    //调用函数 
    //绘制不规则矩形
    drawDownAoS(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)');

    // drawUpAo(ctxsub, 0, 0, 158, 400, 1340, 3180, 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.75)');
}


//显示第一条列表
$('.buy-content-bottom').eq(0).show();

//添加鼠标点击事件
$('.buy-title-lists').on('click','.feature-button',function(){
    $('.feature-button').children('.feature-btn-left').removeClass('btn-left-white');
    $('.feature-button').children('.feature-btn-center').removeClass('btn-center-white');
    $('.feature-button').children('.feature-btn-right').removeClass('btn-right-white');    

    $(this).children('.feature-btn-left').addClass('btn-left-white');
    $(this).children('.feature-btn-center').addClass('btn-center-white');
    $(this).children('.feature-btn-right').addClass('btn-right-white');



    //获取索引
    let index = $(this).index();

    //显示菜单
    $('.buy-content-bottom').eq(index).fadeIn(500).siblings('.buy-content-bottom').hide();    
})