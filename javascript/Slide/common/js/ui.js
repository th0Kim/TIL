//function hasJqueryObject(elem){return $(elem).length>0}var pubApp=pubApp||{};pubApp.initSlide=function(){pubApp.$initSlide=pubApp.$body.find(".initSlide");pubApp.$btnNext=pubApp.$initSlide.find(".btnNext");pubApp.$btnPrev=pubApp.$initSlide.find(".btnPrev");pubApp.$countWrap=pubApp.$initSlide.find(".countWrap");pubApp.$btnCountCtrl=pubApp.$countWrap.find(".btnCountCtrl");pubApp.$view=pubApp.$initSlide.find(".view");pubApp.slideViewWidth=pubApp.$view.width();pubApp.isAnimated=false;pubApp.$initSlide.each(function(idx){$(this).attr("data-wrap",idx).find(pubApp.$btnCountCtrl).each(function(_idx){$(this).attr("data-key",_idx)});pubApp.$initSlide.eq(idx).find(pubApp.$view).css({"left":pubApp.slideViewWidth}).eq(0).css({"left":0});pubApp.$initSlide.eq(idx).find(pubApp.$btnCountCtrl).eq(0).addClass("current")});pubApp.$btnNext.on("click",{isNext:0},pubApp.handleSlideCtrl);pubApp.$btnPrev.on("click",{isNext:1},pubApp.handleSlideCtrl);pubApp.$btnCountCtrl.on("click",{isNext:2},pubApp.handleSlideCtrl)};pubApp.handleSlideCtrl=function(e){if($(this).hasClass("current"))return;if(pubApp.isAnimated)return;pubApp.isAnimated=true;var wrapKey=$(this).closest(pubApp.$initSlide).attr("data-wrap");var currentKey=parseInt($(this).closest(pubApp.$initSlide).find(".btnCountCtrl.current").attr("data-key"));var length=pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).length;switch(e.data.isNext){case 0:var nextKey=currentKey+1;if(nextKey>length-1)nextKey=0;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 1:var nextKey=currentKey-1;if(nextKey<0)nextKey=length-1;pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":-pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":-pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(nextKey).addClass("current");break;case 2:var nextKey=$(this).attr("data-key");pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(nextKey).css({"left":pubApp.slideViewWidth}).show().animate({"left":0},500,function(){pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$view).eq(currentKey).animate({"left":-pubApp.slideViewWidth},500,function(){$(this).hide().css({"left":pubApp.slideViewWidth});pubApp.isAnimated=false});pubApp.$initSlide.eq(wrapKey).find(pubApp.$btnCountCtrl).eq(currentKey).removeClass("current");$(this).addClass("current");break}}$(function(){pubApp.$body=$("body");if(hasJqueryObject(pubApp.$body.find(".initSlide")))pubApp.initSlide();console.dir(pubApp)});
$(function(){
    var app = app || {};

    app.init = function(){       
        
        $('.initSlide').each(function(i){
            var $this = $(this);
            var slider = {
                    slideUl : $this.find('.viewListWrap ul'),
                    slide : $this.find('.view'),
                    countWrap : $this.find('.countWrap'),
                    btn : $this.find('.btnCountCtrl'),
                    slideLength : $this.find('.viewListWrap li').length
                }
            var slideIdx = 0; // index 초기값
            function current(Idx){
                 slider.btn.removeClass('current').eq(Idx).addClass('current'); //indi
            }
            // li 갯수 추가시
            if(slider.slideLength > 1){
                slider.slideUl.css({width: slider.slide.width()*slider.slideLength + 'px'});

		        var countBtnW = '';
                for(var i=1;i<slider.slideLength+1;i++) {
                    countBtnW += '<button type="button" class="btnCountCtrl">'+ i +'</button>';
                }
                $('.btnCountCtrl').first().addClass('current'); //진행중 2018-07-19
                slider.countWrap.html(countBtnW);
            }
            
            // NEXT
            app.nextClicked = function(){
                slideIdx++;
                if(slideIdx >= slider.slideLength){slideIdx = 0;} // 무한
                var slideWidth = slider.slide.width()*slideIdx; //이동값
                current(slideIdx);
                slider.slideUl.stop().animate({left: -slideWidth},200); //이동
            }

            // PREV
            app.prevClicked = function(){
                slideIdx--;
                if(slideIdx < 0){slideIdx = slider.slideLength-1;} // 무한
                var slideWidth = slider.slide.width()*slideIdx; //이동값
                current(slideIdx);
                slider.slideUl.stop().animate({left: -slideWidth},200) //이동
            }

            // indi
            app.indiClicked = function(){
                var btnIdx = $(this).index();
                var slideWidth = slider.slide.width()*btnIdx; //이동값
                current(btnIdx);
                slider.slideUl.stop().animate({left: -slideWidth},200); //이동
            }

            // 실행
            $this.find('.btnNext').on("click", app.nextClicked); // 다음 버튼 클릭 이벤트
            $this.find('.btnPrev').on("click", app.prevClicked); // 이전 버튼 클릭 이벤트
            $this.find('.btnCountCtrl').on("click", app.indiClicked); // indi 클릭 이벤트
        })
        
    }

    //실행
    app.init();

})