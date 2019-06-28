$(function(){
    var app = app || {};

	var card = {
			cardWrap : $('body').find('.cardWrap'),
			cardItem : $('.cardWrap').find('.card'),
			scoreNum : $('.scoreNum')
		}
	var selecCard = 0;
	var score = 0;
	
	// 숫자 랜덤
	// 난수 생성 함수
	function generateRandom (min, max) {
		var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
			return ranNum;
	}
	// 카드 배치
	app.setTable = function(){
		var cardArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
		var cardsNum = '';
		for(var i=0;i<16;i++) {
			var idx = generateRandom(0,15-i);
			var 숫자 = cardArray.splice(idx,1);
			cardsNum += '<button type="button" class="card">'+ 숫자 +'</button>';
		}
		card['cardWrap'].html(cardsNum);
	}

    app.init = function(){
		function resetClass(){
			$('.card').removeClass('current').removeClass('num1').removeClass('num2');
		}

		// 시작
		$('.card').addClass('done')
		setTimeout (function(){
			$('.card').removeClass('done');
		}, 3000)


		//클릭
        app.clicked = function(){
			var $this = $(this);
			selecCard++;
			$this.addClass('current' + ' num' + selecCard);

			if ( selecCard >= 2 ){
				var num1 = $('.num1').text();
				var num2 = $('.num2').text();
				app.vsCard(num1, num2);
			}
			
			// 비교
			app.vsCard = function(num1, num2){
				if( num1 == num2 ){
					$('.current').addClass('done');
					resetClass();
					selecCard = 0;
					score++
					card.scoreNum.val(score)
				}else{
					resetClass();
					selecCard = 0;
				}
				// 게임끝 새로고침
				if(score == 8){
					alert( score + 'SCORE GOOOOOOOOOOD ~ !!')

					setTimeout (function(){
						window.location.reload();
					}, 3000)
					
				}
			}
        }

        $('.cardWrap').find('.card').on("click", app.clicked);
    }


	//실행
	app.setTable();
	app.init();

    

})