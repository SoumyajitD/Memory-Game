var start = document.getElementById("start");
var board = document.getElementById("board");
var first = 0;
firstID = 0;

var arr = ["1", "2", "3", "4", "1", "2", "3", "4"];
var cArr = ["0", "0"];
var arrClicked=[];

start.addEventListener('click', startGame);

function startGame() {
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
