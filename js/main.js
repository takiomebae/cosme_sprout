// JavaScript Document
/*jshint strict:false*/

$(function(){

    var effect_btm = 100; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 880; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });
	$(function(){
	$('.topimage').vegas({
		slides: [
			{src: './images/heroimage.jpg'},
			{src: './images/mainimage2.jpg'},
			{src: './images/mainiamge3.jpg'},
		],
		overlay: './js/overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
		transition: 'fade', //スライドを遷移させる際のアニメーション
		transitionDuration: 3000, //スライドの遷移アニメーションの時間
		delay: 10000, //スライド切り替え時の遅延時間
		animation: 'random', //スライド表示中のアニメーション
		animationDuration: 10000, //スライド表示中のアニメーションの時間
	});
});
	});