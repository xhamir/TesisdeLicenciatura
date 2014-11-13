var x = document.getElementById("x");
var y = document.getElementById("y");
//var z = document.getElementById("z");
var dedos = document.getElementById("dedos");


// Toma como parametros: host,port,enableGestures,frameEventName
var controller = new Leap.Controller();

controller.on('deviceConnected', function() {
  console.log("Se conecto un leap motion");
});

controller.on('deviceDisconnected', function() {
  console.log("Se desconecto un leap motion");
});

 controller.on('frame', function(frame){
 	lol = frame.fingers.length;
 	for( var i=0; i < frame.hands.length; i++ ){

    var hand = frame.hands[i];

  }
 	var handPos = movimiento( frame , hand.palmPosition );
 	dedos.innerHTML = "dedos: "+lol;
 });

 function movimiento(frame, leapPos){
 	//console.log("hola");
 	var iBox = frame.interactionBox;
 	var top = iBox.center[1] + iBox.size[1]/2;
  var left = iBox.center[0] - iBox.size[0]/2;

  var late = leapPos[0] - left;
  var hori = leapPos[1] - top;
  	
  late /= iBox.size[0];
  hori /= iBox.size[1];

  x.innerHTML = "x: "+late;
  y.innerHTML = "y: "+hori;
   /* var canvas = document.getElementById("canvas");
    
      
      var ctx = canvas.getContext("2d");
     
      
      ctx.strokeStyle = "blue";

      ctx.beginPath();
      
      ctx.moveTo(late+100,hori+100);
     

      ctx.fill();*/
     
    
     
  

 }
onload=movimiento;

controller.connect();
