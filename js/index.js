//鼠标移入导航栏列表某一项时 显示下拉列表
$('.nav-content>ul>li').on({
    'mouseenter' : function(){
        $('.nav-content>ul>li').children('ul').each(function(i){            
            $(this).eq(i).hide();
        })
        
        //获取ul中li的个数
        let index =  $(this).children('ul').children('li').length;
        //设置自动宽度
        let autoHeight = 44 * index;
        
        $(this).children('ul').show().animate({width : 120 , height : autoHeight},700);
    },
    'mouseleave' : function(){
        $(this).children('ul').animate({width : 0 , height : 0},100);
    }
}) 



//精灵图动画
$('.shift-item').on({
    'mouseenter' : function(){
        $('.shift').fadeOut(0,function(){
            $('.shift-nosee').fadeIn(200);
        });
        
    },
    'mouseleave' : function(){
        $('.shift-nosee').fadeOut(0,function(){
            $('.shift').fadeIn(200);
        });
    },
})


$('.language-item').on({
    'mouseenter' : function(){
        $('.language').fadeOut(0,function(){
            $('.language-nosee').fadeIn(200);
        });
        
    },
    'mouseleave' : function(){
        $('.language-nosee').fadeOut(0,function(){
            $('.language').fadeIn(200);
        });
    },
})






