//导航栏显示隐藏
new Headroom(document.querySelector(".nav"), { //这里的nav-scroll改为你的导航栏的id或class
    offset : 5, // 在元素没有固定之前，垂直方向的偏移量（以px为单位）
        tolerance: 5, // scroll tolerance in px before state changes        
    classes: {
        initial: "yya",  // 当元素初始化后所设置的class
        pinned: "sildeUp", // 向上滚动时设置的class
        unpinned: "sildeDown" // 向下滚动时所设置的class
    }
}).init();


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


$('.shift-item').on({'mouseenter':function(){
    console.log($(this).children('.shift'));
    
    $(this).children('.shift').css({'backgroundPositionX' : '-150px' , 'backgroundPositionY' : '-300px'})
},
'mouseleave' : function(){
    $(this).children('.shift').css({'backgroundPositionX' : '-230px' , 'backgroundPositionY' : '-300px'})
}
})

$('.language-item').on({'mouseenter':function(){
    $(this).children('.language').css({'backgroundPositionX' : '-296px' , 'backgroundPositionY' : '-392p'})
},
'mouseleave' : function(){
    $(this).children('.language').css({'backgroundPositionX' : '-317px' , 'backgroundPositionY' : '-392p'})
}
})

