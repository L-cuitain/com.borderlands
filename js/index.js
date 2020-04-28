//鼠标移入导航栏列表某一项时 显示下拉列表
$('.nav-content>ul>li').on({
    'mouseenter': function () {

        $('.nav-content>ul>li').children('ul').each(function (i) {
            $(this).eq(i).hide();

        })

        //获取ul中li的个数
        let index = $(this).children('ul').children('li').length;
        //设置自动高度
        let autoHeight = 44 * index;

        //设置高度
        let autoWidth = 0;

        //判断是否存在类名
        if ($(this).children('ul').hasClass('long')) {
            autoWidth = 140;
        } else {
            autoWidth = 120;
        }

        //添加动画
        $(this).children('ul').stop().show().animate({
            width: autoWidth,
            height: autoHeight
        }, 400, function () {
            //添加li逐渐显示动画
            $(this).children('li:first-child').fadeIn(200, function f1() {
                $(this).next().fadeIn(200, f1);
            })

            $(this).children('li:first-child').animate({
                left: 0
            }, 100, function f1() {
                $(this).next().animate({
                    left: 0
                }, 100, f1);
            })
        });
    },

    //鼠标移出事件
    'mouseleave': function () {
        $(this).children('ul').stop().hide().css({
            width: 0,
            height: 0
        });
        // $(this).children('ul').children().toggle(20);

        // $(this).children('ul').hide();
        $(this).children('ul').stop().children().hide().css({
            left: 10
        });
    }
})




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
$('.game-news-animate').on({'mouseenter':function(){   
    
    //放大图片
    $(this).find('img').addClass('img-change');

    $(this).find('.mask-layer').css({'backgroundColor' : 'rgba(0,0,0,0.75)'})

    $(this).find('.newsimg-title').css({'bottom' : 8});
},
'mouseleave' : function(){
    //缩小图片
    $(this).find('img').removeClass('img-change');

    $(this).find('.mask-layer').css({'backgroundColor' : 'rgba(0,0,0,0.15)'})

    $(this).find('.newsimg-title').css({'bottom' : 0});
}},'.game-handpick-new')





//创建页面滚动事件
$(document).on('scroll',function(){
    //获取页面滚动高度
    let pageY = $(this).scrollTop(); 
    
    if(pageY >= $(document).scrollTop()){
        pageY = $(document).scrollTop();
    }

    //将背景图跟随页面滚动
    $('.index-bg').css({'bottom' : -pageY});
})




//特色内容 tab功能
$('.feature-content-bigImg>img').eq(0).show();
$('.feature-text-full').eq(0).show();
//创建点击事件
$('.feature-content-introduce').on('click','.feature-button',function(){
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