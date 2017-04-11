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
	// 选项卡1
	var iNow=0
	$('.crl_left').click(function(){
	    iNow--;
		//alert(iNow);
		if(iNow==-1){
			iNow = crl_ul.children.length-1;
		}
		tab();
	})
	$('.crl_right').click(function(){
	    iNow++;
		if(iNow==crl_ul.children.length){
			iNow = 0;
		}
		tab();
	})
	function tab(){
		for(var i=0;i<crl_ul.children.length;i++){
			crl_ul.children[i].style.display='none'
		}
		   crl_ul.children[iNow].style.display='block'
    }
	// 选项卡 2
	var swiper = new Swiper('.swiper-container', {
//      pagination: '.swiper-pagination',  //圆点
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
//      slidesPerView: 1,
//      paginationClickable: true,
//      spaceBetween: 30,
        loop: true
    });
})	

