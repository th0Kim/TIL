// 수정 버젼 1

    var $header = $('.header_wrap');
    var $gnb = $('.gnb');
    var activeClass = 'on';

    // GNB menu open
    $gnb.on( "mouseenter" , function(e){
        $(this).addClass(activeClass).parents($header).addClass(activeClass);
    });
    // GNB menu close
    $header.on( "mouseleave" , function(e){
        $(this).removeClass(activeClass).find($gnb).removeClass(activeClass);
    });

    //Scroll Header changed bg color
    $(window).on('scroll' , function(e){
        var st = $(this).scrollTop();

        if( st > 0 ){
            $header.addClass(activeClass);
        } else {
            $header.removeClass(activeClass);
        }
    });
