
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivaltime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(50,350,10,30)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,380,800,20)
  ground.velocityX=-2
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
}


function draw() {
   
  background('cyan')
  
  survivaltime=Math.ceil(frameCount/frameRate())
  
  spawnfood()
  
  spawnobstacle()
  
  if(ground.x<0){
    ground.x=200
  }
  
  if(keyDown('space')){
    monkey.velocityY=-6
  }
  
  monkey.velocityY=monkey.velocityY+0.5
  
  monkey.collide(ground)
  drawSprites()
  textSize(17)
  fill('black')
  text("Survival time- "+ survivaltime,160,30)
  
}

function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(390,200,10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-2
    banana.y=Math.round(random(120,200))
    banana.lifetime=200
    FoodGroup.add(banana)
  }
}

function spawnobstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(390,350,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-2
    obstacle.lifetime=200
    obstacleGroup.add(obstacle)
  }
}


