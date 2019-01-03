$(function(){
    var app = app || {};
    app.init = function(){
        
        $('.box').each(function(e){
            var itemS = $(this);
            var itemInd = $(this).offset().top;
            itemS.attr('data-top', itemInd )


            //SCROLL EVENT
            $(window).on("scroll",function(){
                var st = $(this).scrollTop() + 100 ;

                if( st > itemInd ){
                    itemS.addClass('active');
                }

            })
        })
        
    }

    //실행
    app.init();

})
	