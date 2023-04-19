function text(text,x,y,size,font,opacity=1){
    c.globalAlpha = opacity;
    c.font = 'bold '+size+'px '+font+'';
    c.fillText(text,x,y);
}
let idle = [
    ["cls"],["#a21f1f"],["#7b0909"],["#a21f1f"],["cls"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["cls"],["cls"],["black"],["black"],["cls"],
    ["cls"],["#7b0909"],["#a21f1f"],["#a21f1f"],["#a2671f"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["cls"]
]
let moving = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["#a21f1f"],["#7b0909"],["#a21f1f"],["cls"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["cls"],["#7b0909"],["black"],["black"],["cls"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["#a2671f"],
]
let cls = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
let tr = [
    ["black"],["black"],["black"],["black"],["black"],
    ["black"],["cls"],["cls"],["cls"],["cls"],  
    ["black"],["cls"],["cls"],["cls"],["cls"],
    ["black"],["cls"],["cls"],["cls"],["cls"],  
    ["black"],["cls"],["cls"],["cls"],["cls"],
] 
let tl = [
    ["black"],["black"],["black"],["black"],["black"],
    ["cls"],["cls"],["cls"],["cls"],["black"],  
    ["cls"],["cls"],["cls"],["cls"],["black"],
    ["cls"],["cls"],["cls"],["cls"],["black"],  
    ["cls"],["cls"],["cls"],["cls"],["black"],
] 
let t = [
    ["black"],["black"],["black"],["black"],["black"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
let lFix = [
    ["black"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
let rS = [
    ["black"],["cls"],["cls"],["cls"],["cls"],
    ["black"],["cls"],["cls"],["cls"],["cls"],  
    ["black"],["cls"],["cls"],["cls"],["cls"],
    ["black"],["cls"],["cls"],["cls"],["cls"],  
    ["black"],["cls"],["cls"],["cls"],["cls"],
] 
let tF = [
    ["black"],["black"],["black"],["black"],["black"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
let tF2 = [
    ["cls"],["cls"],["cls"],["cls"],["black"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
writeTileToAddress(cls);
writeTileToAddress(tr);writeTileToAddress(tl);writeTileToAddress(t);writeTileToAddress(lFix);writeTileToAddress(rS);
writeTileToAddress(tF);writeTileToAddress(tF2);
let bg1 = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
  0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,5,0,0, 
  0,0,0,0,0,0,0,0,0,1,3,4,0,0,0,2,0,0,
  1,3,3,3,3,3,3,3,3,4,0,0,0,0,0,7,6,2
]
// init fall variables
let x = 0;
let y = 0;
let acc = 0.1;
let floor = 400;
let floating = false;
// calcualtes jumps
function fall(){
    if(y <= floor){
        // slow speed down if floating
        if(!floating){
            acc +=0.3;
        }else{
            acc +=0.05;
        }
        y+=acc
    }else{
        y= floor+1;
    }
}
function action(button){
    if(button == 'x'&& y == floor+1){
        // use jump with x key
        y-=2;
        acc=-6;
        floating = false;
    }
    if(button == 'z'&&y!=floor+1){
        // only runs if not touching the ground to activate float
        floating = true;
        if(acc<=0.1){
            acc = 0.1
        }
    }
}
// animation for movement
let toDraw = 0
function draw(){
    if(toDraw == 1){
        toDraw = 0;
        return;
    }else{toDraw = 1;return;}
}
let animate = setInterval(draw,200);
writeSpriteToAddress(idle);
writeSpriteToAddress(moving);
// draw the player depending on the animation
function player(){ 
    if(key != "none"){
        renderSpriteFromAddress(toDraw,x,y)
    }else{
        renderSpriteFromAddress(0,x,y);
        animate = undefined;
    }
}
let xAcc = 0;
let lk = "";
window.main = function(){
    fall();
    c.fillStyle = "white"
    c.fillRect(0,0,720,480)
    requestAnimationFrame( main );
    renderBgFromAddress(bg1,0,0);
    player();
    if(key == "r"){
        x+=2+xAcc;
        if(xAcc <= 4.5){
            xAcc+=0.1;
        }
        lk ="r"
    }if(key!="r"&&key!="l"){
        if(xAcc>0){
            xAcc -=0.2;
        }else{
            xAcc =0;
        }
        if(lk=="l"){
            x-=xAcc;
        }else{
            x+=xAcc;
        }
    }
    if(key == "l"){
        x-=2+xAcc;
        if(xAcc <= 4.5){
            xAcc+=0.1;
        }
        lk="l"
    }
    text(acc,100,100,"32","serif");
    text(floating,100,150,"32","serif");
    text(y,100,200,"32","serif");
    text(x,100,250,"32","serif");
    text(floor,100,300,"32","serif");
    text(xAcc,100,350,"32","serif");
    if(x >= 326&&x<=404){
        floor = 360;
    }else if(x >= 404&&x<=608){
        floor = 320;
    }else{
        floor = 400;
    }
    if(y >= floor+1){
        floating = false;
    }
};main();
