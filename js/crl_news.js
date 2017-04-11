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
		//滚轮事件
	$(window).scroll(function() {
			$('.cc-search').hide()
			var top1 = document.body.scrollTop || document.documentElement.scrollTop;
			//console.log(top1)
			if(top1 > 500) {
				$('header').css({
					'position': 'fixed',
					'top': '0px',
					'left': '0'
				})
				$('.cc-main').css('margin-top','90px')
				$('.cc-back_top').css({
					display: 'block'
				})
			} else {
				$('header').css({
					'position': 'relative',
					'top': '0',
					'left': '0'
				})
				$('.cc-main').css('margin-top','0px')
				$('.cc-back_top').css({
					display: 'none'
				})
			}
		})
		//返回顶部
	$('.cc-back_top').mouseover(function() {
		$(this).css({
			'background': '#ccc'
		})
	})
	$('.cc-back_top').mouseout(function() {
		$(this).css({
			'background': 'transparent'
		})
	})
	
})	
