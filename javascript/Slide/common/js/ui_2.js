//function hasJqueryObject(elem){return $(elem).length>0}var pubApp=pubApp||{};pubApp.initSlide=function(){pubApp.$initSlide=pubApp.$body.find(".initSlide");pubApp.$btnNext=pubApp.$initSlide.find(".btnNext");pubApp.$btnPrev=pubApp.$initSlide.find(".btnPrev");pubApp.$countWrap=pubApp.$initSlide.find(".countWrap");pubApp.$btnCountCtrl=pubApp.$countWrap.find(".btnCountCtrl");pubApp.$view=pubApp.$initSlide.find(".view");pubApp.slideViewWidth=pubApp.$view.width();pubApp.isAnimated=false;pubApp.$initSlide.each(function(idx){$(this).attr("data-wrap",idx).find(pubApp.$btnCountCtrl).each(function(_idx){$(this).attr("data-key",_idx)});pubApp.$initSlide.eq(idx).find(pubApp.$view).css({"left":pubApp.slideViewWidth}).eq(0).css({"left":0});pubApp.$initSlide.eq(idx).find(pubApp.$btnCountCtrl).eq(0).addClass("current")});pubApp.$btnNext.on("click",{isNext:0},pubApp.handleSlideCtrl);pubApp.$btnPrev.on("click",{isNext:1},pubApp.handleSlideCtrl);pubApp.$btnCountCtrl.on("click",{isNext:2},pubApp.handleSlideCtrl)};pubApp.handleSlideCtrl=function(e){if($(this).hasClass("current"))return;if(pubApp.isAnimated)return;pubApp.isAnimated=true;var wrapKey=$(this).closest(pubApp.$initSlide).attr("data-wrap");var currentKey=parseInt($(this).closest(pubApp.$initSlide).find(".btnCountCtrl.current").attr("data-key"));var length=pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).length;switch(e.data.isNext){case 0:var nextKey=currentKey+1;if(nextKey>length-1)nextKey=0;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 1:var nextKey=currentKey-1;if(nextKey<0)nextKey=length-1;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":-pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":-pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 2:var nextKey=$(this).attr("data-key");pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");$(this).addClass("current");break}}$(function(){pubApp.$body=$("body");if(hasJqueryObject(pubApp.$body.find(".initSlide")))pubApp.initSlide();console.dir(pubApp)});
$(function(){
    var app = app || {};
    var initSlide = '.initSlide';
    var $initSlide = $('.initSlide');
    var slideIdx = 0;
    var btnNext = 'btnNext';
    var btnPrev = 'btnPrev';
    var btnCtrl = 'btnCountCtrl';
    var current = 'current';

    app.init = function($Idx){
        var $initSlide = $(initSlide).eq($Idx)
        var slider = {
                slideUl : $initSlide.find('.viewListWrap ul'),
                slideLength : $initSlide.find('.view').length, // 3
                slide : $initSlide.find('.view').width(),
                btn : $initSlide.find('.btnCountCtrl')
            }
        
        // motion
        app.motion = function(slideIdx){
            var slideWidth = slider.slide*slideIdx; //이동값
            slider.btn.removeClass(current).eq(slideIdx).addClass(current); //indi
            slider.slideUl.stop().animate({left: -slideWidth},200); //이동
        }

        // NEXT
        app.nextClicked = function(){
            slideIdx++;
            if(slideIdx >= slider.slideLength){slideIdx = 0;} // 무한
            app.motion(slideIdx);
        }

        // PREV
        app.prevClicked = function(){
            slideIdx--;
            if(slideIdx < 0){slideIdx = slider.slideLength-1;} // 무한
            app.motion(slideIdx);
        }

        // indi
        app.indiClicked = function($btnIdx){
            app.motion($btnIdx);
        }
    }

    // parent check
    app.check = function(){
        var $IdxLength = $initSlide.length;
        var $btnParentIdx = $(this).parents(initSlide).index();
        var $btnIdx = $(this).index();
        for(i=0; i<$IdxLength; i++){
            if( $(this).hasClass(btnNext) && i === $btnParentIdx ){ app.init($btnParentIdx), app.nextClicked() }; //다음버튼 클릭 했을 때
            if( $(this).hasClass(btnPrev) && i === $btnParentIdx ){ app.init($btnParentIdx), app.prevClicked() }; //이전버튼 클릭 했을 때
            if( $(this).hasClass(btnCtrl) && i === $btnParentIdx ){ app.init($btnParentIdx), app.indiClicked($btnIdx) }; //indi 클릭 했을 때
        }
        //return $btnIdx; // 2018-07-20 indi이벤트 후 바뀐 index로 prev,next event의 index값을 바꿀수 있을까.........
    }

    // 체크 실행
    $('.btnNext, .btnPrev, .countWrap button').on("click", app.check);

})
