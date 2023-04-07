let imageSize = 256;
const array = new Array(40, 100, 1, 5, 25, 10);
var histogram = new Array(imageSize);

function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
  img_h = createImage(imageSize,imageSize);
  img_s = createImage(imageSize,imageSize);
  img_v = createImage(imageSize,imageSize);
}

function setup() {

  
  for(x=0;x<histogram.length-1;x++){
    histogram[x] = random(0,256);    
  }
  
  createCanvas(imageSize,imageSize);
  img.filter('gray');

  //img.loadPixels();
  //for(x=0;x<img.width;x++){
  //  for(y=0;y<img.height;y++){
  //    pos=4*(y*img.width+x);
  //    
  //    histogram[pos] += 1;
  //    
  //  }
  //}
  //img.updatePixels();
  
}


function draw() {
  background('white');
  stroke('black');
  //line(nr slupka,wys. slupka,nr slupka,256,0,0);
  //line(80,10,80,256,0,0);
  
  for(x=0;x<histogram.length-1;x++){
    
      line(x,imageSize - histogram[x],x,256,0,0);
      //line(x,histogram[x],x,256,0,0);
    
  }
  
  
}
