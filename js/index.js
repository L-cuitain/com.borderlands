//鼠标移入导航栏列表某一项时 这项的颜色改变
$('.nav-list-left').on({
    'mouseenter' : function(){
        $(this).children('.nav-item-thead').animate({'backgroundColor':'#f2de05'},1000)
    }
},'.nav-item') 