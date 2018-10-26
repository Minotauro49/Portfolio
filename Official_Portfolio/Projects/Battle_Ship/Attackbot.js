
var EnemyXpos = [];
var EnemyYpos = [];
var RandSpd = [];


//Spawning
var Wave = true;
var EnmNum = -1;
var CntT = 0;
var CntL = 0;
var Check = 0;
var W2ESpd = [];
var EnmType = []; 
var EnmyRmv = [];
var CheckSpd = 1;
	CheckN = 0;

setInterval(function ATTACKBOT(){ if (CheckN == true) {


if (Wave == true) {EnmNum++;
    EnemyXpos[EnmNum] = Math.floor(Math.random()*620);
    EnemyYpos[EnmNum] = -100;

var SizeE = Math.floor(Math.random()*100)+40;
var Sec = Math.floor(Math.random()*10)+3;
	CheckSpd = Math.floor(Math.random()*5);
var Combine = ""+CheckSpd+"."+Sec+"";
var Num = Number(Combine);
	W2ESpd[EnmNum] = Num+1;
    RandSpd[EnmNum] = Num;
    EnmType[EnmNum] = Math.floor(Math.random()*EnmNum);
var Size = document.getElementById('Enemy'+EnmNum+'');
	Size.style.cssText="width: "+SizeE+"px;height: "+SizeE+"px;";
if (EnmNum >= 19) {Wave = false}}
	     


for (var E = 0; E < EnmNum; E++) {
     var EnemyBot = document.getElementById('Enemy'+E+'');
 if(E != EnmyRmv[E]){	
 	
 //-----Enemy Moves1
if (EnmType[E] <= 5) {
if (EnemyXpos[E] >= Xpos) {EnemyXpos[E] = EnemyXpos[E]-=RandSpd[E];}else{
	EnemyXpos[E] = EnemyXpos[E]+=RandSpd[E];}
if (EnemyYpos[E] >= Ypos) {EnemyYpos[E] = EnemyYpos[E]-=RandSpd[E];}else{
	EnemyYpos[E] = EnemyYpos[E]+=RandSpd[E];}}

//-----Enemy Moves2
if (EnmType[E] > 5) {
if (Check == 0){
if (EnemyYpos[E] > (Ypos + 30) || EnemyYpos[E] < (Ypos - 30)){
	CntT = W2ESpd[E];CntL = 0;}else{CntT = 0;CntL = W2ESpd[E];}}
	
if (Check == 1) {
if (EnemyXpos[E] > (Xpos + 30) || EnemyXpos[E] < (Xpos - 30)){
	CntT = 0;CntL = W2ESpd[E];}else{CntT = W2ESpd[E];CntL = 0;}}

if (EnemyYpos[E] >= Ypos) {EnemyYpos[E] = EnemyYpos[E]-=CntT;}else{
	EnemyYpos[E] = EnemyYpos[E]+=CntT;}
if (EnemyXpos[E] >= Xpos) {EnemyXpos[E] = EnemyXpos[E]-=CntL;}else{
	EnemyXpos[E] = EnemyXpos[E]+=CntL;}}}

	EnemyBot.style.top=EnemyYpos[E]+"px";
	EnemyBot.style.left=EnemyXpos[E]+"px";

 }}},20);


setInterval(function(){
for (var Rm = 0; Rm < EnmyRmv.length; Rm++) {EnmyRmv[Rm] = null;}
		 Check = Math.floor(Math.random()*2);
for (var X = 0; X < 19; X++) {EnmType[X] = Math.floor(Math.random()*19);}},2000);