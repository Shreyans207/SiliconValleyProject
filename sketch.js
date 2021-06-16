//Creating variables.
//Vars. for Bg.
var WaterBg , SharkBg , cave , dolphin, dolphins , plant1 , plant2 , plant3 , crab1 , crab2 , fishGroup , bubbleGroup , ball ;
var background1_img , background2_img , cave_img , dolphin_img , dolphins_img , plant1_img , plant2_img , plant3_img , crab1_img , crab2_img , fish1_img , fish2_img , fish3_img , fish4_img , bubbles_img , ball_img ;

//Vars. for Tortoise.
var tortoise, tortoiseAngry , tortoiseScared , swagT , Fish ;
var tortoise_img , angryT_img , tortoiseScared_img , swagT_img , Fish_img ;

//Var. for Points
var score = 0 , Score , score0 , score1 , score2 , score3 , score4 , score5 , score6 , score7 , score8 , score9 , score10;
var Score_img , score0_img , score1_img , score2_img , score3_img , score4_img , score5_img , score6_img , score7_img , score8_img , score9_img ,score10_img ;

var title1 , title2 , title3 , title4 , title5 ;
var title1_img , title2_img , title3_img , title4_img , title5_img ;

//Locks
var lock_img , lock2 , lock3 , lock4 , lock5;

//Vars. for Aquatic Animals
var greetShark  , sharksGroup1 , sharksGroup2 , sharksGroup3 , shark1 , pointsGroup1 , pointsGroup2 , goingShark ;
var greetShark_img , points_Img , shark_img1 , shark_img2, goingShark_img ,  Hshark_img1 , Hshark_img2 ;

//Vars. for text levels.
var level1 , level2 , level3 , level4 , level5 , levelSelect;
var level1_img , level2_img , level3_img , level4_img , Level4_img , level5_img , levelSelect_img;

//Vars. for Texts.
var story , Story , rules , goal , Title , Space , Welcome , nB , startSound  , Hello , congrats , swagT2 , thanks , playQ , yes , no , exit;
var story1_img , story2_img , title_img , welcome_img , rules_img , goal_img , startSound_img ,  space_img , n_img , hello_img , congrats_img , swagT2_img , thanks_img , playQ_img , yes_img , no_img , exit_img;

//Vars. for Invisible Platform.
var invisibleGround1 , invisibleGround2  , invisibleP1 , invisibleP2 , invisibleP3;

//Vars. for Sounds.
var welcomeSound , WelcomeSound ;
var welcome_Sound , game_Sound  ;

//Var for gameState.
var gameState = 0 ;

function preload(){
   
  //Loading Images
  //Bg Images
  background1_img = loadImage("images/backgrounds/Bg1.webp");
  background2_img = loadImage("images/backgrounds/Bg2.png");
  cave_img = loadImage("images/backgrounds/cave.png");
  dolphin_img = loadImage("images/backgrounds/dolphin.png");
  dolphins_img = loadImage("images/backgrounds/dolphins.png");
  plant1_img = loadImage("images/backgrounds/plant1.png");
  plant2_img = loadImage("images/backgrounds/plant2.png");
  plant3_img = loadImage("images/backgrounds/plant3.png");
  fish1_img = loadImage("images/backgrounds/fish1.png");
  fish2_img = loadImage("images/backgrounds/fish2.png");
  fish3_img = loadImage("images/backgrounds/fish3.png");
  fish4_img = loadImage("images/backgrounds/fish4.png");
  bubbles_img = loadImage("images/backgrounds/bubbles.png");
  congrats_img = loadImage("images/others/winner.png");
  ball_img = loadImage("images/others/ball.png");

  //Tortoise Images
  tortoise_img = loadImage("images/animals/playT.png");
  angryT_img = loadImage("images/animals/revenge.png");
  swagT_img = loadImage("images/animals/swagT.png");
  Fish_img = loadImage("images/animals/teachFish.png");

  //Shark Images
  greetShark_img = loadImage("images/animals/Greet.png");
  shark_img1 = loadAnimation("images/animals/shark5.png" , "images/animals/shark6.png" , "images/animals/shark7.png" , "images/animals/shark8.png ");
  shark_img2 = loadAnimation("images/animals/shark1.png" , "images/animals/shark2.png" , "images/animals/shark3.png" , "images/animals/shark4.png ");
  Hshark_img1 = loadAnimation("images/animals/Hshark1.png" , "images/animals/Hshark2.png" , "images/animals/Hshark3.png" , "images/animals/Hshark4.png");
  Hshark_img2 = loadAnimation("images/animals/Hshark5.png" , "images/animals/Hshark6.png" , "images/animals/Hshark7.png" , "images/animals/Hshark8.png");
  goingShark_img = loadImage("images/animals/wellPlayedS.png");

  //Level Images
  level1_img = loadImage("images/levels/Level1.png");
  level2_img = loadImage("images/levels/Level2.png");
  level3_img = loadImage("images/levels/Level3.png");
  level4_img = loadImage("images/levels/Level4.png");
  level5_img = loadImage("images/levels/Level5.png");
  levelSelect_img = loadImage("images/levels/levelSelect.png")

  title1_img = loadImage("images/levels/title1.png");
  title2_img = loadImage("images/levels/title2.png");
  title3_img = loadImage("images/levels/title3.png");
  title4_img = loadImage("images/levels/title4.png");
  title5_img = loadImage("images/levels/title5.png");

  //Level's Text Images
  Score_img = loadImage("images/levels/Score.png");
  score0_img = loadImage("images/levels/score0.png");
  score1_img = loadImage("images/levels/score1.png");
  score2_img = loadImage("images/levels/score2.png");
  score3_img = loadImage("images/levels/score3.png");
  score4_img = loadImage("images/levels/score4.png");
  score5_img = loadImage("images/levels/score5.png");
  score6_img = loadImage("images/levels/score6.png");
  score7_img = loadImage("images/levels/score7.png");
  score8_img = loadImage("images/levels/score8.png");
  score9_img = loadImage("images/levels/score9.png");
  score10_img = loadImage("images/levels/score10.png");

  //Points Image
  points_Img = loadImage("images/others/seaWeed.png");
  lock_img = loadImage("images/others/lock.png");

  //Texts & Text's Images
  hello_img = loadImage("images/others/hello.png")
  title_img = loadImage("images/texts/Title.png");
  space_img = loadImage("images/texts/Space.png");
  n_img = loadImage("images/texts/N.png");
  welcome_img = loadImage("images/others/Welcome.png");
  rules_img = loadImage("images/texts/Rules.png");
  goal_img = loadImage("images/texts/Goal.png");
  story1_img = loadImage("images/texts/Story1.png");
  story2_img = loadImage("images/animals/Story2.png");
  WelcomeSound = loadImage("images/others/welcomeSound.png");
  startSound_img = loadImage("images/texts/startSound.png");
  tortoiseScared_img = loadImage("images/animals/scaredT.png");
  crab1_img  = loadImage("images/animals/Crab.png");
  crab2_img = loadImage("images/animals/Crab2.png");
  swagT2_img = loadImage("images/others/swagT2.png");
  thanks_img = loadImage("images/others/thanks.png");
  exit_img = loadImage("images/others/exit.png");
  playQ_img = loadImage("images/others/playQ.png");
  yes_img = loadImage("images/texts/yes.png");
  no_img = loadImage("images/texts/no.png");

  //Loading Sound
  game_Sound = loadSound("sounds/Game.mp3");
  welcome_Sound = loadSound("sounds/Welcome.mp3");

}

