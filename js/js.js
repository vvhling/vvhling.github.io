// 【导航栏】点击效果
$(function(){
    $(".nav_show").click(function(){   //显示导航栏
        $(".nav_hide").fadeIn("slow");
        $(".nav_show").fadeOut("slow");
    });
    $(".nav_close").click(function(){  //隐藏导航栏
        $(".nav_hide").fadeOut("slow");
        $(".nav_show").fadeIn("slow");
    });

    $(window).bind("scroll",function() {  //鼠标滚轮事件
        var top = $(this).scrollTop();  //当前窗口滚动距离
        if(top == 0){
            $(".header").css("background","none");
        }else{
            var scrollFunc = function(e){
            var direct = 0;
            var evt = e || window.event;
            if(evt.wheelDelta){            //判断IE、谷歌的滑轮事件
                if (evt.wheelDelta < 0) {  //鼠标向下滚动时
                    $(".header").css("background","#212121");
                }
            }else if(evt.detail){    //判断Firefox滑轮事件
                if(evt.detail < 0){  //鼠标向下滚动
                    $(".header").css("background","#212121");
                }
            }
    };
    //给页面绑定滑轮事件
    if (document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    };
    //滚动滑轮事件触发scrollFunc函数
    window.onmousewheel = document.onmousewheel = scrollFunc;
        }
    })
});


//【首页轮播大图】切换效果
$(function(){
    var bannerSlider = new Slider($('.banner'), {
        time: 4500,
        delay: 1300,
        auto: true,
        controller: $('#bannerCtrl'),
    });
    $('.slideL').click(function() {
        bannerSlider.prev()
    });
    $('.slideR').click(function() {
        bannerSlider.next()
    });
});

//【案例展示】鼠标经过时效果
$(function(){
    $(".pho_pic").each(function(){
      $(this).bind("mouseover",function(){
        $(this).parent().find(".check").css("display","block"); 
        });
      $(this).bind("mouseout",function(){
        $(this).parent().find(".check").css("display","none"); 
        });
    });
});

// 【资深团队】滑动切换效果
$(function(){    //鼠标经过左右箭头效果
    $(".team_arrowleft").bind("mouseover",function(){
        $(".l").attr("src","images/icon_arrowleft_red.png");
    });
    $(".team_arrowleft").bind("mouseout",function(){
        $(".l").attr("src","images/icon_arrowleft.png");
    });
    $(".team_arrowright").bind("mouseover",function(){
        $(".r").attr("src","images/icon_arrowright_red.png");
    });
    $(".team_arrowright").bind("mouseout",function(){
        $(".r").attr("src","images/icon_arrowright.png");
    });
})

//【战略合作】鼠标经过时点亮图片效果
$(function(){
    $(".p1").bind("mouseover",function(){    //picture 1
        $(".p1").attr("src","images/logo_conifer_c.png");
    });
    $(".p1").bind("mouseout",function(){
        $(".p1").attr("src","images/logo_conifer.png");
    });

    $(".p2").bind("mouseover",function(){    //picture 2
        $(".p2").attr("src","images/logo_mystyle_c.png");
    });
    $(".p2").bind("mouseout",function(){
        $(".p2").attr("src","images/logo_mystyle.png");
    });

    $(".p3").bind("mouseover",function(){    //picture 3
        $(".p3").attr("src","images/logo_lamune_c.png");
    });
    $(".p3").bind("mouseout",function(){
        $(".p3").attr("src","images/logo_lamune.png");
    });

    $(".p4").bind("mouseover",function(){    //picture 4
        $(".p4").attr("src","images/logo_starbucks_c.png");
    });
    $(".p4").bind("mouseout",function(){
        $(".p4").attr("src","images/logo_starbucks.png");
    });

    $(".p5").bind("mouseover",function(){    //picture 5
        $(".p5").attr("src","images/logo_narada_c.png");
    });
    $(".p5").bind("mouseout",function(){
        $(".p5").attr("src","images/logo_narada.png");
    });

    $(".p6").bind("mouseover",function(){    //picture 6
        $(".p6").attr("src","images/logo_bedom_c.png");
    });
    $(".p6").bind("mouseout",function(){
        $(".p6").attr("src","images/logo_bedom.png");
    });

    $(".p7").bind("mouseover",function(){    //picture 7
        $(".p7").attr("src","images/logo_pizzahut_c.png");
    });
    $(".p7").bind("mouseout",function(){
        $(".p7").attr("src","images/logo_pizzahut.png");
    });

    $(".p8").bind("mouseover",function(){    //picture 8
        $(".p8").attr("src","images/logo_kfc_c.png");
    });
    $(".p8").bind("mouseout",function(){
        $(".p8").attr("src","images/logo_kfc.png");
    });

    $(".p9").bind("mouseover",function(){    //picture 9
        $(".p9").attr("src","images/logo_mcd_c.png");
    });
    $(".p9").bind("mouseout",function(){
        $(".p9").attr("src","images/logo_mcd.png");
    });

    $(".p10").bind("mouseover",function(){    //picture 10
        $(".p10").attr("src","images/logo_hutaoli_c.png");
    });
    $(".p10").bind("mouseout",function(){
        $(".p10").attr("src","images/logo_hutaoli.png");
    });
});

//【资深团队】轮播滑动效果
$(document).ready(function(e) {
    var unslider04 = $('.team_change').unslider({

    }),
    data04 = unslider04.data('unslider'); 
    var unslider = $('.team_change').unslider();

    $('.team_arrowleft').click(function() {
        var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });
    $('.team_arrowright').click(function() {
        var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });
});