// 수정 버젼 2

    var $header = $('.header_wrap');
    var $gnb = $('.gnb');
    var $MenuBtn = $('.mo_btn button');
    var activeClass = 'on';

    function handleEvent(e) {
        switch(e.type) {
        case "mouseenter":
            $(this).addClass(activeClass);
            break;
        case "mouseleave":
            $(this).removeClass(activeClass);
            break;
        case "scroll":
            var sTop = $(this).scrollTop();
            sTop > 0 ? $header.addClass(activeClass) : $header.removeClass(activeClass);
            break;
        }
    } 



    const mq = window.matchMedia( "(max-width: 1145px)" );

        if (mq.matches) { // Mobile
            $MenuBtn.on("click", handleEvent);
            //$(window).on("scroll", handleEvent);
        } else { // PC
            $gnb.on("mouseenter mouseleave", handleEvent);
            $header.on("mouseenter mouseleave", handleEvent);
            $(window).on("scroll", handleEvent);
        }