function setup() {

  //CreatingCanvas
  createCanvas(displayWidth, displayHeight);

  //Backgrounds
  WaterBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  WaterBg.addImage(background2_img);
  WaterBg.scale = 1.45;
  WaterBg.visible = false;

  SharkBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  SharkBg.addImage(background1_img);
  SharkBg.scale = 1.6;
  SharkBg.visible = false;

  cave = createSprite(displayWidth/1.1,displayHeight/1.1);
  cave.addImage(cave_img);
  cave.scale = 0.2;
  cave.visible = true;

  ball = createSprite(displayWidth/24 , displayHeight/1.2);
  ball.addImage(ball_img);
  ball.scale = 0.05;
  ball.visible = true;

  dolphin = createSprite(displayWidth/20,displayHeight/1.1);
  dolphin.addImage(dolphin_img);
  dolphin.scale = 0.1;
  dolphin.visible = true;

  dolphins = createSprite(displayWidth/10,displayHeight/7);
  dolphins.addImage(dolphins_img);
  dolphins.scale = 0.1;
  dolphins.visible = true;

  plant1 = createSprite(displayWidth/5,displayHeight/1.08);
  plant1.addImage(plant1_img);
  plant1.scale = 0.1;
  plant1.visible = true;

  plant2 = createSprite(displayWidth/8,displayHeight/1.20);
  plant2.addImage(plant2_img);
  plant2.scale = 0.06;
  plant2.visible = true;

  plant3 = createSprite(displayWidth/1.3,displayHeight/1.08);
  plant3.addImage(plant3_img);
  plant3.scale = 0.1;
  plant3.visible = true;

  //Score

  Score = createSprite(displayWidth/1.22 , displayHeight/20);
  Score.addImage(Score_img);
  Score.visible = true;

  score0 = createSprite(displayWidth/1.1 , displayHeight/20);
  score0.addImage(score0_img);
  score0.visible = false;

  score1 = createSprite(displayWidth/1.1 , displayHeight/20);
  score1.addImage(score1_img);
  score1.visible = false;

  score2 = createSprite(displayWidth/1.1 , displayHeight/20);
  score2.addImage(score2_img);
  score2.visible = false;

  score3 = createSprite(displayWidth/1.1 , displayHeight/20);
  score3.addImage(score3_img);
  score3.visible = false;

  score4 = createSprite(displayWidth/1.1 , displayHeight/20);
  score4.addImage(score4_img);
  score4.visible = false;

  score5 = createSprite(displayWidth/1.1 , displayHeight/20);
  score5.addImage(score5_img);
  score5.visible = false;

  score6 = createSprite(displayWidth/1.1 , displayHeight/20);
  score6.addImage(score6_img);
  score6.visible = false;

  score7 = createSprite(displayWidth/1.1 , displayHeight/20);
  score7.addImage(score7_img);
  score7.visible = false;

  score8 = createSprite(displayWidth/1.1 , displayHeight/20);
  score8.addImage(score8_img);
  score8.visible = false;

  score9 = createSprite(displayWidth/1.1 , displayHeight/20);
  score9.addImage(score9_img);
  score9.visible = false;

  score10 = createSprite(displayWidth/1.1 , displayHeight/20);
  score10.addImage(score10_img);
  score10.visible = false;

  //Congrats
  congrats = createSprite(displayWidth/2 , displayHeight/1.8);
  congrats.addImage(congrats_img);
  congrats.visible = false; 
  congrats.scale = 0.5;

  //Play Again??
  playQ = createSprite(displayWidth/2 , displayHeight/2.5);
  playQ.addImage(playQ_img);
  playQ.visible = false;
  playQ.scale = 0.2;

  //swagT
  swagT = createSprite(displayWidth/3 , displayHeight/1.7);
  swagT.addImage(swagT_img);
  swagT.visible = false;
  swagT.scale = 0.1;

  swagT2 = createSprite(displayWidth/3.5 , displayHeight/2.5);
  swagT2.addImage(swagT2_img);
  swagT2.visible = false;
  swagT2.scale = 0.15;

  //Crabs
  crab1 = createSprite(displayWidth/1.3 , displayHeight/1.1 , 10 , 10);
  crab1.addImage(crab1_img);
  crab1.visible = false;
  crab1.velocityX = -3
  crab1.scale = 0.1;
  
  crab2 = createSprite(displayWidth/2 , displayHeight/1.1 , 10 , 10);
  crab2.addImage(crab2_img);
  crab2.visible = false;
  crab2.velocityX = -2;
  crab2.scale = 0.1;

  //Sharks
  greetShark = createSprite(displayWidth/2 , displayHeight/2 ,10,10)
  greetShark.addImage(greetShark_img);
  greetShark.visible = false; 

  goingShark = createSprite(displayWidth/1.5 , displayHeight/1.7);
  goingShark.addImage(goingShark_img);
  goingShark.visible = false;
  goingShark.scale = 0.4;

  //Groups
  sharksGroup1 = createGroup();
  sharksGroup1.visible = false;

  sharksGroup2 = createGroup();
  sharksGroup1.visible = false;

  sharksGroup3 = createGroup();
  sharksGroup1.visible = false;

  pointsGroup1 = createGroup();
  pointsGroup1.visible = false;

  pointsGroup2 = createGroup();
  pointsGroup2.visible = false;

  fishGroup = createGroup();
  fishGroup.visible = false;

  bubbleGroup = createGroup();
  bubbleGroup.visible = false;

  //Levels
  level1 = createSprite(displayWidth/2,displayHeight/2.6,displayWidth,displayHeight);
  level1.addImage(level1_img);
  level1.scale = 0.1;
  level1.visible = false;

  level2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level2.addImage(level2_img);
  level2.scale = 0.1;
  level2.visible = false;

  level3 = createSprite(displayWidth/2,displayHeight/1.65,displayWidth,displayHeight);
  level3.addImage(level3_img);
  level3.scale = 0.1;
  level3.visible = false;

  level4 = createSprite(displayWidth/2,displayHeight/1.4,displayWidth,displayHeight);
  level4.addImage(level4_img);
  level4.scale = 0.1;
  level4.visible = false;
 
  level5 = createSprite(displayWidth/2,displayHeight/1.2,displayWidth,displayHeight);
  level5.addImage(level5_img);
  level5.scale = 0.1;
  level5.visible = false;

  levelSelect = createSprite(displayWidth/2 , displayHeight/4);
  levelSelect.addImage(levelSelect_img);
  levelSelect.scale = 0.05;
  levelSelect.visible = false;

  exit = createSprite(displayWidth/2 , displayHeight/1.1);
  exit.addImage(exit_img);
  exit.visible = false;
  exit.scale = 0.05;

  yes = createSprite(displayWidth/2 , displayHeight/1.5);
  yes.addImage(yes_img);
  yes.scale = 0.05;
  yes.visible = false;

  no = createSprite(displayWidth/2 , displayHeight/1.3);
  no.addImage(no_img);
  no.scale = 0.05;
  no.visible = false;

  //Locks

  lock1 = createSprite(displayWidth/2 , displayHeight/2.6);
  lock1.addImage(lock_img);
  lock1.scale = 0.1;
  lock1.visible = false ;

  lock2 = createSprite(displayWidth/2 , displayHeight/2);
  lock2.addImage(lock_img);
  lock2.scale = 0.1;
  lock2.visible = false ;

  lock3 = createSprite(displayWidth/2 , displayHeight/1.65);
  lock3.addImage(lock_img);
  lock3.scale = 0.1;
  lock3.visible = false ;

  lock4 = createSprite(displayWidth/2 , displayHeight/1.4);
  lock4.addImage(lock_img);
  lock4.scale = 0.1;
  lock4.visible = false ;

  lock5 = createSprite(displayWidth/2 , displayHeight/1.2);
  lock5.addImage(lock_img);
  lock5.scale = 0.1;
  lock5.visible = false ;

  //Tortoise
  tortoise = createSprite(displayWidth/2, displayHeight/2 , 10,10);
  tortoise.addImage(tortoise_img);
  tortoise.scale = 0.15;
  tortoise.visible = false;

  tortoiseAngry = createSprite(displayWidth/1.5, displayHeight/1.5 , 10,10);
  tortoiseAngry.addImage(angryT_img);
  tortoiseAngry.visible = false;

  tortoiseScared = createSprite(displayWidth/2,displayHeight/1.3,displayWidth,displayHeight);
  tortoiseScared.addImage(tortoiseScared_img);
  tortoiseScared.scale = 0.2;
  tortoiseScared.visible = false;

  Fish = createSprite(displayWidth/3, displayHeight/1.4 , 10,10);
  Fish.addImage(Fish_img);
  Fish.visible = false;
  Fish.scale = 0.3;

  // invisible platforms
  invisibleGround1 = createSprite(displayWidth/2 , displayHeight/4.5 ,2000 , 5 );
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(displayWidth/2 , displayHeight/1.1 ,2000 , 5 );
  invisibleGround2.visible = false;

  invisibleP1 = createSprite(displayWidth/1.1 , displayHeight/1.1 , 5 , 100);
  invisibleP1.visible = false;

  invisibleP2 = createSprite( displayWidth/7 , displayHeight/1.1 , 5 , 100);
  invisibleP2.visible = false;

  invisibleP3 = createSprite(displayWidth/20 , displayHeight/1.15 , 100 , 5);
  invisibleP3.visible = false;

  //Welcoming
  Welcome = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Welcome.addImage(welcome_img);
  Welcome.scale = 0.5;
  Welcome.visible = false;

  welcomeSound = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  welcomeSound.addImage(WelcomeSound);
  welcomeSound.scale = 0.2;
  welcomeSound.visible = false;

  startSound = createSprite(displayWidth/2,displayHeight/1.8,displayWidth,displayHeight);
  startSound.addImage(startSound_img);
  startSound.scale = 1.45;
  startSound.visible = false;

  //Hello 
  Hello = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  Hello.addImage(hello_img);
  Hello.scale = 1;
  Hello.visible = false;

  //Thank You
  thanks = createSprite(displayWidth/2 , displayHeight/1.5);
  thanks.addImage(thanks_img);
  thanks.scale = 0.3;
  thanks.visible = false;

  //Title
  Title = createSprite(displayWidth/2,displayHeight/17,displayWidth,displayHeight);
  Title.addImage(title_img);
  Title.scale = 1.45;
  Title.visible = true;

  title1 = createSprite(displayWidth/2,displayHeight/7,displayWidth,displayHeight);
  title1.addImage(title1_img);
  title1.scale = 1.45;
  title1.visible = false;
  
  title2 = createSprite(displayWidth/2,displayHeight/7,displayWidth,displayHeight);
  title2.addImage(title2_img);
  title2.scale = 1.45;
  title2.visible = false;
  
  title3 = createSprite(displayWidth/2,displayHeight/7,displayWidth,displayHeight);
  title3.addImage(title3_img);
  title3.scale = 1.45;
  title3.visible = false;
  
  title4 = createSprite(displayWidth/2,displayHeight/7,displayWidth,displayHeight);
  title4.addImage(title4_img);
  title4.scale = 1.45;
  title4.visible = false;

  title5 = createSprite(displayWidth/2,displayHeight/7,displayWidth,displayHeight);
  title5.addImage(title5_img);
  title5.scale = 1.45;
  title5.visible = false;

  //Space
  Space = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  Space.addImage(space_img);
  Space.scale = 1.45;
  Space.visible = false;

  // N button
  nB = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  nB.addImage(n_img);
  nB.scale = 1.45;
  nB.visible = false;

  //Rules
  rules = createSprite(displayWidth/2,displayHeight/3,displayWidth,displayHeight);
  rules.addImage(rules_img);
  rules.scale = 1.45;
  rules.visible = false;

  //Goal
  goal = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  goal.addImage(goal_img);
  goal.scale = 1.45;
  goal.visible = false;

  //Story
  story = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  story.addImage(story1_img);
  story.scale = 1.1;
  story.visible = false;
  Story = createSprite(displayWidth/2,displayHeight/2.5,displayWidth,displayHeight);
  Story.addImage(story2_img);
  Story.scale = 0.3;
  Story.visible = false;

}

