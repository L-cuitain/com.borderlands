//短距离下面凹形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawDownAoS(ctx, startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
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
function drawCenAo(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
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

}



//长距离中间凸形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawCenTu(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
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
function drawUpTu(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
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
function drawUpAo(ctx, startX, startY, width, height, courseX, stopX, strokeStyle, fillStyle) {
    //使用moveTo设置起始值
    ctx.moveTo(startX, startY);
    //移动指定坐标
    ctx.lineTo(width, startY);
    ctx.lineTo(width + 60, startY + 60);
    ctx.lineTo(courseX, startY + 60);
    ctx.lineTo(courseX + 45, startY);
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



//长距离下面凸形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawDownTu(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
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


//长距离下间凸形矩形
//startX X轴起始值
//startY Y轴起始值
//width X轴第一次移动距离
//height Y轴第一次移动距离
//courseX 过程中需要移动的距离
//stopX X轴终止时的距离
function drawDownTu(ctx, startX, startY, width, height, courseX, stopX, fillStyle) {
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