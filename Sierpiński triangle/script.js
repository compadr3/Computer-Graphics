var a = {x:550,y:400};
var b = {x:100,y:400};
var c = {x:300,y:100};


function setup() {
  createCanvas(800,600);
  noLoop();
  //frameRate(25);
}
function draw() {
    
  background(0);
  stroke('white');
  point(a.x,a.y);
  point(b.x,b.y);
  point(c.x,c.y);
  var d = {x:a.x,y:a.y};
  
  for(x = 0; x < 30000; x++){
    var randNumber = floor(random(0,3));
    switch(randNumber){
      case 0:
        d.x = (d.x + a.x)/2;
        d.y = (d.y + a.y)/2;
        point(d.x,d.y);
        break;
      case 1:
        d.x = (d.x + b.x)/2;
        d.y = (d.y + b.y)/2;
        point(d.x,d.y);
        break;
      default :
        d.x = (d.x + c.x)/2;
        d.y = (d.y + c.y)/2;
        point(d.x,d.y);
        break;
    }
  }
  //noprotect
  updatePixels();
}
