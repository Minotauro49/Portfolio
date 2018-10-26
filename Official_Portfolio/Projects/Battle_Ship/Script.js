var KEY = [];
var Xpos = 300;
var Ypos = 500;
var Spd = 5;
var NumId = 1;

var Tran1 = 0;
var Tran2 = -600;
var Tran3 = -1200;
var Transpd = 1;

// Shooting
var Delay = 0;
var BulletID = 0;
var GetBX = 0;
var BulposX = [];
var TransY = [];
var RmvB = [];
var Rcnt = -1;

//--- Explode
var ExposY = 0;
var ExposX = 0;
var Confpos = false;

//----Collistion
var Clarify  = false;
var Hearts = 5;
var CheckN = false;
var Stop = true;
var sec = 0;

//[[[[[[[[[[[[ Start game ]]]]]]]]]]]]]]] 
function Start(){
	gameStart();
	Explosion();
	document.getElementById('StartCont').style.transform = "scale(0,0)";
	setTimeout(function(){CheckN = null;},3000); // delay enemy	
	var Cont = document.getElementById('Cont');
}

//-----------Cnt
setInterval(function(){if(Stop){sec++}},1000);

function gameStart(){
//----Cloning Bullets
for (var i = 0; i < 20; i++) {
	 var GetIMG = document.createElement('IMG');
	 	 GetIMG.src="Img/Bull.png";
	 var Clone = GetIMG.cloneNode(true);
	 	 Clone.setAttribute('id',i);
	 	 Cont.appendChild(Clone);}

var playFuntion = setInterval(function Update(){ 
var BckW = document.body.offsetWidth;
var Player = document.getElementById('Player');

//---- MOVEMENT
if (KEY[87]||KEY[38]) {Ypos-=Spd}
if (KEY[83]||KEY[40]) {Ypos+=Spd}
if (KEY[68]||KEY[39]) {Xpos+=Spd}
if (KEY[65]||KEY[37]) {Xpos-=Spd}
var Player = document.getElementById('player');
	Player.style.cssText="top:"+Ypos+"px;left:"+Xpos+"px;";

//----Shooting
if (KEY[32]) {Delay++;
if (Delay > 5) {Delay = 0;GetBX++;BulletID++;
if (GetBX >= 2) {GetBX = 0}}}
	TransY[BulletID] = Ypos+25;
	GetBX == 1?BulposX[BulletID] = Xpos+15:BulposX[BulletID] = Xpos+75;

//	Makes / stops array from counting
for (var i = 0; i < 20; i++) {
if (TransY[RmvB[i]] != TransY[i]) {TransY[i] = TransY[i]-=10;}
if (TransY[i] < -20) {RmvB[i] = i;
					  TransY[i] = -20;
					  BulposX[i] = -20;}

if (TransY[i] > -20) {RmvB[i] = null;}
if (BulletID > 20) {BulletID = 0;StopClone=false;}
    document.getElementById(''+i+'').style.cssText="position:absolute;"+
    											   "left:"+(-150)+"px;"+
    											   "width: 10px;"+
    											   "height: 15px;"+
    											   "margin:1px;"+
    											   "left:"+(BulposX[i])+"px;"+
  												   "top:"+(TransY[i])+"px;";
Clarify  = true;
if (!Stop) {clearInterval(playFuntion);}// stops this function when game is over
}},20)}




//------------// Collistion System //-----------------//
var Collide = "IMG";
var IDlength = 0;
var length = 0;
var ColstoreMT = [];
var ColstoremT = [];
var ColstoreML = [];
var ColstoremL = [];


// Col rules 
var CntG = 22;
var CntL = 2;


setInterval(function(){if (Clarify == true) {
//--- Search Number of Col obj on screen
for (var GID = 0; GID < length+1; GID++) {length++;
if (length > IDlength) {IDlength = length-1}
if (!document.getElementsByTagName(''+Collide+'')[GID]) {length = 0}}

//---------------------//Player col
if (Xpos <= -6) {Xpos+=Spd}
if (Xpos >= 630){Xpos-=Spd}
if (Ypos >= 520){Ypos-=Spd}
if (Ypos <= 0) {Ypos+=Spd;}
Confpos = false;
//-----//Getting object size and position
for (var G = 2; G < IDlength; G++) {
	 var Elm = document.getElementsByTagName(''+Collide+'')[G];
	 var Styl = window.getComputedStyle(Elm,null);
	 var Cwdth = parseInt(Styl.width);
	 var Chght = parseInt(Styl.height);
	 var Prect = Elm.getBoundingClientRect();
	 var Clft = Prect.left;
	 var Ctp = Prect.top;

//-----//Store values 
		ColstoreMT[G] = Chght+Ctp;
		ColstoremT[G] = Ctp;
		ColstoreML[G] = Cwdth+Clft;
		ColstoremL[G] = Clft;

//-----//Comparison System
for (var i = 0; i < ColstoreMT.length; i++){
	 if (i != G) {
	 if (ColstoreMT[G]>=ColstoremT[i] && ColstoremT[G]<=ColstoreMT[i]&&
	 	 ColstoreML[G]>=ColstoremL[i] && ColstoremL[G]<=ColstoreML[i]){
//-----//Collistion rules 1


}}}}


//-----//Collistion rules 2 / players lives
for (var En = 2; En < 21; En++) {
for (var Pl = 22; Pl < 42; Pl++) {
if (ColstoreMT[Pl]>=ColstoremT[En] && ColstoremT[Pl]<=ColstoreMT[En]&&
	 ColstoreML[Pl]>=ColstoremL[En] && ColstoremL[Pl]<=ColstoreML[En]){
var SearchP = document.getElementsByTagName('IMG')[Pl].id;
if (SearchP == "player") {Hearts--;

if (Hearts <= 1) {
setTimeout(function(){

document.getElementById('StartCont').style.transform = "scale(1,1)";
var DIs = document.getElementById('Start');
	document.getElementById('Sec').innerHTML="You lasted: [--| "+sec+" sec |--]";
	DIs.style.background="red";
	DIs.innerHTML="GAME OVER!";
	CheckN = false;
	Stop = false;
	return;
},300);
setTimeout(function(){location.reload();},5000);}

var Heart = document.getElementById('heart'+Hearts+'');
	Heart.style.cssText="animation: HeartAn 1s linear;transform: scale(0,0);";

}

	TransY[(Pl-23)] = -20;
	BulposX[(Pl-23)] = -20;
	EnmyRmv[En-2] = (En-2);
	EnemyYpos[En-2] = -100;
	EnemyXpos[En-2] = Math.floor(Math.random()*620);
	ExposY = ColstoremT[En];
	ExposX = ColstoremL[En]-300;
	Confpos = true;

}}}}},20);








window.onkeydown = function(e){KEY[e.keyCode] = true;}
window.onkeyup = function(e){
	KEY[e.keyCode] = false;

	if (CheckN == null) {
		CheckN = true;
		Stop = true;		
	}
}






