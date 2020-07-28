$(function(){
	var _window = $(window),
		_header = $('.header-menu'),
		heroBottom;
	
	_window.on('scroll',function(){
		heroBottom = $('.top-page').height();
		if(_window.scrollTop() > heroBottom){
			_header.addClass('transform');   
		}
		else{
			_header.removeClass('transform');   
		}
	});
	
	_window.trigger('scroll');	
});





$(function(){
	var _window = $(window),
		_header = $('.header-text1, .header-text2'),
		heroBottom;
	
	_window.on('scroll',function(){
		heroBottom = $('.top-page').height();
		if(_window.scrollTop() > heroBottom){
			_header.addClass('transform');   
		}
		else{
			_header.removeClass('transform');   
		}
	});
	
	_window.trigger('scroll');	
});





$(function () {
    // slideshow クラスを持った要素ごとに処理を実行
    $('.slideshow').each(function () {

        var $slides = $(this).find('img');  // すべてのスライド
        var slideCount = $slides.length;    // スライドの点数
        var currentIndex = 0;               // 現在のスライドを示すインデックス

        $slides.eq(currentIndex).fadeIn();  // 1 番目のスライドをフェードインで表示

        // 3秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 3000);

        // 次のスライドを表示する関数
        function showNextSlide () {
            // 次に表示するスライドのインデックスを算出 (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut(); //現在のスライドをフェードアウト
            $slides.eq(nextIndex).fadeIn();     // 次のスライドをフェードイン

            currentIndex = nextIndex;           // 現在のスライドのインデックスを更新
        }

    });
});




var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});