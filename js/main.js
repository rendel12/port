$(document).ready(function() {
    
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally:true,
        anchors:['one', 'two','three'],
        loopHorizontal:false,
        navigation: true,
        navigationPosition: 'right',
        
        
        
        // 차트구현
		'afterLoad' : function (anchorLink, index) {
			if (index == 3){
				$('.chart').easyPieChart({
                  barColor: '#f9f9f9',      //차트내용색
                  trackColor: false, //차트배경색
                  scaleColor: 'rgba(0,0,0,0)',  //차트기준선색
                  lineCap: 'butt', //차트기준선 모양 butt round square
                  lineWidth: 15, //차트두께
                  size: 200, //차트크기
                  animate: 1000,    //그려지는시간
                  onStart: $.noop,
                  onStop: $.noop
                });
			}

		},
        
        

	});
    
    //슬릭
    $(".portpolio").slick({
        dots:true,
        arrows:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:3500,
        prevArrow:'<i class="fa fa-arrow-left slider_arrow arrowL" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-arrow-right slider_arrow arrowR" aria-hidden="true"></i>'
    }); 
});
