var imgA;
var imgB;

function setup() {
  createCanvas(512,512);
  background(255);
  imgA = createImage(512,512);
  imgB = createImage(512,512);
  imgA.loadPixels();
  imgB.loadPixels();
  var d = pixelDensity();
  for(var i=0; i<512*512*4*d; i+=4) {
    imgA.pixels[i]=240;
    imgA.pixels[i+1]=250;
    imgA.pixels[i+2]=240;
    imgA.pixels[i+3]=255;
    imgB.pixels[i]=240;
    imgB.pixels[i+1]=240;
    imgB.pixels[i+2]=250;
    imgB.pixels[i+3]=255;
  }
  imgA.updatePixels();
  imgB.updatePixels();
}

function mouseDragged(){
  var vec = makeVector(mouseX,mouseY);
  //var multilpiedMatrix = multiplyMatrix([[1,0,0],[0,1,0],[0,0,1]],vec);
  //var multilpiedMatrix = multiplyMatrix(createScalingMatrix(2,2),vec);
  //var multilpiedMatrix = multiplyMatrix(createShearMatrix(1,4),vec);
  var multipliedMatrix = multiplyMatrix(createRotationMatrix(45),createRotationMatrix(45));
  
  var changedVector = multiplyMatrixByVector(multipliedMatrix,vec);
  
  drawVector(imgA, changedVector);
}

function multiplyMatrix(matrix,matrixTwo){
  var matrixOut = [[0,0,0],[0,0,0],[0,0,0]];
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrixTwo[i].length; j++){
      for(let k = 0; k < matrixTwo[i].length; k++){
        matrixOut[i][j] += matrix[i][k]*matrixTwo[k][j];
        console.log(matrix[i][k] + "*" + matrixTwo[k][j]);
      }
    }
    console.log("next");
  }
  
  return matrixOut;
}

function multiplyMatrixByVector(matrix,vector){
  var vec = [0,0,0];
  for(let j = 0; j < vector.length; j++){
    for(let i = 0; i < matrix[j].length; i++){
      vec[j] += vector[i]*matrix[j][i];
    }
  }
  return vec;
}

function makeVector(x, y){
  var vector = [x,y,1];
  return vector;
}

function createScalingMatrix(sx,sy){
  var matrix = [[sx, 0, 0],[0, sy, 0],[0, 0, 1]];
  return matrix;
}

function createRotationMatrix(degrees){
  var radians = (degrees/180)*Math.PI;
  var matrix = [[cos(radians),(-1)*sin(radians), 0],[sin(radians), cos(radians), 0],[0, 0, 1]];
  return matrix;
}

function createShearMatrix(shx,shy){
  var matrix = [[1, shx, 0],[shy, 1, 0],[0, 0, 1]];
  return matrix;
}

function drawVector(image, vec){
  image.set(vec[0], vec[1],color('black'));
  image.updatePixels();
}

function draw() {
  if (!keyIsDown(32)) {
    
    image(imgA,0,0);
    text('Image A',10,20);
  } else {
    image(imgB,0,0);
    text('Image B',10,20);
  }
}