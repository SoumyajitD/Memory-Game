var start=document.getElementById("start");
var board=document.getElementById("board");
var first=0;
firstID=0;

var arr=["1","2","3","4","1","2","3","4"];
var cArr=["0","0"];

start.addEventListener('click',startGame);

function startGame(){
    var html="";
    var k=1;
    for(var image of arr){
        html+="<img src='assets/blank.jpg' style='max-width:15%' onClick=check('"+image+"','"+k+"') id='"+k+"'/>";
        if(k==4){
            html+="<br>";
        }
        k++;
    }
    // alert(k);
    board.innerHTML=html;
}
    function  check(image,k){
        if(first==0){
            first=image;
            firstID=k;
        }
        else{
            if(first==image){
                first=0;
                // alert("correct");
                document.getElementById(k).src="assets/"+image+".jpg";
                document.getElementById(firstID).src="assets/"+image+".jpg";
                firstID=0;
            }
            else{
                // alert("wrong");
              
                first=0;

            }

        }
        document.getElementById(k).src="assets/"+image+".jpg";

    }
