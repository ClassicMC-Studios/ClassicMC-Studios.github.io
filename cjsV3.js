const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 500;
let eachPos = []
let standardWidth = 20;
let standardHeight = 20;
let ww; let hh;
function createCanvas(w,h,bw,bh){
    standardHeight =bh; standardWidth = bw;
     ww  =w; hh = h;
    c.fillStyle = "white";
    c.fillRect(0,0,720,490);
    let tx = 10; let ty = 10;
    for(let y = 0; y < h; y++){
        for(let i = 0; i <w; i++){
           if(tx < 700){
            c.fillStyle = "lightgray";
            c.fillRect(tx,ty,bw,bh);
            tx += standardWidth+5;
            eachPos.push({x:tx,y:ty,xx:i,yy:y})
           }
        }
        tx = 10;
        if(ty < 460){
            ty +=standardHeight+5;
        }
    }
}
function createOriginalCanvas(){
    c.fillStyle = "white";
    c.fillRect(0,0,720,480);
    c.fillStyle = "lightgray";
    standardHeight =50; standardWidth = 50;
    let tx = 90; let ty = 100;
    for(let y = 0; y < 6; y++){
        for(let i = 0; i <8; i++){
            c.fillStyle = "lightgray";
            c.fillRect(tx+15,ty,standardWidth,standardHeight);
            tx += 70;
            eachPos.push({x:tx,y:ty,xx:i,yy:y})
        }
        tx = 90;
        ty +=70;
    }
}
function clearOriginalCanvas(){
    c.fillStyle = "white";
    c.fillRect(0,0,720,480);
    c.fillStyle = "lightgray";
    standardHeight =50; standardWidth = 50;
    let tx = 90; let ty = 100;
    for(let y = 0; y < 6; y++){
        for(let i = 0; i <8; i++){
            c.fillStyle = "lightgray";
            c.fillRect(tx+15,ty,standardWidth,standardHeight);
            tx += 70;
        }
        tx = 90;
        ty +=70;
    }
}
function clear(){
    let tx = 10; let ty = 10;
    for(let y = 0; y < hh; y++){
        for(let i = 0; i <ww; i++){
            if(tx < 700){
                c.fillStyle = "lightgray";
                c.fillRect(tx,ty,standardWidth,standardHeight);
                tx += standardWidth+5;
            }
        }
        tx = 10;
        if(ty < 460){
            ty +=standardHeight+5;
        }
    }
}
function setDot(x,y,color){
    c.fillStyle = color;
    for(let z = 0; z < eachPos.length; z++){
        if(x == eachPos[z].xx && y == eachPos[z].yy){
            c.fillRect(eachPos[z].x-(standardWidth+5),eachPos[z].y,standardWidth,standardHeight);
        }
    }
}
function hits(x,y,xx,yy){
    if(x == xx && y == yy){
        return true;
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
