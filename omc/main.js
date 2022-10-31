const stdio = new Studio();
var color = {gray:"#B8B8B8",black:"#000000",red:"#FF0000",dr:"#800000",mr:"#993333"}
var player = {x:370,y:100}
var scene = 0;
let textView = false;
let box1 = false; let triggerChest = false;
let treeRand = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,180,200,230,270,300,350];
let textS4 = ["There is nothing here, Rest.","Discipline = Freedom","It is time to rest your soul."]
let tX = 190;let tY = 100;let tYP = 0.5;
const num = random(treeRand.length);const treeS4X = random(300);const treeS4Y = treeRand[num];const randomSaying = textS4[random(textS4.length)]
createCanvas(480,360);
bg("#000000");
noStroke();
function oldDisplay(){
    var oldLines = 0;
    selectColor(color.black);
    for(var i = 0;i < 37;i++){
        rect(0,oldLines,500,5);
        oldLines += 10;
    }
}
function random(max){return Math.floor(Math.random() * max);}
function omc__init__(){
    selectColor(color.mr)
    if(scene == 1){rect(75,140,15,60);rect(65,160,15,30);rect(55,180,30,20);rect(80,185,15,15);rect(90,150,25,10);rect(85,180,10,20);rect(85,190,20,10);rect(90,170,15,10);}
    if(scene == 3||scene == 5){rect(75+200,140,15,60);rect(65+200,160,15,30);rect(55+200,180,30,20);rect(80+200,185,15,15);rect(90+200,150,25,10);rect(85+200,180,10,20);rect(85+200,190,20,10);rect(90+200,170,15,10);}
}
function chest__init__(){
    selectColor(color.mr);
    rect(100,100,60,30);rect(110,90,40,30);
}
function player__init__(){
    selectColor(color.red);
    //Head
    rect(player.x+5,player.y-10,10,15);
    //Body
    rect(player.x,player.y,20,30);
    //Arms
    rect(player.x-10,player.y+5,10,10);rect(player.x+20,player.y+5,10,10);
}
function lake__init__(){
    rect(120,150,120,60);rect(120+10,150-10,100,80);
}
function tree__init__(){
    var treeX = 15;
    var treeY = 10;
    function drawTree(){
        selectColor(color.dr);
        rect(treeX,treeY,20,60);
        rect(treeX-20,treeY+30,60,20);
        rect(treeX-10,treeY+10,40,20);
    }
    for(var i = 1;i < 7;i++){
        drawTree();
        treeX += 70;
    }
    for(var i = 1;i < 5;i++){
        drawTree();
        treeY += 70;
    }
    for(var i = 1;i < 7;i++){
        drawTree();
        treeX -= 70;
    }
    for(var i = 1;i < 5;i++){
        drawTree();
        treeY -= 70;
    }
    //Blocking tree
    if(scene==1){treeX = 295;treeY = 80;drawTree();}
}
function treeS4(){
    selectColor(color.dr);
    rect(treeS4X,treeS4Y,20,60);
    rect(treeS4X-20,treeS4Y+30,60,20);
    rect(treeS4X-10,treeS4Y+10,40,20);
}
function render(){
    bg("#000000");
    if(scene == 0){
        selectColor(color.red);
        text("Omc",tX-60,tY,70);
        oldDisplay();
        selectColor(color.red);
        text("A remake of a minigame by, Scott Cawthon",5,310,15);
        text("Press space to begin",6,330,15);
    }
    else if(scene == 1){
        omc__init__();
        player__init__();
        tree__init__();
        lake__init__();
        //Lines
        oldDisplay();
        if(textView){
            selectColor(color.black);
            rect(100,90,300,100);
            selectColor(color.red);
            text("Stay for a while...",140,145,30);

        }
        selectColor("#00cc00");
    }
    if(scene == 2){
        chest__init__();
        player__init__();
        tree__init__();
        oldDisplay();
        selectColor("#00cc00");
    }
    if(scene == 3){
        selectColor(color.black);
        rect(410,140,70,70);
        omc__init__();
        player__init__();
        tree__init__();
        oldDisplay();
        selectColor("#00cc00");
    }
    if(scene == 4){
        player.x = 160;
        player.y = 170;
        omc__init__();
        player__init__();
        tree__init__();
        oldDisplay();
        selectColor(color.black);
        rect(100,90,300,100);
        selectColor(color.red);
        text("Leave the demon",130,125,30);
        text("to his demons there ",130,148,30);
        text("is nothing else",130,172,30);
        selectColor("#00cc00");
    }
    if(scene == 5){
        player.x = 160;
        player.y = 170;
        player__init__();
        omc__init__();
        oldDisplay();
        selectColor("#00cc00");
    }
    if(scene == 6){
        player__init__();
        treeS4();
        oldDisplay();
        selectColor(color.dr);
        text(randomSaying,5,10,10);
    }
    //Hitbox rendering
    if(box1&&scene==1){
        selectColor(color.black);
        rect(410,140,70,70);
    }
    if(triggerChest&&scene==2){
        selectColor(color.black);
        rect(410,140,70,70);
    }
}
document.addEventListener('keydown',function (evt){
    if(scene != 4){
        if(textView == false){
            if(event.keyCode == 40){
                player.y += 10;
            }
            if(event.keyCode == 37){
                player.x -= 10;
            }
            if(event.keyCode == 38){
                player.y -= 10;
            }
            if(event.keyCode == 39){
                player.x += 10;
            }
        }
    }
    if(event.keyCode == 32){
        if(scene == 0){
            scene = 1;
        }
        if(scene == 1){
            if(player.y >= 120 && player.y <= 210 && player.x >= 390){
                //Transition to scene 2
                scene = 2;
                player.x = 60;
                player.y = 170;
                render();

            }
            if(player.y >= 120 && player.y <= 200 && player.x >= 40 && player.x <= 100){
                //Talking to omc
                textView = true;
                box1 = true;
            }
        }
        if(scene == 2){
            triggerChest = false;
            if(player.y >= 70 && player.y <= 130 && player.x >= 80 && player.x <= 170){
                triggerChest = true;
            }
            if(player.y >= 120 && player.y <= 210 && player.x >= 390){
                //Transition to scene 3
                scene = 3;
                player.x = 60;
                player.y = 170;
                render();
            }
        }
        if(scene == 3){
            if(player.y >= 120 && player.y <= 200 && player.x >= 240 && player.x <= 310){
                scene = 4;
                render();
            }
            if(player.y >= 120 && player.y <= 210 && player.x >= 390){
                //Hidden scene
                player.x = 60;
                player.y = 170;
                scene = 6;  
            }
        }
        if(textView&&scene!=1){
            textView = false;
        }
    }
    if(event.keyCode == 13){
        if(scene == 4){
            scene = 5;
        }
        if(textView&&scene==1){
            textView = false;
        }
    }
});
window.main = function (){
    window.requestAnimationFrame( main );
    render();
    if(!player.y >= 120 && !player.y <= 200 && !player.x >= 40 && !player.x <= 100){
        //Talking to omc
        textView = false;
        box1 = false;
    }
    //My python replacement for Sin waves
    if (tY <= 100){tY+=tYP;}
    else{tYP = -tYP;tY -=0.5;}
    if (tY <= 50){tYP = 0.5;}
};
main();