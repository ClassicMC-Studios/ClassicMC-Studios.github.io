createCanvas(720,480);
bg("blue");
new Draw();
const stdio = new Studio();
let mousePos={x:250+(50/2)+(250/2)-50,y:300};
let rct ={
    x:250,
    y:350,
    width:200,
    height:100
}
function draw(){
    noStroke();
    bg("lightgray");
    selectColor("gray");
    text("Mouse test no. 1 in Moss",10,35,"24","sans-serif");
    text("\"Click the green square\"",10,50,"10","sans-serif");
    selectColor("green");
    rect(rct.x,rct.y,rct.width,rct.height,0.5);
    canvas.addEventListener('click', function(evt){
        mousePos = getMousePos(canvas,evt);
        if(isInside(mousePos,rct)){
            rct.y = stdio.random(300);
            rct.x = stdio.random(600);
        }
    });
    selectColor("orange")
    rect(mousePos.x-25,mousePos.y-25,50,50,0.5);
}
