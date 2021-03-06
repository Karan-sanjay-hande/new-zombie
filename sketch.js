var bg, player,chest,enemy, 
gameState="intro";
score=0;
var bgimg, playerimg, chest_img, enemyimg;
zArray=[];

function preload(){
     chest_img=loadImage("images/chest2.png");
     chest_open_img=loadImage("images/chest2open.png");
     player_img=loadImage("images/normal.gif");
     player_gun_img=loadImage("images/player.gif")
     player_near_img=loadImage("images/near.gif")
     heart_img=loadImage("images/heart.png");   
     zombie_img=loadImage("images/zombie.gif");   
     daybg= loadImage("images/daybg3.jpg");
     bg1img= loadImage("images/loading screen.jpg");   
}
function setup()
{
    createCanvas(1500,700);
    player = createSprite(1200,600);
    player.addImage(player_img);
    player.scale=0.5;

   zombies=createSprite(800,600);
   zombies.addImage(zombie_img);
   zombies.scale=0.5;
   zombies.VelocityX=+1;

   chest=createSprite(1400,650);
   chest.addImage(chest_img);
   chest.scale=0.5;
   
   life1=createSprite(1200,160);
  // life2=createSprite(1240,160);
  // life3=createSprite(1280,160);
   life1.addImage(heart_img);
  // life2.addImage(heart_img);
  // life3.addImage(heart_img);
   life1.scale=0.2;
  // life2.scale=0.2;
  // life3.scale=0.2;

}

function draw()
{
    background(daybg);
    if(gameState==="intro")
    {
        background(bg1img);
        push()
       textSize(32);
       fill("purple")
       strokeWeight(3);
       stroke("purple")
       text("ZOMBIE SHOOTER",600,50);
       pop()
       textSize(25);
       fill("blue");
       strokeWeight(5);
       stroke("black")
       text("It is survival game , play and survive  \nA Doctor created a VIRUS and spread it into the  air \na person named jack was unaffected of the Virus \nNow its your job to help jack by finding a vacine for the virus \nyou will find the vacine at 1000 points!! \n 1 zombie = 10 POINTS , controls usearrowkey  ",250,200); 

       textSize(30);
       fill("red");
       text("Press space to start the game!!", 500,165);        

     

    }
    if(gameState==="play")
    {
        background(daybg) 
        drawSprites();  
        fill("blue")
        textSize(25)
        text("score :" + score,1200,90);

      if(player.isTouching(chest))
      {
          chest.addImage(chest_open_img);    
          life4=createSprite(1400,600);
          life4.addImage(heart_img);  
          life4.scale=0.1;
          
          life5=createSprite(1320,160);
          life5.addImage(heart_img);
          life5.scale=0.2;
          life4.destroy();

          player.addImage(player_gun_img)
      }

      if(zombies.isTouching(player))
      {
        player.addImage(player_near_img)
        life1.remove();
        life5.remove();

        gameState="over";
      }
      
     //if(onmouseover(zombies))
     //   {
     //     zombies.remove();
     //   }

   
    }
    if(gameState=== "over")
    {
       textSize(30)
       fill("blue");
       stroke("white");
       text("     GAME OVER",570,400);
       text("PRESS SPACE KEY TO RESTART",500,450)

       
    }

    drawSprites();
}
function createZombies() {
    var z= createSprites(100,100,20,20);
    varz.addImage(zombie_img);

}


function keyPressed() 
{
    if(keyCode === 32 && gameState==="intro")
     {
       gameState="play"
     }

    if(keyCode === RIGHT_ARROW && gameState==="play")
     {
        player.x+=5;

     }
   
     if(keyCode === LEFT_ARROW && gameState==="play")
     {
        player.x-=5;

     }
     
     if(keyCode === 32 && gameState === "over")
     {
        gameState="intro";
     }  

     
}
