createCanvas(720,480);
var canvas = document.getElementById("myCanvas")
let rocks = {r0:document.getElementById("r0"),
             r1:document.getElementById("r1"),
             r2:document.getElementById("r2"),
             r3:document.getElementById("r3")}
let cr = -2;
let sky = "lb";
function redraw(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(sky == "db"){
        bg("#00317A");
    }else{
        bg("#3386FF");
    }
    noStroke();
    if(cr == -1){
        selectColor("#00317A");
        rightTriangle(window.innerWidth,window.innerHeight/2,window.innerWidth,100,window.innerWidth/2,window.innerHeight/2)
    }
    selectColor("green")
    rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2)
    if(cr == 0||cr == -1||cr ==-2){image(rocks.r0,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2),64*5,64*5);}
    else if(cr == 1){image(rocks.r1,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);}
    else if(cr == 2){image(rocks.r2,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2),64*5,64*5);}
    else if(cr == 3){image(rocks.r3,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);}
    else if(cr == 5){
        bg("green");
        image(rocks.r3,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);
        selectColor("darkgreen");
    }
    else if(cr == 4){
        bg("green");
        image(rocks.r1,window.innerWidth/2-(64*5/2),window.innerHeight/2-(64*5/2)-15,64*5,64*5);
        selectColor("darkgreen");
    }
    selectColor("white");
    if(cr == -1||cr==-2){text("Rock Simulator",window.innerWidth/2-135-10,window.innerHeight/2-130-5,"48","VT323")
    text("Pocket 2023",window.innerWidth/2-77-10,window.innerHeight/2-100,"48","VT323")}
    if(cr == -1){
       if(window.innerWidth > window.innerHeight){
        text("Press Up (^) for Day",window.innerWidth/2,window.innerHeight-130,"48","VT323")
        text("Press Up (v) for Night",window.innerWidth/2,window.innerHeight-90,"48","VT323")
       }else{
        text("(^)",window.innerWidth/2-40,window.innerHeight/2+100,"48","VT323")
        text("(v)",window.innerWidth/2-40,window.innerHeight/2+140,"48","VT323")
       }
    }
};redraw();
canvas.addEventListener('click', function(event) {
    x = event.clientX;
    y = event.clientY;
    if(cr == -2){
        cr = -1;
    }
    else if(cr == -1){
        if(y <= window.innerHeight/2){
            sky = "lb";
        }else{
            sky = "db";
        }
        cr = 0;
    }
    else if(x <= window.innerWidth/2){
        next();
    }else{
        prev();
    }
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
    if(cr <= 0){
        cr = 3;
    }else{
        cr--
    }
}
function prev(){
    if(cr >= 3){
        cr = 0;
    }else{
        cr++
    }
}
window.main = function(){
    requestAnimationFrame( main );
    redraw();
};main();
