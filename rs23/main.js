createCanvas(720,480);
var canvas = document.getElementById("myCanvas")
let rocks = {r0:document.getElementById("r0"),
             r1:document.getElementById("r1"),
             r2:document.getElementById("r2"),
             r3:document.getElementById("r3")}
let cr = -1;
let amnt = 0;
let opc = 1;
function redraw(){
    bg("skyblue");
    noStroke();
    selectColor("green")
    text(amnt.toString(),10,23,"24","sans-serif")
    rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2)
    if(cr == 0||cr == -1){image(rocks.r0,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2),64*5,64*5);}
    else if(cr == 1){image(rocks.r1,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);}
    else if(cr == 2){image(rocks.r2,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2),64*5,64*5);}
    else if(cr == 3){image(rocks.r3,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);}
    else if(cr == 4){
        bg("green");
        image(rocks.r3,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);
        selectColor("darkgreen");
        text(amnt.toString(),10,23,"24","sans-serif");
    }
    else if(cr == 5){
        bg("green");
        image(rocks.r1,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);
        selectColor("darkgreen");
        text(amnt.toString(),10,23,"24","sans-serif");
    }
    selectColor("black");
    text("Rock Simulator",window.innerWidth/2-135,window.innerHeight/2-130,"36","sans-serif",opc)
    text("2023",window.innerWidth/2-45,window.innerHeight/2-100,"36","sans-serif",opc)
    selectColor("black");
    selectColor("yellow");
    ellipse(window.innerWidth-10,10,50);
};redraw();
function fade(){
    if(opc >= 0.01){
        opc -= 0.01
        redraw();
    }else{
        opc = 0;
    }
}
canvas.addEventListener('click', function(event) {
    next();
    amnt ++;
    x = event.clientX;
    y = event.clientY;
    if(y <= 50){
        if(cr == 0||cr == 1){
            cr = 4;
        }
        else{
            cr = 5
        }
    }
    redraw();
});
function next(){
    if(cr == -1){cr = 0;setInterval(fade,20)}
    if(cr == 0){cr = 1;}
    else if(cr == 1){cr = 2}
    else if(cr == 2){cr = 3}
    else{cr = 0}
}