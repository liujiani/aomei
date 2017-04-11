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
	
	
	$('#crl_cont_r').find('ul').html( $('#crl_cont_r').find('ul').html()+ $('#crl_cont_r').find('ul').html());
	$('#crl_cont_r').find('ul').width($('#crl_cont_r').find('ul>li').length*$('#crl_cont_r').find('ul>li').width());
	$('#crl_cont_r').find('ul>li').width(100/$('#crl_cont_r').find('ul>li').length+'%')
	
	var index = 0;
	         $('#crl_right').click(function(){
	         	clearInterval(time)
				index++;
				if(index == $('#crl_cont_r').find('ul li').length)index = 0;
				$('#crl_cont_r').find('ul').animate({
					'translateX':-753*index+'px'
				},1000,function(){
					if(index == $('#crl_cont_r').find('ul li').length/2){
						$('ul').css({
							'transform':'translateX(0)'
						});
						index = 0;
					}
				});
			})
			
			$('#crl_left').click(function(){
				clearInterval(time)
				index--;
				if(index==-1){
					$('.crl_cont_r').find('ul').css('transform','translateX('+(-753*$('.crl_cont_r').find('ul li').length/2+'px')+')')
					index = ($('.crl_cont_r').find('ul li').length/2)-1;
				}
				$('.crl_cont_r').find('ul').animate({
					'translateX':-753*index+'px'
				},1000);
			})
	var time=setInterval(function(){
		//alert(1);
			index++;
			if(index == $('#crl_cont_r').find('ul li').length)index = 0;
			$('#crl_cont_r').find('ul').animate({
				'translateX':-753*index+'px'
			},1000,function(){
				if(index == $('#crl_cont_r').find('ul li').length/2){
					$('ul').css({
						'transform':'translateX(0)'
					});
					index = 0;
				}
			});
	},3000);
	$('.crl_cont_r').mouseover(function(){
		clearInterval(time)
	})
	$('.crl_cont_r').mouseout(function(){
		clearInterval(time)
		var time=setInterval(function(){
		//alert(1);
			index++;
			if(index == $('#crl_cont_r').find('ul li').length)index = 0;
			$('#crl_cont_r').find('ul').animate({
				'translateX':-753*index+'px'
			},1000,function(){
				if(index == $('#crl_cont_r').find('ul li').length/2){
					$('ul').css({
						'transform':'translateX(0)'
					});
					index = 0;
				}
			});
	},3000);
	})
})