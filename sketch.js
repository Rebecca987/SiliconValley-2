var bgwait, bgwaitimg;
var bglevel1, bglevel1img;
var bginfo, bginfoimg;

var leftArrow, leftArrowImg, rightArrow, rightArrowLeft;
var play, playImg, story, storyImg;
var setting, settingImg, reload, reloadImg;
var info, infoImg;
var level,levelimg;

var gamestate="wait"


function preload(){
    bgwaitimg=loadImage("wait.gif");
    leftArrowImg=loadImage("LeftArrow.jpg");
    rightArrowImg=loadImage("RightArrow.jpg");
    playImg=loadImage("Play.jpg");
    settingImg=loadImage("Setting.jpg");
    storyImg=loadImage("Story.jpg");
    infoButton=loadImage("InfoButton.jpg")
    levelimg=loadImage("level1.gif")
}


function setup(){
createCanvas(windowWidth,windowHeight)

    bgwait =createSprite(1,1,1,1)
    bglevel1 =createSprite(1,1,1,1)
   // bgwait.visible=false
   // bglevel1.visible=false
 
    leftArrow =createSprite(50,50,100,100);
    leftArrow.addImage(leftArrowImg)

    rightArrow =createSprite(windowWidth-100,120,100,100);
    rightArrow.addImage(rightArrowImg)

    play =createSprite(windowWidth/2,windowHeight-windowHeight/6,100,100);
    play.addImage(playImg)
    play.scale=2.04;

    story =createSprite(windowWidth/2,windowHeight-windowHeight/3,100,100);
    story.addImage(storyImg)
    story.scale=2;

    setting =createSprite(50,120,100,100);
    setting.addImage(settingImg)

    info = createSprite(windowWidth-100,50,100,100);
    info.addImage(infoButton)
    info.scale=0.7
    
}

function draw(){
   background(bgwaitimg) 


    if(gamestate==="wait"){
        bgwait.visible=true
 
        leftArrow.visible=false
    }
    if(mousePressedOver(story) ){
       
        gamestate="story"
        bgwait.visible=true
        text("You have sunk into the deep sea and lost your crew! Collect fishes but avoid dangerous creatures and objects")
        leftArrow.visible=true

        //textSize()
        //text("You have sunk into the deep sea! Collect fishes but avoid dangerous creatures and objects",)


    }


    if(gamestate==="story"){
        bgwait.visible=true
        //background(0)
        textSize(30)
        fill("red")
        text("You have sunk into the deep sea! Collect fishes but avoid dangerous creatures and objects", 100,150)
        //text("avoid dangerous creatures and objects",100,200) 
       // play.visible=false
       
    }

    if (mousePressedOver(leftArrow)){
        leftArrow.visible=true
gamestate="back"
    }

    if(gamestate==="back"){
        background("cyan")
    }


    if (mousePressedOver(rightArrow)){
        leftArrow.visible=true
        gamestate="forward"
            }

            if(gamestate==="forward"){
                background("green")
            }
        


    if(mousePressedOver(play)){
        background("yellow")
        bgwait.visible=false
        leftArrow.visible=true
        gamestate="play"
    }
    if(gamestate==="play"){
        background("yellow")
        rightArrow.visible=false
    }

    if(mousePressedOver(setting)){
        background("magenta")
        bgwait.visible=false
        leftArrow.visible=true
        gamestate="setting"
    }

    if(gamestate==="setting"){
        background("magenta")
    }
    if(mousePressedOver(info)){
        background("red")
        bgwait.visible=false
        leftArrow.visible=true
        gamestate="info"
    }

    if(gamestate==="info"){
        background("red")
    }

    textSize(50)
    fill("white")
    text("Scuba Diver", windowWidth/2-150,100)

    drawSprites();

}