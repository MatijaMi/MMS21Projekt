//Code to show the periodic table, maybe not needed to be in a seperate js but it's more consistent this way
function drawPeriodicTable(){
    prevWall =wall;
    document.getElementById("periodicTableScene").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
}