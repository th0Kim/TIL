//function hasJqueryObject(elem){return $(elem).length>0}var pubApp=pubApp||{};pubApp.initSlide=function(){pubApp.$initSlide=pubApp.$body.find(".initSlide");pubApp.$btnNext=pubApp.$initSlide.find(".btnNext");pubApp.$btnPrev=pubApp.$initSlide.find(".btnPrev");pubApp.$countWrap=pubApp.$initSlide.find(".countWrap");pubApp.$btnCountCtrl=pubApp.$countWrap.find(".btnCountCtrl");pubApp.$view=pubApp.$initSlide.find(".view");pubApp.slideViewWidth=pubApp.$view.width();pubApp.isAnimated=false;pubApp.$initSlide.each(function(idx){$(this).attr("data-wrap",idx).find(pubApp.$btnCountCtrl).each(function(_idx){$(this).attr("data-key",_idx)});pubApp.$initSlide.eq(idx).find(pubApp.$view).css({"left":pubApp.slideViewWidth}).eq(0).css({"left":0});pubApp.$initSlide.eq(idx).find(pubApp.$btnCountCtrl).eq(0).addClass("current")});pubApp.$btnNext.on("click",{isNext:0},pubApp.handleSlideCtrl);pubApp.$btnPrev.on("click",{isNext:1},pubApp.handleSlideCtrl);pubApp.$btnCountCtrl.on("click",{isNext:2},pubApp.handleSlideCtrl)};pubApp.handleSlideCtrl=function(e){if($(this).hasClass("current"))return;if(pubApp.isAnimated)return;pubApp.isAnimated=true;var wrapKey=$(this).closest(pubApp.$initSlide).attr("data-wrap");var currentKey=parseInt($(this).closest(pubApp.$initSlide).find(".btnCountCtrl.current").attr("data-key"));var length=pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).length;switch(e.data.isNext){case 0:var nextKey=currentKey+1;if(nextKey>length-1)nextKey=0;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 1:var nextKey=currentKey-1;if(nextKey<0)nextKey=length-1;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":-pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":-pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 2:var nextKey=$(this).attr("data-key");pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");$(this).addClass("current");break}}$(function(){pubApp.$body=$("body");if(hasJqueryObject(pubApp.$body.find(".initSlide")))pubApp.initSlide();console.dir(pubApp)});
$(function(){
    var app = app || {};

    app.init = function(){
        
        var slider = {
                slideUl :  $('body').find('.viewListWrap ul'),
                slide : $('body').find('.view'),
                btn : $('body').find('.btnCountCtrl')
            }

        var slideIdx = 0; // slide index

        // NEXT
        app.nextClicked = function(){
            slideIdx++;
            if(slideIdx > 2){slideIdx = 0;} // 무한

            var slideParent = $(this).parent();
            var slideWidth = slider['slide'].width()*slideIdx;
            var slideUl = slideParent.find(slider['slideUl']);
            var button = slideParent.find(slider['btn']);

            button.removeClass('current').eq(slideIdx).addClass('current'); //indi
            slideUl.stop().animate({left: -slideWidth},200); //이동
        }

        // PREV
        app.prevClicked = function(){
            slideIdx--;
            if(slideIdx < 0){slideIdx = 2;} // 무한

            var slideParent = $(this).parent();
            var slideWidth = slider['slide'].width()*slideIdx;
            var slideUl = slideParent.find(slider['slideUl']);
            var button = slideParent.find(slider['btn']);

            button.removeClass('current').eq(slideIdx).addClass('current'); //indi
            slideUl.stop().animate({left: -slideWidth},200) //이동
        }

        // indi
        app.indiClicked = function(){
            var btnIdx = $(this).index(); // click button index
            var slideParent = $(this).parents('.initSlide');
            var slideWidth = slider['slide'].width()*btnIdx;
            var slideUl = slideParent.find(slider['slideUl']);
            var button = slideParent.find(slider['btn']);
            
            button.removeClass('current').eq(btnIdx).addClass('current'); //indi
            slideUl.stop().animate({left: -slideWidth},200); //이동
        }

        // 실행
        $('body').find('.btnNext').on("click", app.nextClicked);
        $('body').find('.btnPrev').on("click", app.prevClicked);
        $('body').find('.btnCountCtrl').on("click", app.indiClicked);

    }

    //실행
    app.init();

})