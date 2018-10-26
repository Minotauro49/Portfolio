window.ontouchstart = function(){}//---------// for touch screen device 	
window.onload = function(e) {
	var overlay = document.getElementById('overlay'),
		loading = document.getElementById('Loading'),
		scrollUp = document.getElementById('scrollUp');
		
	//---------// Handle loading 
	loading.style.animation="exit 1s linear infinite";
	setTimeout(function(){
		overlay.style.opacity = 1;
		document.body.style.cssText = "display:block;overflow-y: scroll;";
		loading.style.display="none";
	},300)


	window.addEventListener('scroll',function(){
		var pageScroll = window.pageYOffset;
		if (window.innerWidth > 794) {
			if (pageScroll > 1000) {
				scrollUp.style.display="block";
			}else{
				scrollUp.style.display="none";
			}
		}else{
			scrollUp.style.display="none";
		}
	});
}


function ScrollTop(e){
	var pageY = window.pageYOffset;
	var speed = 20;

	var scroll = setInterval(function(){
		if (pageY > 0) {

			switch(true){
				case pageY > 1000 && pageY < 2000:speed = 35;break;
				case pageY > 2000 && pageY < 2800:speed = 55;break;
				case pageY > 2800 && pageY < 3500:speed = 85;break;
				case pageY > 3500:speed = 100;break;
				default:speed = 20;
			}

			window.scrollTo(0,pageY-=speed);

		}else{
			clearInterval(scroll);
		};
	},5)
	

	
}






