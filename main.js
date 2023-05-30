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
                document.getElementById("quatre").innerHTML = "I am good/okay = <em>Jtarlutrej</em>";
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
                document.getElementById("news1").innerHTML = "<b>GuyotJS</b><br/>Adding n64 games<br/>Word of the Week";
                document.getElementById("news2").innerHTML = "<b>TheWestonFiles</b><br/>Petite-vue version in development!<br/>Working on banned websites article<br/>Updated mobile design";
                document.getElementById("news3").innerHTML = "<b>This Website</b><br/>Rarely updated<br/>Updating Links";
                document.getElementById("news4").innerHTML = "<b>IRL</b><br/>Learning Dutch for a trip to Belgium";
                newscollapse = true;
            }
        } 