function draw() {
  background("pink");

  //Colliding the tortoise
  tortoise.collide(invisibleGround1);
  tortoise.collide(invisibleGround2);

  //Colliding the Sharks
  sharksGroup1.bounceOff(invisibleGround1);
  sharksGroup1.bounceOff(invisibleGround2);

  fishGroup.bounceOff(invisibleGround1);
  fishGroup.bounceOff(invisibleGround2);

  if(bubbleGroup.isTouching(invisibleGround1)){
    bubbleGroup.destroyEach();
  }

  sharksGroup2.bounceOff(invisibleGround1);
  sharksGroup2.bounceOff(invisibleGround2);

  sharksGroup3.bounceOff(invisibleGround1);
  sharksGroup3.bounceOff(invisibleGround2);

  pointsGroup1.bounceOff(invisibleGround1);
  pointsGroup1.bounceOff(invisibleGround2);

  pointsGroup2.bounceOff(invisibleGround1);
  pointsGroup2.bounceOff(invisibleGround2);

  //Colliding the Crabs
  crab1.bounceOff(invisibleP1);
  crab1.bounceOff(invisibleP2);
  crab2.bounceOff(invisibleP1);
  crab2.bounceOff(invisibleP2);

  if(ball.isTouching(invisibleP3)){
        ball.velocityY = -12;
  }

  //add gravity
  ball.velocityY = ball.velocityY + 1

  if(score === 0){
    score0.visible = true;
    score1.visible = false;
    score2.visible = false;
    score3.visible = false;
    score4.visible = false;
    score5.visible = false;
    score6.visible = false;
    score7.visible = false;
    score8.visible = false;
    score9.visible = false;
    score10.visible = false;
    tortoise.scale = 0.15;
  }
   else if(score === 1){
     score0.visible = false;
     score1.visible = true;
     tortoise.scale = 0.152;
  } 
   else if(score === 2){
    score1.visible = false;
    score2.visible = true;
    tortoise.scale = 0.155;
   }
   else if(score === 3){
    score2.visible = false;
    score3.visible = true;
    tortoise.scale = 0.158;
   }
   else if(score === 4){
    score3.visible = false;
    score4.visible = true;
    tortoise.scale = 0.16;
   }
   else if(score === 5){
    score4.visible = false;
    score5.visible = true;
    tortoise.scale = 0.163;
   }
   else if(score === 6){
    score5.visible = false;
    score6.visible = true;
    tortoise.scale = 0.165;
   }
   else if(score === 7){
    score6.visible = false;
    score7.visible = true;
    tortoise.scale = 0.168;
   }
   else if(score === 8){
    score7.visible = false;
    score8.visible = true;
    tortoise.scale = 0.171;
   }
   else if(score === 9){
    score8.visible = false;
    score9.visible = true;
    tortoise.scale = 0.176;
   }
   else if(score === 10){
    score9.visible = false;
    score10.visible = true;
    tortoise.scale = 0.180;
   }   

  if(gameState === 0){

    cave.visible = false;
    dolphin.visible = false;
    ball.visible = false;
    plant1.visible = false;
    plant2.visible = false;
    plant3.visible = false;
    dolphins.visible = false;

    startSound.visible = true;
    SharkBg.visible = true;
    welcomeSound.visible = true;
    Score.visible = false;
    score0.visible = false;

    if(gameState === 0 && mousePressedOver(welcomeSound)) {
      welcome_Sound.play();
      gameState = 1
    }

  }

  if(gameState === 1){
    
    SharkBg.visible = false;
    startSound.visible = false;
    Space.visible = false;
    welcomeSound.visible = false;
    score0.visible = false;

    tortoiseScared.visible = true;
    cave.visible = true;
    ball.visible = true;
    dolphin.visible = true;
    plant1.visible = true;
    plant2.visible = true;
    plant3.visible = true;
    dolphins.visible = true;
    Welcome.visible = true;
    nB.visible = true;
    greetShark.visible = true;
    WaterBg.visible = true;
   
    if(gameState === 1 && keyDown("n")){
      gameState = 2;
    }

  }

  if(gameState === 2){

     tortoiseScared.visible = false;
     nB.visible = false;
     Welcome.visible = false;
     greetShark.visible = false;
     score0.visible = false;

     WaterBg.visible = true;
     story.visible = true;
     Story.visible = true;
     Space.visible = true;
     Space.y = displayHeight/1.1;
     if(gameState === 2 && keyDown("space")){
      gameState = 3;
    }

  }

  if(gameState === 3){

    Space.visible = false;
    story.visible = false;
    Story.visible = false;
    Welcome.visible = false;
    greetShark.visible = false;
    score0.visible = false;

    rules.visible = true;
    goal.visible = true;
    Hello.visible = true;
    nB.visible = true;
    
    if(gameState === 3 && keyDown("n")){
      gameState = 4;
    }

  }

  //Level1
  if(gameState === 4){

    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;
    rules.visible = false;
    goal.visible = false;
    Hello.visible = false;
    nB.visible = false;
    score0.visible = false; 
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;

    level1.visible = true;
    levelSelect.visible = true;
    lock2.visible = true;
    lock3.visible = true;
    lock4.visible = true;
    lock5.visible = true;

    if(gameState === 4 && mousePressedOver(level1)){
      gameState = 5;
      game_Sound.play();
    }

  }

  if(gameState === 5){

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false;

    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;

     title1.visible = true;
     tortoise.visible = true;
     score.visible = true;
     Score.visible = true;
     sharksGroup1.visible = true;
     pointsGroup1.visible = true;
     bubbleGroup.visible = true;
     fishGroup.visible = true;
     crab1.visible = true;
     crab2.visible = true;

     welcome_Sound.stop();

     //Movement of Tortoise
     if(keyDown('up')){
      tortoise.y = tortoise.y - 5;
    }
    else if(keyDown("right")){
     tortoise.x = tortoise.x + 5;
    }
    else if(keyDown('down')){
     tortoise.y = tortoise.y + 5;
    }
    else if(keyDown('left')){
     tortoise.x = tortoise.x - 5;
    }

    if(gameState === 5 && sharksGroup1.isTouching(tortoise)){
      gameState = 18;
      score = 0;
   }

   if(tortoise.isTouching(pointsGroup1)){
     score = score + 1;
     pointsGroup1.destroyEach();
   }

   if(score >= 5){
       gameState = 6;
       score = 0;
   }
    
 }

 if(gameState === 5.5){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
  lock5.visible = false;
  exit.visible = false;

   title1.visible = true;
   tortoise.visible = true;
   score.visible = true;
   Score.visible = true;
   sharksGroup1.visible = true;
   pointsGroup1.visible = true;
   bubbleGroup.visible = true;
   fishGroup.visible = true;
   crab1.visible = true;
   crab2.visible = true;

   welcome_Sound.stop();

   //Movement of Tortoise
   if(keyDown('up')){
    tortoise.y = tortoise.y - 5;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 5;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 5;
  }
  else if(keyDown('left')){
   tortoise.x = tortoise.x - 5;
  }

  if(gameState === 5.5 && sharksGroup1.isTouching(tortoise)){
    gameState = 16;
    score = 0;
 }

 if(tortoise.isTouching(pointsGroup1)){
   score = score + 1;
   pointsGroup1.destroyEach();
 }

 if(score >= 4){
     gameState = 16;
     score = 0;
 }
  
}

 //Level2
  if(gameState === 6){

    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;
     Space.visible = false;
     level1.visible = false;
     pointsGroup1.visible = false;
     sharksGroup1.visible = false;
     pointsGroup1.destroyEach();
     sharksGroup1.destroyEach();
     fishGroup.destroyEach();
     bubbleGroup.visible = false;
     bubbleGroup.destroyEach();
     fishGroup.visible = false;
     crab1.visible = false;
     crab2.visible = false;
     title1.visible = false;
     level1.visible = false;
     level3.visible = false;
     level4.visible = false;
     level5.visible = false;

    
     level2.visible = true;
    
     levelSelect.visible = true;
     lock1.visible = true;
     lock3.visible = true;
     lock4.visible = true;
     lock5.visible = true;
     exit.visible = true;


     if(gameState === 6 && mousePressedOver(level2)){
       gameState = 7;
       game_Sound.play();
     }

     if(gameState === 6 && mousePressedOver(exit)){
       gameState = 17;
     }
 
  }

  if(gameState === 7){

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 
    exit.visible = false;
    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;

     tortoise.visible = true;
     title2.visible = true;
     fishGroup.visible = true;
     pointsGroup1.visible = true;
     sharksGroup2.visible = true;
     bubbleGroup.visible = true;
     crab1.visible = true;
     crab2.visible = true;
     
      //Movement of Tortoise
      if(keyDown('up')){
        tortoise.y = tortoise.y - 4;
      }
      else if(keyDown("right")){
       tortoise.x = tortoise.x + 4;
      }
      else if(keyDown('down')){
       tortoise.y = tortoise.y + 4;
      }
      else if(keyDown('left')){
       tortoise.x = tortoise.x - 4;
      }
     if(gameState === 7 && sharksGroup2.isTouching(tortoise)){
      gameState = 19;
      score = 0;
   }
   if(tortoise.isTouching(pointsGroup1)){
     score = score + 1;
     pointsGroup1.destroyEach();
  }

  if(score >= 6){
      gameState = 8;
      score = 0;
   }
 }

 if(gameState === 7.5){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  lock3.visible = false;
  lock4.visible = false;
  lock5.visible = false;
  exit.visible = false;

   tortoise.visible = true;
   title2.visible = true;
   fishGroup.visible = true;
   pointsGroup1.visible = true;
   sharksGroup2.visible = true;
   bubbleGroup.visible = true;
   crab1.visible = true;
   crab2.visible = true;
   
    //Movement of Tortoise
    if(keyDown('up')){
      tortoise.y = tortoise.y - 4;
    }
    else if(keyDown("right")){
     tortoise.x = tortoise.x + 4;
    }
    else if(keyDown('down')){
     tortoise.y = tortoise.y + 4;
    }
    else if(keyDown('left')){
     tortoise.x = tortoise.x - 4;
    }
   if(gameState === 7.5 && sharksGroup2.isTouching(tortoise)){
    gameState = 16;
    score = 0;
 }
 if(tortoise.isTouching(pointsGroup1)){
   score = score + 1;
   pointsGroup1.destroyEach();
}

if(score >= 4){
    gameState = 16;
    score = 0;
 }

}

 //Level3
  if(gameState === 8){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;
    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;
    level1.visible = false;
    level2.visible = false;
    level4.visible = false;
    level5.visible = false;

    tortoise.visible = false;
    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    rules.visible = false;
    goal.visible = false;
    Hello.visible = false;
    crab1.visible = false;
    crab2.visible = false;
    goingShark.visible = false;
    score0.visible = false;
    swagT.visible = false;
    swagT2.visible = false;
    nB.visible = false;
    Space.visible = false;

    lock1.visible = true;
    lock2.visible = true;
    lock4.visible = true;
    lock5.visible = true;
    
     level3.visible = true;
    
     levelSelect.visible = true;
     lock4.visible = true;
     lock5.visible = true;
     exit.visible = true;

     if(gameState === 8 && mousePressedOver(level3)){
       gameState = 9;
       game_Sound.play();
     }
     
     if(gameState === 8 && mousePressedOver(exit)){
      gameState = 17;
    }

  }

  if(gameState === 9){

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 
    exit.visible = false;
    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;

    tortoise.visible = true;
    title3.visible = true;
    pointsGroup1.visible = true;
    sharksGroup2.visible = true;
    bubbleGroup.visible = true;
    fishGroup.visible = true;
    crab1.visible = true;
    crab2.visible = true;

    crab1.velocityX = -3;
    crab2.velocityX = -2;

      //Movement of Tortoise
      if(keyDown('up')){
        tortoise.y = tortoise.y - 4;
      }
      else if(keyDown("right")){
       tortoise.x = tortoise.x + 4;
      }
      else if(keyDown('down')){
       tortoise.y = tortoise.y + 4;
      }
      else if(keyDown('left')){
       tortoise.x = tortoise.x - 4;
      }

    if(gameState === 9 && sharksGroup2.isTouching(tortoise)){
      gameState = 20;
      score = 0;  
   }

   if(tortoise.isTouching(pointsGroup1)){
    score = score + 1;
    pointsGroup1.destroyEach();
  }

  if(score >= 7){
      gameState = 10;
      score = 0;
  }

 }

 if(gameState === 9.5){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  lock4.visible = false;
  lock5.visible = false;
  exit.visible = false;

  tortoise.visible = true;
  title3.visible = true;
  pointsGroup1.visible = true;
  sharksGroup2.visible = true;
  bubbleGroup.visible = true;
  fishGroup.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  crab1.velocityX = -3;
  crab2.velocityX = -2;

    //Movement of Tortoise
    if(keyDown('up')){
      tortoise.y = tortoise.y - 4;
    }
    else if(keyDown("right")){
     tortoise.x = tortoise.x + 4;
    }
    else if(keyDown('down')){
     tortoise.y = tortoise.y + 4;
    }
    else if(keyDown('left')){
     tortoise.x = tortoise.x - 4;
    }

  if(gameState === 9.5 && sharksGroup2.isTouching(tortoise)){
    gameState = 16;
    score = 0;  
 }

 if(tortoise.isTouching(pointsGroup1)){
  score = score + 1;
  pointsGroup1.destroyEach();
}

if(score >= 4){
    gameState = 16;
    score = 0;
}

}

 //Level4
 if(gameState === 10){

  title1.visible = false;
  title2.visible = false;
  title3.visible = false;
  title4.visible = false;
  title5.visible = false;
  playQ.visible = false; 
  tortoiseAngry.visible = false;
  Fish.visible = false;
  yes.visible = false;
  no.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level5.visible = false;

  tortoise.visible = false;
  score.visible = false;
  Score.visible = false;

  sharksGroup1.visible = false;
  sharksGroup1.destroyEach();

  sharksGroup2.visible = false;
  sharksGroup2.destroyEach();

  sharksGroup3.visible = false;
  sharksGroup3.destroyEach();

  pointsGroup1.visible = false;
  pointsGroup1.destroyEach();

  pointsGroup2.visible = false;
  pointsGroup2.destroyEach();

  bubbleGroup.visible = false;
  bubbleGroup.destroyEach();

  fishGroup.visible = false;
  fishGroup.destroyEach();

  rules.visible = false;
  goal.visible = false;
  Hello.visible = false;
  crab1.visible = false;
  crab2.visible = false;
  goingShark.visible = false;
  score0.visible = false;
  swagT.visible = false;
  swagT2.visible = false;
  nB.visible = false;
  Space.visible = false;

    lock1.visible = true;
    lock2.visible = true;
    lock3.visible = true;
    lock5.visible = true;

     level4.visible = true;

     levelSelect.visible = true;
     lock5.visible = true;
     exit.visible = true;

     if(gameState === 10 && mousePressedOver(level4)){
      gameState = 11;
      game_Sound.play();
    }

    if(gameState === 10 && mousePressedOver(exit)){
      gameState = 17;
    }

 }

 if(gameState === 11){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
  lock5.visible = false; 
  exit.visible = false;

  playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;
  
  pointsGroup2.visible = true;
  tortoise.visible = true;
  fishGroup.visible = true;
  bubbleGroup.visible = true;
  title4.visible = true;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y =tortoise.y - 4;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 4;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 4;
  }
  else if(keyDown('left')){
   tortoise.x= tortoise.x - 4;
  }

  if(gameState === 11 && sharksGroup3.isTouching(tortoise)){
     gameState = 21;
     score = 0;
  }
  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }

  if(score >= 8){
      gameState = 12;
      score = 0;
  }

 }

 if(gameState === 11.5){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  lock5.visible = false;
  exit.visible = false;

  pointsGroup2.visible = true;
  tortoise.visible = true;
  fishGroup.visible = true;
  bubbleGroup.visible = true;
  title4.visible = true;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y =tortoise.y - 4;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 4;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 4;
  }
  else if(keyDown('left')){
   tortoise.x= tortoise.x - 4;
  }

  if(gameState === 11.5 && sharksGroup3.isTouching(tortoise)){
     gameState = 16;
     score = 0;
  }
  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }

  if(score >= 4){
      gameState = 16;
      score = 0;
  }

 }

 //Level5
 if(gameState === 12){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = true;
    lock2.visible = true;
    lock3.visible = true;
    lock4.visible = true;

    tortoise.visible = false;
    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    rules.visible = false;
    goal.visible = false;
    Hello.visible = false;
    crab1.visible = false;
    crab2.visible = false;
    goingShark.visible = false;
    score0.visible = false;
    swagT.visible = false;
    swagT2.visible = false;
    nB.visible = false;
    Space.visible = false;

    level5.visible = true;
    levelSelect.visible = true;
    exit.visible = true;

    if(gameState === 12 && mousePressedOver(level5)){
      gameState = 13;
      game_Sound.play();
    }

    if(gameState === 12 && mousePressedOver(exit)){
      gameState = 17;
    }

 }

 if(gameState === 13){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  levelSelect.visible = false;
  exit.visible = false;
  playQ.visible = false; 
  lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;

  pointsGroup2.visible = true;
  title5.visible = true;
  fishGroup.visible = true;
  tortoise.visible = true;
  bubbleGroup.visible = true;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y = tortoise.y - 3;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 3;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 3;
  }
  else if(keyDown('left')){
   tortoise.x = tortoise.x - 3;
  }

  if(gameState === 13 && sharksGroup3.isTouching(tortoise)){
     gameState = 22;
     score = 0;
  }

  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }

  if(score >= 10){
      gameState = 14;
      score = 0;
  }
 }

 if(gameState === 13.5){

  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  levelSelect.visible = false;
  exit.visible = false;

  pointsGroup2.visible = true;
  title5.visible = true;
  fishGroup.visible = true;
  tortoise.visible = true;
  bubbleGroup.visible = true;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y = tortoise.y - 3;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 3;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 3;
  }
  else if(keyDown('left')){
   tortoise.x = tortoise.x - 3;
  }

  if(gameState === 13.5 && sharksGroup3.isTouching(tortoise)){
     gameState = 16;
     score = 0;
  }

  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }
  if(score >= 4){
      gameState = 16;
      score = 0;
  }

 }

  if(gameState === 14){

    Score.visible = false;
    score0.visible = false;
    fishGroup.destroyEach();
    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();
    pointsGroup2.destroyEach();
    tortoise.visible = false;
    sharksGroup3.destroyEach();
    crab1.visible = false;
    crab2.visible = false;
    title5.visible = false;

    congrats.visible = true;
    Space.visible = true;

    if(gameState === 14 && keyDown("space")){
      gameState = 15;
    }
  }

  if(gameState === 15){

    congrats.visible = false;
    Space.visible = false;
    score0.visible = false;

    goingShark.visible = true;
    swagT.visible = true;
    swagT2.visible = true;
    nB.visible = true;

    if(gameState === 15 && keyDown("n")){
      gameState = 16;
    }
    
  }

  if(gameState === 16){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    tortoise.visible = false;
    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    rules.visible = false;
    goal.visible = false;
    Hello.visible = false;
    crab1.visible = false;
    crab2.visible = false;
    goingShark.visible = false;
    score0.visible = false;
    swagT.visible = false;
    swagT2.visible = false;
    nB.visible = false;
    Space.visible = false;

    level1.visible = true;
    level2.visible = true;
    level3.visible = true;
    level4.visible = true;
    level5.visible = true;
    levelSelect.visible = true;
    exit.visible = true;

     if(gameState === 16 && mousePressedOver(level1)){
      gameState = 5.5;
      game_Sound.play();
    
    }

    if(gameState === 16 && mousePressedOver(level2)){
      gameState = 7.5;
      game_Sound.play();
    }

     if(gameState === 16 && mousePressedOver(level3)){
       gameState = 9.5;
       game_Sound.play();
     }

     if(gameState === 16 && mousePressedOver(level4)){
      gameState = 11.5;
      game_Sound.play();
    }

    if(gameState === 16 && mousePressedOver(level5)){
      gameState = 13.5;
      game_Sound.play();
    }

    if(gameState === 16 && mousePressedOver(exit)){
      gameState = 17;
    }

  }

  if(gameState === 17){
    
    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;
    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;
    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;
    score0.visible = false;
    playQ.visible = false; 
    tortoiseAngry.visible = false;
    Fish.visible = false;
    yes.visible = false;
    no.visible = false;

    thanks.visible = true;

  }

  if(gameState === 18){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 

    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;

    score0.visible = false;

    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    thanks.visible = false;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;
    no.visible = true;

    if(gameState === 18 && mousePressedOver(yes)){
      gameState = 5;
    }

    if(gameState === 18 && mousePressedOver(no))
      gameState = 17
  }

  if(gameState === 19){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 

    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;

    score0.visible = false;

    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    thanks.visible = false;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;
    no.visible = true;

    if(gameState === 19 && mousePressedOver(yes)){
      gameState = 7;
    }

    if(gameState === 19 && mousePressedOver(no))
      gameState = 17;
    
  }
  
  if(gameState === 20){
 title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 

    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;

    score0.visible = false;

    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    thanks.visible = false;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;
    no.visible = true;

    if(gameState === 20 && mousePressedOver(yes)){
      gameState = 9;
    }

    if(gameState === 20 && mousePressedOver(no))
      gameState = 17;   
    
  }
  
  if(gameState === 21){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 

    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;

    score0.visible = false;

    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    thanks.visible = false;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;
    no.visible = true;

    if(gameState === 18 && mousePressedOver(yes)){
      gameState = 11;
    }

    if(gameState === 18 && mousePressedOver(no))
      gameState = 17;
    
  }
  
  if(gameState === 22){

    title1.visible = false;
    title2.visible = false;
    title3.visible = false;
    title4.visible = false;
    title5.visible = false;

    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false; 

    tortoise.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;
    levelSelect.visible = false;
    exit.visible = false;

    score0.visible = false;

    score.visible = false;
    Score.visible = false;

    sharksGroup1.visible = false;
    sharksGroup1.destroyEach();

    sharksGroup2.visible = false;
    sharksGroup2.destroyEach();

    sharksGroup3.visible = false;
    sharksGroup3.destroyEach();

    pointsGroup1.visible = false;
    pointsGroup1.destroyEach();

    pointsGroup2.visible = false;
    pointsGroup2.destroyEach();

    bubbleGroup.visible = false;
    bubbleGroup.destroyEach();

    fishGroup.visible = false;
    fishGroup.destroyEach();

    thanks.visible = false;

    playQ.visible = true; 
    tortoiseAngry.visible = true;
    Fish.visible = true;
    yes.visible = true;
    no.visible = true;
    
    if(gameState === 18 && mousePressedOver(yes)){
      gameState = 13;
    }

    if(gameState === 18 && mousePressedOver(no))
      gameState = 17;

  }

  spawnSharks1();
  spawnSharks2();
  spawnSharks3();

  spawnPoints1();
  spawnPoints2();  

  spawnFish();

  spawnBubbles();

  drawSprites(); 
}

