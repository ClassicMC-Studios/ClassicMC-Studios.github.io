const es = new Es(720,480);
let project = {px:100,py:100,acc:1,onGround:false}
let leftKeyPresed = false;
let rightKeyPressed = false;
let fall = setInterval(onFall,1);
//Objects
let player = {w:50,h:50}
let objects = [];
function onFall(){
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
    playerMove();
    if(checkAllCol()){
        project.acc = -0.1;
        project.py -=0.0001;
    }
    else{
        project.acc += 0.01;
        project.py += project.acc;
    }
    if(checkAllLeftRightCol()&&rightKeyPressed){project.px --;}
    if(checkAllLeftRightCol()&&leftKeyPressed){project.px ++;} 
}
function checkAllCol(){
    if(es.checkCollisions(project.px,project.py,player.w,player.h,0,470,700,10)||es.checkCollisions(project.px,project.py,player.w,player.h,300,430,100,100)){return true;}
    if(es.checkCollisions(project.px,project.py,player.w,player.h,500+20,400,100,100)){return true;}
}
function checkAllLeftRightCol(){
    if(es.checkCollisions(project.px,project.py,player.w,player.h,498+20,402,104,100)||es.checkCollisions(project.px,project.py,player.w,player.h,297,432,105,100)){
        return true;
    }
}
//Just a whole buch of garbage to get the movement working correctly
function keyPressed(evt){
    if(evt.keyCode == 37){leftKeyPressed = true;}
    if(evt.keyCode == 39){rightKeyPressed = true;}
}
function keyReleased(evt){
    if(evt.keyCode == 37){leftKeyPressed = false;}
    if(evt.keyCode == 39){rightKeyPressed = false;}
}
function playerMove(){
    if(leftKeyPressed){project.px --;}
    if(rightKeyPressed){project.px ++;}
}
document.addEventListener('keydown',function (evt){
    if(event.keyCode == 32&&project.onGround == true){
        project.acc = -1.2;
        project.py -=1.2;
        if(project.onGround == true){
            project.acc = -1.2;
        project.py -=1.2;
        }
    }
});
function redraw(){
    es.background("skyblue");
    es.rect(0,470,720,10,"#000000");
    es.rect(300,430,100,100,"#000000");
    es.rect(500+20,400,100,100,"#000000");
    es.rect(project.px,project.py,player.w,player.h,"#00cc00",0.5);
    es.text("eSharp Test Platformer",10,460,"#000000",0.5);
    //Debug text
    //es.text(project.acc,10,50,"blue");
    //es.text(project.onGround,10,100,"blue");
    //Side Boxes
    //es.rect(297,432,105,100,"#00ff00",0.5);
    //es.rect(498+20,402,104,100,"#00ff00",0.5);
}
window.main = function(){
    window.requestAnimationFrame( main );
    redraw();
    if(project.acc == -0.1){
        project.onGround = true;
    }
    else{
        project.onGround = false;
    }
};main();