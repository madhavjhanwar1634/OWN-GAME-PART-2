var player,playerimg
var bg1,bg
var invisibleGround
var block

function preload(){
    playerimg=loadAnimation("PLAYER2.png")
    bg1=loadImage("bg.png")

}
function setup(){
    canvas=createCanvas(1200,500)

    invisibleGround = createSprite(600,445,1300,20)
    invisibleGround.visible = true
  //  invisibleGround.x= invisibleGround.width/2
    invisibleGround.velocityX=5
    

    player=createSprite(100,420,50,50)
    player.addAnimation("moving",playerimg)
    player.scale=0.05

    block=createSprite(200,420,10,50)
    block.shapeColor="black"
}
function draw(){
    background(bg1)
    if(invisibleGround.x>=600)
    {
        invisibleGround.x=500
    }
    player.collide(invisibleGround)
    if(keyDown("UP_ARROW")&& player.y>=200){
        player.y-=5
    }
    drawSprites()
}