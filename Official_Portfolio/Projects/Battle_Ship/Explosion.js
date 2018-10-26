
var Colour = ["rgb(204,158,0)","rgb(251,255,66)","rgb(234,182,0)","rgb(215,189,9)"];
var SpanId = -1;
var IDcnt = -1;
var FraqCnt = -21;
var Conform = false;
var StopCnt = true;

function Explosion(){
var Explode = setInterval(function(){
if (!Stop) {clearInterval(Explode)} // stops this funtion

var Container = document.getElementById('Cont');
if (Confpos == true) {SpanId++; FraqCnt+=21;Conform = true; 
if (SpanId > 20) {SpanId = -1;FraqCnt = -21;StopCnt = false;IDcnt = -1}
if (StopCnt == true) {

var Span = document.createElement('SPAN');
var ExploClone = Span.cloneNode(true); 
    ExploClone.setAttribute('id',"Cont"+SpanId);
    Container.appendChild(ExploClone);}
    document.getElementById('Cont'+SpanId+'').style.cssText="position: absolute;"+
                                                            "left: "+ExposX+"px;"+
                                                            "top: "+ExposY+"px;"+
                                                            "width: 50px;"+
                                                            "height: 50px;"+
                                                            "padding: 50px;"+
                                                            "z-index: 1;";
for (var i = 0; i < 21; i++) {
var Crand = Math.floor(Math.random()*3);
var Time = Math.floor(Math.random()*9);
if (StopCnt == true) {
var Fraq = document.createElement('SPAN');
var Explo = Fraq.cloneNode(true); 
    Explo.setAttribute('id',"Fraq"+(i+FraqCnt));
    document.getElementById('Cont'+SpanId+'').appendChild(Explo);}
    document.getElementById('Fraq'+(i+FraqCnt)+'').style.cssText="position: absolute;"+
                                                                 "width:30px;"+
                                                                 "height:30px;"+
                                                                 "opacity: 0;"+
                                                                 "border-radius:5px;"+
                                                                 "background:"+Colour[Crand]+";"+
                                                                 "animation:Zoom"+i+" 0."+Time+"s linear;";}}
},20);}

setInterval(function(){if (Conform == true) {
if (IDcnt >= FraqCnt+20) {IDcnt = FraqCnt};
    IDcnt++;
var GetEx = document.getElementById('Fraq'+IDcnt+'');
            GetEx.addEventListener('webkitAnimationEnd',function(){
            GetEx.style.webkitAnimationName="";
});}},1);

