
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=992 ){
				$('.soBox').stop().slideDown();
				$('.nav').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=992 ){
				$('.soBox').stop().slideUp();
				$('.nav').stop().slideUp();
			}
		}
	});

    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top>60 ){
            $('#hd.hd1').css("background","rgba(7,14,33,.9)");
        }else{
            $('#hd.hd1').css("background","rgba(7,14,33,1)");
        }
    });

    // 过渡动画
    $('.jsBtn').click(function(){
            var _id = $(this).attr('href');
            var _padd = $('body').css('padding').slice(0,2)*1;
            var _topH = $('#hd').outerHeight();
            if( _padd ){
                $('html,body').animate({
                    'scrollTop':$(_id).offset().top-2*_padd-_topH
                }, 500);
            }else{
                $('html,body').animate({
                    'scrollTop':$(_id).offset().top
                }, 500);
            }
            return false;
        });

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
        var tab=$(this).parent(".TAB_CLICK");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    // 返回顶部
    $('.top-btn').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top<200 ){
            $('.float-bar').stop().fadeOut();
        }else{
            $('.float-bar').stop().fadeIn();
        }
    });
	
});