//Function for Sharks 
function spawnSharks1(){

  if (gameState === 5 || gameState === 5.5){
    if(frameCount % 350 === 0){

    var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,40);
     shark1.velocityX = -3;

     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: shark1.addAnimation("moving",shark_img1);
              break;
       case 2: shark1.addAnimation("moving",Hshark_img1);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     shark1.scale = random(0.08,0.12);
     shark1.lifetime = 800;
    
    //add each obstacle to the group
     sharksGroup1.add(shark1);

     var shark2 = createSprite(0,Math.round(random(300,780)),10,40);
     shark2.velocityX = 4;

     var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark2.addAnimation("moving",shark_img2);
                break;
         case 2: shark2.addAnimation("moving",Hshark_img2);
                 break;
         default: break;
       }
    
     //assign scale and lifetime to the obstacle           
     shark2.scale = random(0.08,0.12);
     shark2.lifetime = 800;
    
     //add each obstacle to the group
     sharksGroup1.add(shark2);

 }
}

}

function spawnSharks2(){

     if (gameState === 7 || gameState === 7.5 || gameState === 9 || gameState === 9.5 ){

        if( frameCount % 300 === 0){

         var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
         shark1.velocityX = -3.5;
         shark1.velocityY = random(-0.5,0.5);

         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: shark1.addAnimation(shark_img1);
                  break;
           case 2: shark1.addAnimation(Hshark_img1);
                   break;
           default: break;
         }
        
         //assign scale and lifetime to the obstacle           
         shark1.scale = random(0.08,0.12);
         shark1.lifetime = 800;
        
         //add each obstacle to the group
         sharksGroup2.add(shark1);
    
         var shark2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
         shark2.velocityX = 4.5;
         shark2.velocityY = random(-0.5,0.5);

         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: shark2.addAnimation("moving",shark_img2);
                  break;
           case 2: shark2.addAnimation("moving",Hshark_img2);
                   break;
           default: break;
         }
    
         //assign scale and lifetime to the obstacle           
         shark2.scale = random(0.08,0.12);
         shark2.lifetime = 800;
        
         //add each obstacle to the group
         sharksGroup2.add(shark2);

     }
    }
  }

  function spawnSharks3(){

    if (gameState === 11 || gameState === 11.5 || gameState === 13 || gameState === 13.5 ){

      if( frameCount % 250 === 0){

       var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
       shark1.velocityX = -4;
       shark1.velocityY = random(-1.5,1.5);
       shark1.debug = true;

       var rand = Math.round(random(1,2));
       switch(rand) {
       case 1: shark1.addAnimation("moving",shark_img1);
              break;
       case 2: shark1.addAnimation("moving",Hshark_img1);
               break;
       default: break;
       };
      
       //assign scale and lifetime to the obstacle           
       shark1.scale = random(0.08,0.12);
       shark1.lifetime = 800;
      
       //add each obstacle to the group
       sharksGroup3.add(shark1);
  
       var shark2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
       shark2.velocityX = 5;
       shark2.velocityY = random(-1.5,1.5);

       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark2.addAnimation("moving",shark_img2);
                break;
         case 2: shark2.addAnimation("moving",Hshark_img2);
                 break;
         default: break;
       }
  
       //assign scale and lifetime to the obstacle           
       shark2.scale = random(0.08,0.12);
       shark2.lifetime = 800;
      
       //add each obstacle to the group
       sharksGroup3.add(shark2);

   }
  }
}

