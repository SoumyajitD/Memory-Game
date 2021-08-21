var start=document.getElementById("start");
var board=document.getElementById("board");

var arr=["1","2","3","4","1","2","3","4"];

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
        document.getElementById(k).src="assets/"+image+".jpg";

    }
