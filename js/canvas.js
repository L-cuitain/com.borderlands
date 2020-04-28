//获取导航栏的canvas
var ctxnv = document.querySelector('#myCanvas').getContext('2d');

//新建路径
ctxnv.beginPath();
//绘制不规则矩形
drawnv(ctxnv, 0, 0, 158, 72, 1340, 3180, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.75)')



//获取精选中的canvas
var ctxgh = document.querySelector('#canvas-gh').getContext('2d');

//新建路径
ctxgh.beginPath();


//获取特色内容中的canvas
var ctxfe = document.querySelector('#canvas-feat').getContext('2d');

//新建路径
ctxfe.beginPath();


//获取购买中的canvas
var ctxby = document.querySelector('#canvas-buy').getContext('2d');

//新建路径
ctxby.beginPath();


//获取购买中的canvas
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
    drawdv(ctxgh, 0, 0, 158, 1050, 1340, 3180, '#019ef9', imggh);

    drawfeat(ctxfe, 0, 60, 158, 922, 1340, 3180, '#019ef9', imgfeat);
    ctxfe.drawImage(imgfeat, 0, 0,1519,982);

    drawby(ctxby, 0, 60, 158, 930, 1340, 3180, '#019ef9');
    ctxby.drawImage(imgby, 0, 0,1519,930);

    drawsub(ctxsub, 0, 0, 158, 400, 1340, 3180, '#019ef9', 'rgba(0,0,0,0.75)');
}





//短距离不规则矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawnv(ctx, startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
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



//长距离中间凹形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawdv(ctx, startX, startY, width, height, courseX, stopX, fillStyle, img) {
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
    //裁剪画布
    ctx.clip();

    //关闭路径
    ctx.closePath();

    // //描边颜色
    // ctx.strokeStyle = strokeStyle;
    // //描边
    // ctx.stroke();

    ``
    // 填充颜色
    ctx.fillStyle = fillStyle;
    // 填充
    ctx.fill();

    // ctx.fillRect(0, 0, 1590, 930);
    //绘制背景图
    ctx.drawImage(img, -240, 0);

}



//长距离中间凸形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawfeat(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(startX, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width + 60, height + 60);
    ctx.lineTo(courseX - 45, height + 60);
    ctx.lineTo(courseX + 15, height);
    ctx.lineTo(stopX, height);
    ctx.lineTo(stopX, startY);
    ctx.lineTo(courseX + 15, startY);
    ctx.lineTo(courseX - 45, 0);
    ctx.lineTo(width + 60, 0);
    ctx.lineTo(width, startY);
    ctx.clip();
    //关闭路径
    ctx.closePath();

    ctx.lineWidth = 3;

    // //描边颜色
    // ctx.strokeStyle = strokeStyle;
    // //描边
    // ctx.stroke();

    //填充颜色
    ctx.fillStyle = fillStyle;
    //填充
    ctx.fill();
}



//长距离上面凸形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawby(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(startX, height);
    ctx.lineTo(stopX, height);
    ctx.lineTo(stopX, startY);
    ctx.lineTo(courseX + 15, startY);
    ctx.lineTo(courseX - 45, 0);
    ctx.lineTo(width + 60, 0);
    ctx.lineTo(width, startY);
    ctx.clip();
    //关闭路径
    ctx.closePath();

    ctx.lineWidth = 3;

    // //描边颜色
    // ctx.strokeStyle = strokeStyle;
    // //描边
    // ctx.stroke();

    //填充颜色
    ctx.fillStyle = fillStyle;
    //填充
    ctx.fill();
}



//长距离上面凹形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawsub(ctx, startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(width, startY);
    ctx.lineTo(width+60, startY+60);
    ctx.lineTo(courseX, startY+60);
    ctx.lineTo(courseX+45, startY);
    ctx.lineTo(stopX, startY);
    ctx.lineTo(stopX, height);
    ctx.lineTo(startX, height);


    //裁剪画布
    ctx.clip();

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