function spawnPoints1(){

  if (gameState === 5 || gameState === 5.5 || gameState === 7 || gameState === 7.5 || gameState === 9 || gameState === 9.5){

    if( frameCount % 200 === 0){

    var points1 = createSprite(displayWidth + 100,Math.round(random(300,780)),10,10);
     points1.velocityX = -5;
     points1.addImage(points_Img);
    
     //assign scale and lifetime to the obstacle           
     points1.scale = 0.15;
     points1.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup1.add(points1);
    }
    if(frameCount % 300 === 0){

     var points2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
     points2.velocityX = 4;
     points2.addImage(points_Img);
    
     //assign scale and lifetime to the obstacle           
     points2.scale = 0.15;
     points2.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup1.add(points2);

    }
  }
  }

function spawnPoints2(){

  if (gameState === 11 || gameState === 11.5 || gameState === 13 || gameState === 13.5){
    
    if( frameCount % 200 === 0){

    var points1 = createSprite(displayWidth + 100,Math.round(random(300,780)),10,10);
     points1.velocityX = -5;
     points1.velocityY = random(-1,1);
     points1.addImage(points_Img);
     //assign scale and lifetime to the obstacle           
     points1.scale = 0.15;
     points1.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup2.add(points1);
    }
    if(frameCount % 350 === 0){
     var points2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
     points2.velocityX = 4;
     points2.velocityY = random(-0.5,0.5);
     points2.addImage(points_Img);
    
     //assign scale and lifetime to the obstacle           
     points2.scale = 0.15;
     points2.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup2.add(points2);
    }
  }

}

