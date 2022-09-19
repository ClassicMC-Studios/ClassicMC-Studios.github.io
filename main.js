let newscollapse;
        function clickedKisou(){
            if(document.getElementById("tbc").innerHTML == "Hi! My Name is Austin. How are you?"){
                document.getElementById("tbc").innerHTML = "Lou!UlupnomearluAustin.Atoserarlu? ";
            }
            else{
                document.getElementById("tbc").innerHTML = "Hi! My Name is Austin. How are you?";
            }
        }
        function showBasics(){
            if(document.getElementById("un").innerHTML == "Hi = <em>Lou</em>"){
                document.getElementById("un").innerHTML = "";
                document.getElementById("quatre").innerHTML = "";
                document.getElementById("cinq").innerHTML = "";
                document.getElementById("six").innerHTML = "";
                document.getElementById("sept").innerHTML = "";
            }
            else{
                document.getElementById("un").innerHTML = "Hi = <em>Lou</em>";
                document.getElementById("quatre").innerHTML = "I am = <em>Jtarlu</em>";
                document.getElementById("cinq").innerHTML = "How are you = <em>Atoserarlu?</em>";
                document.getElementById("six").innerHTML = "Good = <em>Trej</em>";
                document.getElementById("sept").innerHTML = "Bad = <em>Chaa</em>";
            }
        }
        function darkmodebeta(){
            if(document.body.style.backgroundColor == "black"){
                document.body.style.backgroundColor = "white";
            }
            else{
                document.body.style.backgroundColor = "black";
            }
        }
        function showNews(){
            if(newscollapse){
                document.getElementById("news1").innerHTML = "";
                document.getElementById("news2").innerHTML = "";
                document.getElementById("news3").innerHTML = "";
                document.getElementById("news4").innerHTML = "";
                newscollapse = false;
            }
            else{
                document.getElementById("news1").innerHTML = "<b>The Last Leaf</b><br/>Working on basic Pixel Art testing<br/>110 Lines of code";
                document.getElementById("news2").innerHTML = "<b>c.Js</b><br/>Version 2.0 out now!<br/><em>Includes</em><br/>New X,Y position based system<br/>Updated Rect to Dot";
                document.getElementById("news3").innerHTML = "<b>This Website</b><br/>Added Poetry Website<br/>Updating Links<br/>241 Combined lines of code";
                document.getElementById("news4").innerHTML = "<b>IRL</b><br/>Learning French & Norwegian";
                newscollapse = true;
            }
        } 
