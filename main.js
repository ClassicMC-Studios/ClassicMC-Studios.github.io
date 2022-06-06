let newscollapse;
        function clickedKisou(){
            if(document.getElementById("tbc").innerHTML == "Hi! My Name is Austin. How are you?"){
                document.getElementById("tbc").innerHTML = "Ki! Be tu Austin. Ker oh see? ";
            }
            else{
                document.getElementById("tbc").innerHTML = "Hi! My Name is Austin. How are you?";
            }
        }
        function showBasics(){
            if(document.getElementById("un").innerHTML == "Hi = <em>Ki</em>"){
                document.getElementById("un").innerHTML = "";
                document.getElementById("deux").innerHTML = "";
                document.getElementById("trois").innerHTML = "";
                document.getElementById("quatre").innerHTML = "";
                document.getElementById("cinq").innerHTML = "";
                document.getElementById("six").innerHTML = "";
                document.getElementById("sept").innerHTML = "";
            }
            else{
                document.getElementById("un").innerHTML = "Hi = <em>Ki</em>";
                document.getElementById("deux").innerHTML = "Hello = <em>Kish</em>";
                document.getElementById("trois").innerHTML = "What is your name = <em>Qos nom</em>";
                document.getElementById("quatre").innerHTML = "I am = <em>Be tu</em>";
                document.getElementById("cinq").innerHTML = "How are you = <em>Ker oh see</em>";
                document.getElementById("six").innerHTML = "Good = <em>Paine</em>";
                document.getElementById("sept").innerHTML = "Bad = <em>Bod</em>";
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
                newscollapse = false;
            }
            else{
                document.getElementById("news1").innerHTML = "<b>The Last Leaf</b><br/>Working on basic Pixel Art testing<br/>110 Lines of code";
                document.getElementById("news2").innerHTML = "<b>c.Js</b><br/>Version 2.0 out now!<br/><em>Includes</em><br/>New X,Y position based system<br/>Updated Rect to Dot";
                document.getElementById("news3").innerHTML = "<b>This Website</b><br/>Added Poetry Website<br/>Updating Links<br/>241 Combined lines of code";
                newscollapse = true;
            }
        } 