$(function() {
	//语言的移入移出
	$('.language').mouseover(function() {
		$('.language_hide').css('display', 'block')
	})
	$('.language').mouseout(function() {
			$('.language_hide').css('display', 'none')
		})
		//查找的点击事件
	$('.search').click(function() {
		$('.cc-search').toggle();
	})
	$('.del').click(function() {
			$('.cc-search').hide()
		})
	//导航
	$('.cc-head ul li').mouseover(function(){
		$(this).find('.hide').css({'display':'block'})
	})
	$('.cc-head ul li').mouseout(function(){
		$(this).find('.hide').css({'display':'none'})
	})
	
		//滚轮事件
	$(window).scroll(function() {
			$('.cc-search').hide()
			var top1 = document.body.scrollTop || document.documentElement.scrollTop;
			//console.log(top1)
			if(top1 > 200) {
				$('header').css({
					'position': 'fixed',
					'top': '0px',
					'left': '0',
					'background':'#fff',
				})
				$('.hu').css({'display':'block'})
				$('.hul').css({'display':'none'})
				$('header').find('a').css({'color':'#000'})
				$('.cc-main').css('margin-top','90px')
				$('.cc-back_top').css({
					display: 'block'
				})
			} else {
				$('.hu').css({'display':'none'})
				$('.hul').css({'display':'block'})
				$('header').css({
					'position': 'absolute',
					'top': '0',
					'left': '0',
					'background':''
				})
				$('header').find('a').css({'color':'#fff'})
				$('.cc-main').css('margin-top','0px')
				$('.cc-back_top').css({
					display: 'none'
				})
			}
		})
		//返回顶部
	$('.cc-back_top').mouseover(function() {
		$(this).animate({
			'background': '#ccc'
		})
	})
	$('.cc-back_top').mouseout(function() {
		$(this).css({
			'background': 'transparent'
		})
	})
})
