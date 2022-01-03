function preload(){
 room =loadImage("assets/room1.jpg")
 toyboximg = loadImage("assets/toy_box.png")
 treashcanimg = loadImage("assets/trash_can.png")
 bookimg = loadImage("assets/book.png")
 ballimg = loadImage("assets/ball.png")
 bagimg = loadImage("assets/bag.png")
 carimg = loadImage("assets/car.png")
 taddyimg = loadImage("assets/taddy_bair.png")
 garbageimg = loadImage("assets/garbage.png")
 boyimg =loadAnimation("assets/boy_w1.png","assets/boy_w2.png","assets/boy_w3.png","assets/boy_w4.png")
 boystop = loadAnimation("assets/boy_s.png")

 gameover = loadSound("gameOver.wav")
 win =loadSound("win_S.mp3")
 bg_s=loadSound("backgroundS.mp3")
}

function setup() {
 createCanvas(1200,700)

 toybox = createSprite(1050,500);
 toybox.addImage("toybox",toyboximg);
 toybox.scale = 0.6;


 treashcan = createSprite(100,500);
 treashcan.addImage("treashcan",treashcanimg);
 treashcan.scale = 0.6;

 book = createSprite(180,300);
 book.addImage("book",bookimg);
 book.scale = 0.8;

 ball = createSprite(700,600);
 ball.addImage("ball",ballimg);
 ball.scale =0.3;


 bag = createSprite(700,350);
 bag.addImage("bag",bagimg);
 bag.scale =0.3;

 car = createSprite(400,630);
 car.addImage("car",carimg);
 car.scale =0.5;

 bair = createSprite(500,480);
 bair.addImage("bair",taddyimg);
 bair.scale = 0.3;

 gb = createSprite(700,480);
 gb.addImage("gb",garbageimg);
 gb.scale = 0.3;

 gb2 = createSprite(350,550);
 gb2.addImage("gb2",garbageimg);
 gb2.scale = 0.3;

 gb3 = createSprite(850,650);
 gb3.addImage("gb3",garbageimg);
 gb3.scale = 0.3;

 gb4 = createSprite(100,630);
 gb4.addImage("gb4",garbageimg);
 gb4.scale = 0.4;

 boy = createSprite(300,500);
 boy.addAnimation("boy_s",boystop);
 boy.addAnimation("boy_w",boyimg);
 boy.changeAnimation("boy_s")

 boy.scale = 0.6;
 //boy.debug = true
 boy.setCollider("circle",6,130,40)


 //car.debug = true
 car.setCollider("circle",0,0,40)

 //ball.debug = true
 ball.setCollider("circle",0,0,160)

 //book.debug = true
 book.setCollider("circle",55,100,100)

 //bag.debug = true
 bag.setCollider("circle",-55,88,250)

 //bair.debug = true
 bair.setCollider("circle",0,0,90)

 //gb2.debug = true
 gb.setCollider("rectangle",0,0,500,40)
 gb2.setCollider("rectangle",0,0,300,20)
 gb3.setCollider("rectangle",0,0,500,40)
 gb4.setCollider("rectangle",0,0,500,40)

}


function draw() {
 
 background(room)

 //bg_s.play()
 //bg_s.setVolume(0.1)

 
 if (ball.isTouching(boy)) {
   ball.destroy();

   textSize(50)
   text("wow!",600,350)
 }

 if (car.isTouching(boy)) {
   car.destroy();

   textSize(50)
   text("good",600,350)
 }

 if (bair.isTouching(boy)) {
   bair.destroy();

   textSize(50)
   text(":)",600,350)
 }

 if (book.isTouching(boy)) {
   book.destroy();

   textSize(50)
   text("...",600,350)
 }

 if (bag.isTouching(boy)) {
   bag.destroy();

   
   textSize(50)
   text("good",600,350) 
 }


if (keyDown(RIGHT_ARROW)) {
    boy.changeAnimation("boy_w")
    boy.x = boy.x+2
 }

 if (keyDown(LEFT_ARROW)) {
   boy.changeAnimation("boy_w")
    boy.x = boy.x-2
 }

 if (keyDown(UP_ARROW)) {
   boy.changeAnimation("boy_w")
    boy.y = boy.y-2
 }

 if (keyDown(DOWN_ARROW)) {
   boy.changeAnimation("boy_w")
    boy.y = boy.y+2
 }

 if (keyDown("SPACE")) {
   boy.changeAnimation("boy_s")
 }

 drawSprites()

 //gb

if (gb.isTouching(boy)) {
  boy.destroy();

  gameover.play()
  textSize(50)
  text("gameover",600,350)
}
if (gb2.isTouching(boy)) {
  boy.destroy();

  gameover.play()
  textSize(50)
  text("gameover",600,350)
}
if (gb3.isTouching(boy)) {
  boy.destroy();

  gameover.play()
  textSize(50)
  text("gameover",600,350)
}
if (gb4.isTouching(boy)) {
  boy.destroy();

  gameover.play()
  textSize(50)
  text("gameover",600,350)
}

}

