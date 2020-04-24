//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();
//绘制不规则矩形
drawnv(ctxnv,0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)')


//获取精选中的canvas
var ctxgh = document.querySelector('#canvas-gh').getContext('2d');

//新建路径
ctxgh.beginPath();

//创建图片
let img = new Image();
img.src = './images/index/highlights-bg.webp';

//加载图片
var pattern = ctxgh.createPattern(img,'repeat');
//调用函数 
drawdv(ctxgh,0, 0, 158, 930, 1340, 3180, 'rgba(0,0,0,1)',pattern)






//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawnv(ctx,startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(startX, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width + 20, height - 20);
    ctx.lineTo(courseX, height - 20);
    ctx.lineTo(courseX + 20, height);
    ctx.lineTo(stopX, height);
    ctx.lineTo(stopX, startY);

    //关闭路径
    ctx.closePath();

    //描边颜色
    ctx.strokeStyle = strokeStyle;
    //描边
    ctx.stroke();

    //填充颜色
    ctx.fillStyle = fillStyle;
    //填充
    ctx.fill();
}



//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawdv(ctx,startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(startX, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width + 60, height - 60);
    ctx.lineTo(courseX - 45, height - 60);
    ctx.lineTo(courseX + 20, height);
    ctx.lineTo(stopX, height);
    ctx.lineTo(stopX, startY);
    ctx.lineTo(courseX + 20, startY);
    ctx.lineTo(courseX - 45, 60);
    ctx.lineTo(width + 60, 60);
    ctx.lineTo(width, startY);

    //关闭路径
    ctx.closePath();

    //描边颜色
    ctx.strokeStyle = strokeStyle;
    //描边
    ctx.stroke();

    //填充颜色
    ctx.fillStyle = fillStyle;
    //填充
    ctx.fill();
    
    // ctx.fillRect(0, 0, 1590, 930);

}