var bg,garden;
var cat,mouse;
var catImg1,mouseImg1;

function preload() {
    //load the images here
  bg=loadImage('images/garden.png')
  catImg1=loadAnimation('images/cat1.png')
  catImg2=loadAnimation('images/cat2.png','images/cat3.png')
 mouseImg1=loadAnimation('images/mouse1.png')
 mouseImg2=loadAnimation('images/mouse2.png','images/mouse3.png')
 mouseImg3=loadAnimation('images/mouse4.png')
 catImg3=loadAnimation('images/cat4.png')
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,50,50)
    garden.addImage(bg)
    garden.scale=1

    //create tom and jerry sprites here
    cat =createSprite(800,600,20,20)
    cat.scale=0.2
    cat.addAnimation('sleep',catImg1)


   // cat.addAnimation(catImg2)
   mouse=createSprite(200,600,30,30)
   mouse.addAnimation('stand',mouseImg1)
  
   mouse.scale=0.2
//mouse.addAnimation(mouseImg1)
}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width-mouse.width ){
  cat.velocityX=0
  mouse.addAnimation('happy',mouseImg3)
  mouse.changeAnimation('happy')
  mouse.velocityX=3
  mouse.depth=cat.depth
  mouse.depth=mouse.depth-1
if(mouse.x>600){
  mouse.setVelocity(0.5,-0.5)
}
if(mouse.y<350){
  mouse.setVelocity(0,0)
}

  cat.addAnimation('happy',catImg3)
  cat.changeAnimation('happy')
}


    drawSprites();
}


function keyPressed(){
  
  //For moving and changing animation write code here
  if(keyDown('a')){

   //mouse tease
   mouse.addAnimation('teasing',mouseImg2)
  mouse.changeAnimation('teasing')
  mouse.frameDelay=10;

  //cat walk
  cat.addAnimation('walk',catImg2)
  cat.changeAnimation('walk')
  cat.scale=0.3
  cat.velocityX=-3
  cat.frameDelay=10;
  }

}