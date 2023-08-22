canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
function image(img,x,y,w,h,opacity=1){
        c.globalAlpha = opacity;
        c.drawImage(img,x,y,w,h);
        c.globalAlpha = 1;
    }
function bg(color,opacity = 1){
    c.globalAlpha = opacity;
    c.fillStyle = color;
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle = "#ffffff";
}
function rect(x,y,w,h,opacity = 1){
    c.globalAlpha = opacity;
    c.fillRect(x,y,w,h);
    if(this.stroke){
        c.strokeRect(x,y,w,h);
    }
}
function ellipse(x,y,r,opacity = 1){
    c.globalAlpha = opacity;
    c.beginPath();
    if(this.stroke){
        c.arc(x,y,r,0,Math.PI *2,);
        c.lineWidth += 10;
        c.stroke();
        c.lineWidth -= 10;
    }
    else{
        c.arc(x,y,r,0,Math.PI *2,);
    }
    c.fill();
    c.globalAlpha = 1;
}
function clear(){
    while(true){
        console.log("Draw project break/>");
    }
}
function triangle(x1,y1,x2,y2,x3,y3){
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineTo(x3, y3);
    c.closePath();
    c.fill();
}
function text(text,x,y,size,font,opacity=1){
    c.globalAlpha = opacity;
    c.font = 'bold '+size+'px '+font+'';
    c.fillText(text,x,y);
}
//TODO: Images
function line(x,y,xx,yy,opacity=1){
    c.globalAlpha = opacity;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(xx,yy);
    c.stroke();
}
function selectColor(color){
    c.fillStyle = color;
}
function strokeColor(color){
    c.strokeStyle = color;
}
function noStroke(){
    this.stroke = false;
}
function strokeActive(){
    this.stroke = true;
}
function strokeSize(size){
    c.lineWidth = size;
}
var canvas = document.getElementById("myCanvas")
let rocks = {r0:document.getElementById("r0"),
             r1:document.getElementById("r1"),
             r2:document.getElementById("r2"),
             r3:document.getElementById("r3"),
             rb0:document.getElementById("rb0"),
             rb1:document.getElementById("rb1"),
             rb2:document.getElementById("rb2"),
             rb3:document.getElementById("rb3")}
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
    if(cr == -2){
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r0,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
        selectColor("white")
        text("Rock Simulator",window.innerWidth/2-135-10,window.innerHeight/2-130-5,"48","VT323");
        text("Pocket 2023",window.innerWidth/2-77-10,window.innerHeight/2-100,"48","VT323");
    }
    if(cr == -1){
        selectColor("#00317A");
        triangle(window.innerWidth,window.innerHeight/2,window.innerWidth,100,window.innerWidth/2,window.innerHeight/2);
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r0,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
        selectColor("white");
        text("Rock Simulator",window.innerWidth/2-135-10,window.innerHeight/2-130-5,"48","VT323");
        text("Pocket 2023",window.innerWidth/2-77-10,window.innerHeight/2-100,"48","VT323");
        if(window.innerWidth > window.innerHeight){
            text("Press Up (^) for Day",window.innerWidth/2,window.innerHeight-130,"48","VT323")
            text("Press Up (v) for Night",window.innerWidth/2,window.innerHeight-90,"48","VT323")
           }else{
            text("(^)",window.innerWidth/2-40,window.innerHeight/2+140,"48","VT323")
            text("(v)",window.innerWidth/2-40,window.innerHeight/2+180,"48","VT323")
        }    
    }
    if(cr == 0){
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r0,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == 1){
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r1,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == 2){
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r2,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == 3){
        selectColor("green")
        rect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/2);
        image(rocks.r3,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == -3){
        selectColor("green")
        bg("green")
        image(rocks.rb0,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == -4){
        selectColor("green")
        bg("green")
        image(rocks.rb1,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == -5){
        selectColor("green")
        bg("green")
        image(rocks.rb2,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
    if(cr == -6){
        selectColor("green")
        bg("green")
        image(rocks.rb3,window.innerWidth/2-(200/2),window.innerHeight/2-(150/2),200,150);
    }
};redraw();
canvas.addEventListener('click', function(event) {
    x = event.clientX;
    y = event.clientY;
    if(cr ==-1){
        if(y >= window.innerHeight/2){
            sky = "db"
        }
    }
    if(y >= 50){
        if(cr == -3 || cr == -4 || cr == -5 || cr == -6){
            if(cr == -3){
                cr = 0;
            }
            if(cr == -4){
                cr = 1;
            }
            if(cr == -5){
                cr = 2;
            }
            if(cr == -6){
                cr = 3;
            }
        }else{
            if(x <= window.innerWidth/2){
                if(cr == -2){cr = -1;}
                else if(cr == -1){cr = 0;}
                else if(cr == 0){cr = 3;}
                else if(cr == 1){cr = 0;}
                else if(cr == 2){cr = 1;}
                else if(cr == 3){cr = 2;}
            }else{
                if(cr == -2){cr = -1;}
                else if(cr == -1){cr = 0;}
                else if(cr == 0){cr = 1;}
                else if(cr == 1){cr = 2;}
                else if(cr == 2){cr = 3;}
                else if(cr == 3){cr = 0;}
            }
        }
    }else{
        if(cr == 0){cr = -3}
        if(cr == 1){cr = -4}
        if(cr == 2){cr = -5}
        if(cr == 3){cr = -6}
    }
    redraw();
})
window.main = function(){
    requestAnimationFrame( main );
    redraw();
};main();
