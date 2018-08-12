
var submit,message,textareaResize,QandA;

window.onload = function(e) {
	submit = document.getElementById('Submit'),
	message = document.getElementById('message'),
	textareaResize = document.querySelector("textarea");
	gallery = document.getElementById("Gallery").children,
	portSection = document.querySelector(".PORTFOLIO"),
	novCont = document.getElementById("novCont").children;
	QandA = document.getElementById("QandA").children;



	// set images to gallery
	for (var i = 0; i < gallery.length; i++){
		gallery[i].style.cssText="background: url('E:/Desktop/PROJECTS FOLDER/MyProgrammingPortfolio/Official_Portfolio/img/GalleryPics/img"+i+".png');"+
		"background-repeat: no-repeat;"+
		"background-size: cover;"
	}


	// loads this in projects.js 
	Hoveroverlay();	
	Gallery();
	Slider();



	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var observer = new MutationObserver(function() {Reposition();});
	observer.observe(textareaResize, {attributes:true});
	
	//---------// Submits the form to me!!!!!!!!
	submit.addEventListener('click',function(){
		this.src="img/Submitready.png";
		message.innerHTML="Send this form to me!"
		message.style.color="#27ae60"
	});
	Reposition();
}


function Reposition(){
	submit.style.top = ((textareaResize.offsetTop+textareaResize.offsetHeight)-35)+"px";
	submit.style.left = textareaResize.offsetLeft+20+"px";
	message.style.top = (textareaResize.offsetTop+textareaResize.offsetHeight)+"px";
	message.style.left = (textareaResize.offsetLeft+100)+"px";
	submit.style.display="block";
}


// page resize alart!
window.onresize = function(){Reposition();Gallery();submit.style.display="none"};



// --------------// About me page slider 
var nextSlide = -1;
var confirmAction = false;

function Slider(){
	document.body.addEventListener('click',function(e){
	if (e.target.id =="next" && nextSlide < 6) {nextSlide+=1;confirmAction = true}
	if (e.target.id =="prov" && nextSlide > 0) {nextSlide-=1;confirmAction = true}
	if (e.path[0].localName == "h5") {nextSlide = parseInt(e.path[0].outerHTML[10]);confirmAction = true}

	if (confirmAction == true || e.path[0].innerHTML =="Q&amp;A") {
		for (var i = 0; i < 7; i++) {
			if (i == nextSlide || e.path[0].innerHTML =="Q&amp;A") {
				document.getElementsByTagName('H5')[i].style.display="block";

				if(e.path[0].innerHTML =="Q&amp;A"){
					document.getElementsByTagName('LI')[i+2].style.display="none";
				}else{document.getElementsByTagName('LI')[i+2].style.display="block";}

			}else{
				document.getElementsByTagName('H5')[i].style.display="none";
				document.getElementsByTagName('LI')[i+2].style.display="none";
			}
		}
		confirmAction = false;
	}
	})
}













