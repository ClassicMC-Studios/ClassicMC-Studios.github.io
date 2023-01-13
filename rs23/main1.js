createCanvas(400,400);
function resetSize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;}
window.main = function(){
    requestAnimationFrame( main );
    resetSize()
    bg("blue")
    selectColor("black");
    triangle(window.innerWidth,window.innerHeight,0,window.innerHeight,window.innerWidth,0);
};main();