var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["60799c18-ba1d-4a4d-8793-ecdbf77e20cd","93e42035-636a-4090-83a6-2c3ab3d0f73b","6bd16fb2-3ae6-4e47-b80b-2fda23491bee","5b3dcc58-0dc8-4ef5-81f2-d0e76715d2fa","fdefe9f8-00dd-4079-ab67-3c0094c16647","5e914a32-63be-41a8-9cb5-95161496d939","dfd0f4a8-8445-4a0d-9736-9bf4a0c83f16","38d03852-b916-4f99-9414-182d93dec6e6","006f4293-b8dc-4979-b7d4-9dba022e0856","39e6e2a5-742e-467f-b92a-fdb53a2a78ca","4681b56a-b5bb-424c-aa53-b07be94fb3c5","494c659c-0cb8-4741-8761-d734c16c1ed0","0153b76a-31a3-4a11-93cc-81f9a87d23f4","44716f33-4bdc-4636-8f16-7b73c0ab7a6c","3e3b0f06-e512-485b-b3c6-e8cd9627398c","9cfa0a9a-faec-47e0-bab1-e2937bcf6cf3"],"propsByKey":{"60799c18-ba1d-4a4d-8793-ecdbf77e20cd":{"name":"Solid rocket boosters right.jpg_1","sourceUrl":null,"frameSize":{"x":58,"y":340},"frameCount":1,"looping":true,"frameDelay":12,"version":"nUbAKJVodEqkzS1pB9c44St2iH.MaICv","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":340},"rootRelativePath":"assets/60799c18-ba1d-4a4d-8793-ecdbf77e20cd.png"},"93e42035-636a-4090-83a6-2c3ab3d0f73b":{"name":"Solid rocket boosters left.jpg_1","sourceUrl":null,"frameSize":{"x":59,"y":344},"frameCount":1,"looping":true,"frameDelay":12,"version":"3byT1x8Nw.zuqcz7VBlcxgziPqOJCWwD","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":344},"rootRelativePath":"assets/93e42035-636a-4090-83a6-2c3ab3d0f73b.png"},"6bd16fb2-3ae6-4e47-b80b-2fda23491bee":{"name":" liquid stage.jpg_1","sourceUrl":null,"frameSize":{"x":59,"y":295},"frameCount":1,"looping":true,"frameDelay":12,"version":"lqGPtXXa30LagSoKPoT8I9YjVREaRO0a","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":295},"rootRelativePath":"assets/6bd16fb2-3ae6-4e47-b80b-2fda23491bee.png"},"5b3dcc58-0dc8-4ef5-81f2-d0e76715d2fa":{"name":"rocket shoot.jpg_1","sourceUrl":null,"frameSize":{"x":712,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"1aPDKQi67KCGjRVDdtfMllRwiMC_ovuS","loadedFromSource":true,"saved":true,"sourceSize":{"x":712,"y":384},"rootRelativePath":"assets/5b3dcc58-0dc8-4ef5-81f2-d0e76715d2fa.png"},"fdefe9f8-00dd-4079-ab67-3c0094c16647":{"name":"Stage1btn.jpg_1","sourceUrl":null,"frameSize":{"x":120,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"QjTJtPxM1g9zsPTX0yVOOvk23WWfNtqR","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":21},"rootRelativePath":"assets/fdefe9f8-00dd-4079-ab67-3c0094c16647.png"},"5e914a32-63be-41a8-9cb5-95161496d939":{"name":"Stage2btn.jpg_1","sourceUrl":null,"frameSize":{"x":120,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"EXGg2sE2CciaanTq92pqWwbCxQ1PrQKk","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":26},"rootRelativePath":"assets/5e914a32-63be-41a8-9cb5-95161496d939.png"},"dfd0f4a8-8445-4a0d-9736-9bf4a0c83f16":{"name":"Stage3btn.jpg_1","sourceUrl":null,"frameSize":{"x":120,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rs1Zd9Q98uAFaYnIx34JgDH040PrnAyi","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":28},"rootRelativePath":"assets/dfd0f4a8-8445-4a0d-9736-9bf4a0c83f16.png"},"38d03852-b916-4f99-9414-182d93dec6e6":{"name":"Stage4btn.jpg_1","sourceUrl":null,"frameSize":{"x":120,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"jQrQIe211NQgRBJt8tPNUOGK0lV.Keul","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":28},"rootRelativePath":"assets/38d03852-b916-4f99-9414-182d93dec6e6.png"},"006f4293-b8dc-4979-b7d4-9dba022e0856":{"name":"Screenshot005.jpg_1","sourceUrl":null,"frameSize":{"x":845,"y":232},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZnzNbLue_2YUqEGdaYkZAut48KfFkxlG","loadedFromSource":true,"saved":true,"sourceSize":{"x":845,"y":232},"rootRelativePath":"assets/006f4293-b8dc-4979-b7d4-9dba022e0856.png"},"39e6e2a5-742e-467f-b92a-fdb53a2a78ca":{"name":"payload2","sourceUrl":null,"frameSize":{"x":845,"y":232},"frameCount":1,"looping":true,"frameDelay":12,"version":"uOog3ziSrI3H5TEpCq3i793PI96_wH3h","loadedFromSource":true,"saved":true,"sourceSize":{"x":845,"y":232},"rootRelativePath":"assets/39e6e2a5-742e-467f-b92a-fdb53a2a78ca.png"},"4681b56a-b5bb-424c-aa53-b07be94fb3c5":{"name":"lander.jpg","sourceUrl":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/4681b56a-b5bb-424c-aa53-b07be94fb3c5.png","frameSize":{"x":180,"y":184},"frameCount":1,"looping":true,"frameDelay":4,"version":"Y3JQLu3Hs4A4a99HbfQQmkJXH8AgXNzx","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":184},"rootRelativePath":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/4681b56a-b5bb-424c-aa53-b07be94fb3c5.png"},"494c659c-0cb8-4741-8761-d734c16c1ed0":{"name":"moon.jpg_1","sourceUrl":null,"frameSize":{"x":796,"y":223},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bvq9lryfOnsBn.DVNejkzTCVSNZAjqhm","loadedFromSource":true,"saved":true,"sourceSize":{"x":796,"y":223},"rootRelativePath":"assets/494c659c-0cb8-4741-8761-d734c16c1ed0.png"},"0153b76a-31a3-4a11-93cc-81f9a87d23f4":{"name":"landed final.jpg_1","sourceUrl":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/0153b76a-31a3-4a11-93cc-81f9a87d23f4.png","frameSize":{"x":600,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"HzlxZ8npGoumucUuZGMZb0m1Q0cf2PZ0","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":451},"rootRelativePath":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/0153b76a-31a3-4a11-93cc-81f9a87d23f4.png"},"44716f33-4bdc-4636-8f16-7b73c0ab7a6c":{"name":"launch button.jpg_1","sourceUrl":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/44716f33-4bdc-4636-8f16-7b73c0ab7a6c.png","frameSize":{"x":300,"y":295},"frameCount":1,"looping":true,"frameDelay":4,"version":"DhVmo0o2O43sVACKiN0NfRCJ_tw60YV1","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":295},"rootRelativePath":"assets/v3/animations/I1CaE_Y8I8RhMNnDfTzEfrsQadQwvjBiXCKTwJ38dRU/44716f33-4bdc-4636-8f16-7b73c0ab7a6c.png"},"3e3b0f06-e512-485b-b3c6-e8cd9627398c":{"name":"Upperstage","sourceUrl":null,"frameSize":{"x":65,"y":233},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sd0FZ1yH3c8FRbgnms944FWV5hPrbGKK","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":233},"rootRelativePath":"assets/3e3b0f06-e512-485b-b3c6-e8cd9627398c.png"},"9cfa0a9a-faec-47e0-bab1-e2937bcf6cf3":{"name":"landing.png_1","sourceUrl":"assets/v3/animations/PpxcsNvEqty1aOXnUv9Y1MG7Lmix4ZZD5fVwt559gCk/9cfa0a9a-faec-47e0-bab1-e2937bcf6cf3.png","frameSize":{"x":176,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"BpTMmCeWhJ_Jbsb8Pgg8gzZRaTRAZb4b","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":43},"rootRelativePath":"assets/v3/animations/PpxcsNvEqty1aOXnUv9Y1MG7Lmix4ZZD5fVwt559gCk/9cfa0a9a-faec-47e0-bab1-e2937bcf6cf3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//-------------PHASE I DECLARATIONS----------------------//
// Create sprites for rocket parts
var RocketR = createSprite(100, 50);
var RocketL = createSprite(150, 50);
var corestage = createSprite(43, 74);
var upperstage = createSprite(206, 50);
//Create sprites for launching 
var launchpad = createSprite(100, 380, 200, 50);
var launch = createSprite(241, 369);
var shoot = createSprite(200, 380);
var shoot1 = createSprite(300, 260);
var shoot2 = createSprite(180, 200);
//Set animation for rocket parts sprites
RocketR.setAnimation("Solid rocket boosters right.jpg_1");
RocketL.setAnimation("Solid rocket boosters left.jpg_1");
corestage.setAnimation(" liquid stage.jpg_1");
upperstage.setAnimation("Upperstage");
launch.setAnimation("launch button.jpg_1");
shoot.setAnimation("rocket shoot.jpg_1");
shoot1.setAnimation("rocket shoot.jpg_1");
shoot2.setAnimation("rocket shoot.jpg_1");    
//Scale the sprites as per screen
launch.scale = 0.2;
RocketR.scale = 0.4;
RocketL.scale = 0.4;
corestage.scale = 0.5;
upperstage.scale = 0.6;
shoot.scale = 0.5;
//make launch sprites invisible
shoot.visible=false;
shoot1.visible=false;
shoot2.visible=false;
launch.visible = false;
//Declare variables to check rocket sprites position
var part1position = 1;
var part2position = 1;
var part3position = 1;
var part4position = 1;
var elapsed=0;
//--------------------------------------------------------//
//-------------PHASE II DECLARATIONS----------------------//
var lander=createSprite(200,200);
var payloadinside=createSprite(194,150);
var moon=createSprite(100,350);
var landed=createSprite(200,200);
var stage5=createSprite(339,28);
var stage1 = createSprite(360,234);
var stage2 = createSprite(360, 264);
var stage3 = createSprite(360,294);
var stage4 = createSprite(360,324);
payloadinside.setAnimation("payload2");
moon.setAnimation("moon.jpg_1");
landed.setAnimation("landed final.jpg_1");
lander.setAnimation("lander.jpg");
stage5.setAnimation("landing.png_1");
stage1.setAnimation("Stage1btn.jpg_1");
stage2.setAnimation("Stage2btn.jpg_1");
stage3.setAnimation("Stage3btn.jpg_1");
stage4.setAnimation("Stage4btn.jpg_1");
payloadinside.visible = false;
lander.visible=false;
moon.visible=false;
landed.visible=false;
stage5.visible = false;
stage1.visible = false;
stage2.visible = false;
stage3.visible = false;
stage4.visible = false;
lander.scale=0.2;
payloadinside.scale = 0.21;
//-------------------------------------------------------//
//Function Draw
function draw() {
//-----------PHASE I CODE-------------------------------//
//Set backgroung white
if(stage1.visible==true){
background("black");
}
else{
background("white");
}
fill("BLACK");
text("LAUNCHPAD", 12, 350);
//When mouse is clicked on the sprite it takes correct position
//Corestage
if (mousePressedOver(corestage)) {
corestage.x = 130;
corestage.y = 290;
part1position = 0;
playSound("assets/corestagemounted.mp3", false);
}
//Right and Left  solid rocket booster
if ((mousePressedOver(RocketR)||mousePressedOver(RocketL))&&part1position==0) {
//Right rocket booster
RocketR.x = 156;
RocketR.y = 290;
//Left rocket booster
RocketL.x = 105;
RocketL.y =290;
part2position = 0;
part3position=0;
playSound("assets/rocket boosters.mp3", false);
}
//upperstage "Frozen Fuel" rocket booster 
if (mousePressedOver(upperstage)&& part1position==0&& part2position==0&& part3position==0) {
upperstage.x = 130;
upperstage.y =155;
part4position = 0;
playSound("assets/Payloadmounted.mp3", false);
}else{
}
//Check if all parts are mounted correctly
if (((part1position == 0 && part2position == 0) && part3position == 0) && part4position == 0) {
launch.visible = true;
}
//Get value of system time in milliseconds
var starttime=getTime();
if(mousePressedOver(launch)){
//Destroy launch button
launch.destroy();
playSound("assets/launch countdown.mp3", false);
timedLoop(1000,function(){
  background("white");
//Calculate time in seconds
//gets current time in milliseconds
  var currtime=getTime();
//provides elapsed time in millisecs
   elapsed=currtime-starttime;
//convert into seconds
  elapsed=Math.round(elapsed/1000);
//timer T-10 seconds to launch
  elapsed=10-elapsed;
//When timeer reaches -1 launch the rocket with sound affects
  if(elapsed==-1)
  {
    stopTimedLoop();
 
    playSound("assets/430071_SOUNDDOGS__ro.mp3", false);
    upperstage.setSpeedAndDirection(-1, 90);
    RocketL.setSpeedAndDirection(-1, 90);
    RocketR.setSpeedAndDirection(-1, 90);
    corestage.setSpeedAndDirection(-1, 90);
    shoot.setSpeedAndDirection(-1, 90);
    shoot1.setSpeedAndDirection(-1, 90);
 }
  }); 
}
//-------------------------------------------------------//
//-------------PHASE II CODE-------------------------//
  if(corestage.y<-2){
  corestage.velocityY=0;
  RocketR.velocityY=0;
  RocketL.velocityY=0;
  upperstage.velocityY=0; 
  launchpad.destroy();
  corestage.x=100;
  corestage.y=240;
  RocketR.x=109;
  RocketR.y=264;
  RocketL.x=80;
  RocketL.y=225;
  upperstage.x=180;
  upperstage.y=160;
  shoot.destroy();
  shoot1.destroy();
  shoot2.destroy();
 stopSound("assets/430071_SOUNDDOGS__ro.mp3"); 
upperstage.rotation=45;
RocketR.rotation=45;
RocketL.rotation=45;
corestage.rotation=45;
payloadinside.rotation = -40;
 stage1.visible = true;

 stopSound(); 
}

if (mousePressedOver(stage1)) {
    RocketR.setSpeedAndDirection(-2, -90);
    RocketL.setSpeedAndDirection(-2, 45);
     stage2.visible = true;

}
if (mousePressedOver(stage2)) {
    upperstage.destroy();
    payloadinside.visible = true;
     stage3.visible = true;

}
if (mousePressedOver(stage3)) {
    corestage.setSpeedAndDirection(-2, -90);
    stage4.visible = true;
}
if (mousePressedOver(stage4)) {
    payloadinside.destroy();
    lander.visible=true;
    moon.visible=true;
    stage5.visible=true;
}
if (mousePressedOver(stage5)) {
  landed.visible=true;
  playSound("assets/category_female_voiceover/congratulations_female.mp3", false);
}
//-------------------------------------------------------//
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
