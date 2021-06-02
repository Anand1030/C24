var bg,bgImg;
var cat,catImg,catRun;
var mouse,mouseImg,mouseTease;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg=loadAnimation("images/cat1.png");
catRun=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg=loadAnimation("images/mouse1.png");
mouseTease=loadAnimation("images/mouse2.png","images/mouse3.png");
catHappy=loadAnimation("images/cat4.png");
mouseHappy=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400);
    bg.addImage(bgImg);
    cat=createSprite(850,650);
    cat.addAnimation("normalC",catImg);
    cat.scale=0.2;
    mouse=createSprite(100,650);
    mouse.addAnimation("normalM",mouseImg);
    mouse.scale=0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    d=dist(mouse.x,mouse.y,cat.x,cat.y);
    console.log(d);
    if(d===60){
        mouse.addAnimation("mouseHappy",mouseHappy);
        mouse.changeAnimation("mouseHappy");
        cat.addAnimation("catHappy",catHappy);
        cat.changeAnimation("catHappy");
        cat.velocityX=0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("MTeasing",mouseTease);
        mouse.changeAnimation("MTeasing");
        mouse.frameDelay=25;
        cat.addAnimation("catRunning",catRun);
        cat.changeAnimation("catRunning")
        cat.velocityX=-5;
    }

}
