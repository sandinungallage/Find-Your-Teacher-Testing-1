document.addEventListener("DOMContentLoaded",function(){
    var count = 0;
    var speed = 10;

    timer(); 
    
    function timer() {
        count++;
        if (count > 500) {
            return;
        }
        document.getElementById("card1-details").innerHTML = "<b>" +count +"+</b><br>Teachers";
        document.getElementById("card2-details").innerHTML = "<b>" + count + "+</b><br>Institutions";
        document.getElementById("card3-details").innerHTML = "<b>" + count + "+</b><br>Students";

        speed = speed - count * 2;

        setTimeout(timer, speed);
}
});