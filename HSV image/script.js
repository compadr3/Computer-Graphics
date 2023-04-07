function preload() {
img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
  img_h = createImage(256,256);
  img_s = createImage(256,256);
  img_v = createImage(256,256);
}

function setup() {
  createCanvas(512,512);
  img.resize(256,256);

  img.loadPixels();
  img_h.loadPixels();
  img_s.loadPixels();
  img_v.loadPixels();
  
  for(x=0;x<img.width;x++){
    for(y=0;y<img.height;y++){
      pos=4*(y*img.width+x);
      
      
      let r=img.pixels[pos]/255;
      let g=img.pixels[pos+1]/255;
      let b=img.pixels[pos+2]/255;
      
      cmax = Math.max(r,g,b);
      cmin = Math.min(r,g,b);
      
      let l = (cmax + cmin)/2;
      let c = cmax-cmin;
      //x=(pos/4)%256;//indeks kolumny   wewnątrz wiersza
      //y=(pos/4)/256;//indeks wiersza
      let h = 0;
      let v = cmax;
      
      if(c==0){
        h=0;
      } else if(v==r){
        h=((g-b)/c)%6;
      } else if(v==g){
        h=((b-r)/c)+2;
      } else { /*v==b*/
        h=((r-g)/c)+4;
      }
      h/=6;
      if(h<0){
        h+=1;
      }
      img_v.set(x,y,255*l);
      img_s.set(x,y,(c/(1-Math.abs(2*l-1)))*255);
      img_h.set(x,y,h*255);
  
      //img.pixels[pos+3] = 255;
      img_h.pixels[pos + 3] = 255;
      img_s.pixels[pos + 3] = 255;
      img_v.pixels[pos + 3] = 255;
    }
  }
  
  
  img_h.updatePixels();
  img_s.updatePixels();
  img_v.updatePixels();
  
}

function draw() {
  console.log(10);
  image(img_h, 0, 0);
  image(img_s, 256, 0);
  image(img_v, 0, 256);

  image(img, 256, 256);
}
