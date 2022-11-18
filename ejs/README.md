# Welcome to <b>Ethans</b> Js course

### *{Note} it is reccomended that you use [https://vscode.dev/](https://vscode.dev/) for code editing*

> You can scroll to whatever <b>tutorial</b> you would like.

<!-- Moss.js basics -->
## <em>MossJs basics</em>

### Make a new html file

``` html
<!DOCTYPE html>
<html>
 <head>
  <title>myFirstMossProject</title>
 </head>
 <body>
  <p align="center">
   <canvas id="myCanvas"></canvas>
  </p>
  <script src="https://classicmc-studios.github.io/js/moss.js"></script>
  <script src="main.js"></script>
 </body>
</html>
```

> You will not have to touch this again unless you want **images**

### Create your **main.js** file

> **Always** start your main.js file with

``` js
// The operators 720 and 480 are for canvas width and height
createCanvas(720,480);
```
> Next you can set your **background color**

``` js
// The operator is hex code colors
bg("#000000");
```
> You can call bg(); **whenever** you want.<br/>
> Next add your game loop

``` js
//Main game loop
window.main = function (){
    window.requestAnimationFrame( main );
    // Whatever is in here will run on a set time
    // Usually 24fps
};main();
```

> To make a **variable** use

``` js
var myVarName = value;
// The value can be a string, char, int, float, double, and more.
```

> Variable values do not need to be said ex. boolean and you can change types automaticly.<br/>
> {Note} semicolons are not required but reccomended.<br/>
> Draw a **rectangle**

``` js
// The opacity is an optional operator
rect(x,y,width,height,opacity);
```

> To change **color** use 

```js 
// The operator is for color
selectColor("#ffffff");
```


This site is <b>Open Source</b>, help us <a href="">improve</a>!
