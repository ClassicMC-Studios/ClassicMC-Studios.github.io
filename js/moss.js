canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
class Draw{
    mu = setInterval(draw,1);
}
class Studio{
    printf(text){
        alert(text.toString());
    }
    hits(x,y,width,height,xx,yy,ww,hh){
        if(x < xx + ww &&
        x + width > xx &&
        y < yy + hh &&
        y + height > yy){
            return true;
        }  
        else{
            return false;
        }
    }
    input(ipt){
        return prompt(ipt.toString());
    }
    confirm(conf){
        return confirm(conf.toString());
    }
    random(max){
        return Math.floor(Math.random() * max);
    }
}
function createCanvas(width,height){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.stroke = true;
}
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
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
