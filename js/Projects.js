var operationStart = true,
	targetActive = null,
	selector = null,
	activeLeft = 0,
	activeTop = 0,
	activeHeight = 0,
	activeWidth = 0,
	galleryImgX = 0,
	galleryImgY = 150,
	galleryCenter = 0,
	initialHeight = 0,
	filterNum = [],
	filterCnt  = 0,
	resultCnt = null,
	gallery,navBarWidth,portSection,navBar,novCont;


//-----// Handles functionalities when mouse clicks on link 
function Hoveroverlay(){console.log("Hoveroverlay: Active")
	document.getElementsByTagName('nav')[0].addEventListener('click',function(e){
		if(e.target.localName == "li") {
			targetActive = e.target;
			Gallery();
		}
	});
}


//-----// Handles gallery functionalities
function Gallery(){
	navBar = document.getElementsByTagName("NAV")[0];
	let navBarWidth = navBar.clientWidth;
	let navBarHeight = navBar.clientHeight;

	galleryImgY=navBarHeight+50;
	galleryImgX=galleryCenter;

	if (targetActive == null) {targetActive = document.getElementById("Active");}// make the first element in nav bar active 
	selector = document.getElementById('selected'),
	activeLeft = targetActive.offsetLeft,
	activeTop = targetActive.offsetTop,
	activeHeight = targetActive.offsetHeight,
	activeWidth = targetActive.offsetWidth;
	selector.style.cssText="width:"+activeWidth+"px;height:"+activeHeight+"px;top:"+activeTop+"px;left:"+activeLeft+"px";

	operationStart = true;

	// detect the number of images at a particular time in gallery
	filterNum["All"] = gallery.length;
	for (var j = 0; j < novCont.length; j++) {
		for (var i = 0; i < gallery.length; i++) {
			if (novCont[j].innerHTML == gallery[i].title) {
				filterCnt+=1;
				filterNum[novCont[j].innerHTML] = filterCnt;
			}else if (filterNum[novCont[j].innerHTML] == undefined){
				filterNum[novCont[j].innerHTML] = 0
			}	
		}
	filterCnt = 0;
	}
	for (var i = 0; i < gallery.length; i++){
		if (targetActive.innerHTML != gallery[i].title && targetActive.innerHTML != "All") {
			gallery[i].style.left = "0px";
			gallery[i].style.top = "0px";
			gallery[i].style.transform = "scale(0,0)";
			gallery[i].style.opacity = "0";
		}else{
			
			// window center gallery img
			let initialChange = 1;
			if (filterNum[targetActive.innerHTML] < parseInt(navBarWidth/400)) {
				initialChange = filterNum[targetActive.innerHTML];
			}else{initialChange = parseInt(navBarWidth/400);}


			// center gallery last content img
			let galleryRemainder = filterNum[targetActive.innerHTML]%parseInt(navBarWidth/400);
			if (galleryRemainder > 0) {
				if (i >= gallery.length-galleryRemainder) {
					initialChange = galleryRemainder;
				}
			}


			galleryCenter = (navBarWidth/2)-(200*initialChange);
			if (operationStart) {
				galleryImgX = galleryCenter;
				operationStart = false;
			}else{ 
				if ((galleryImgX+405) < (parseInt(navBarWidth/400)*400)) {
					galleryImgX+=405;
				}else{
					galleryImgX = galleryCenter;
					galleryImgY+=305;
				}
			}

			portSection.style.transition ="all 0.5s"
			portSection.style.height=(navBarHeight+galleryImgY+250)+"px";
			gallery[i].style.left = galleryImgX+"px";
			gallery[i].style.top = galleryImgY+"px";
			gallery[i].style.transform = "scale(1,1)";
			gallery[i].style.opacity = "1";
		}
	}
	resultCnt = null;
	// updates send arrow in contact section
	setTimeout(function(){Reposition();},500);
}