function spawnFish(){

  if (gameState === 5 || gameState === 5.5 || gameState === 7 || gameState === 7.5 || gameState === 9 || gameState === 9.5 || gameState === 11 || gameState === 11.5|| gameState === 13 || gameState === 13.5 ){

    if( frameCount % 200 === 0){

     var fish1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
     fish1.velocityX = -7;
     fish1.velocityY = random(-1.5,1.5);
     var rand = Math.round(random(1,2));
     switch(rand) {
      case 1 : fish1.addImage("moving",fish1_img);
              break;
      case 2 : fish1.addImage("moving",fish2_img);
              break;
              default : break ;
     }
     //assign scale and lifetime to the obstacle           
     fish1.scale = 0.05;
     fish1.lifetime = 800;
    
     //add each obstacle to the group
     fishGroup.add(fish1);

     var fish2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
     fish2.velocityX = 7;
     fish2.velocityY = random(-1.5,1.5);
     var rand = Math.round(random(1,2));
     switch(rand) {
      case 1: fish2.addImage("moving",fish3_img);
              break;
      case 2: fish2.addImage("moving",fish4_img);
              break;
              default : break ;
    }
     

     //assign scale and lifetime to the obstacle           
     fish2.scale = 0.05;
     fish2.lifetime = 800;
    
     //add each obstacle to the group
     fishGroup.add(fish2);

   
  }
 }
} 

function spawnBubbles(){

  if (gameState === 5 || gameState === 5.5 || gameState === 7 || gameState === 7.5 || gameState === 9 || gameState === 9.5 || gameState === 11 || gameState === 11.5|| gameState === 13 || gameState === 13.5 ){

    if( frameCount % 50 === 0){

     var bubbles = createSprite(Math.round(random(displayWidth/1.1,displayWidth/20)),Math.round(random(300,780)),10,10);
     bubbles.velocityY = -5;
     bubbles.addImage("moving",bubbles_img);
         
     //assign scale and lifetime to the obstacle           
     bubbles.scale = 0.1;
    
     //add each obstacle to the group
     bubbleGroup.add(bubbles);
  }
 }
} 
