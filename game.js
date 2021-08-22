var start = document.getElementById("start");
var board = document.getElementById("board");
var first = 0;
firstID = 0;

var arr = ["1", "2", "3", "4", "1", "2", "3", "4"];

var cArr = ["0", "0"];
var arrClicked=[];
var total=arr.length/2;
var total_check=0;

start.addEventListener('click', startGame);

var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");





function startGame() {
    
    var seconds = 00; 
    var tens = 00;  
    arr=arr.sort( () => .5 - Math.random() ); //Biased 
    
    var html = "";
    var k = 1;
    for (var image of arr) {
        html += "<img src='assets/blank.jpg' style='max-width:15%' onClick=check('" + image + "','" + k + "') id='" + k + "'/>";
        if (k == 4) {
            html += "<br>";
        }
        k++;
    }
    // alert(k);
    board.innerHTML = html;
    setInterval(function startTimer () {
        tens++; 
          
        if(tens < 9){
          appendTens.innerHTML = "0" + tens;
        }
          
        if (tens > 9){
          appendTens.innerHTML = tens;
            
        } 
          
        if (tens > 59) {
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
          
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
        
        
      },1000);
}

function check(image, k) {
    if (firstID != k) {
        if (first == 0) {

            first = image;
            firstID = k;
            document.getElementById(k).src = "assets/" + image + ".jpg";
        }
        else {
            if (first == image) {

                
                document.getElementById(k).src = "assets/" + image + ".jpg";
                // alert("correct");
                total_check++;
                if(total_check==total){
                    // alert("Win");
                    startGame();
                    total_check=0;
                    location.reload();
                    
                }
               



            }
            else {
                // alert("wrong");
                // console.log(firstID);
                // console.log(k);
                document.getElementById(k).src = "assets/" + image + ".jpg";
                setTimeout(function () {

                    document.getElementById(firstID).src = "assets/" + 'blank' + ".jpg";
                    document.getElementById(k).src = "assets/" + 'blank' + ".jpg";
                    firstID = 0;
                    first = 0;
                }, 500);
            }
            first = 0;
            
        }
    }




}
