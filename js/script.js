function changeBackgroundColor () {
    var red = document.getElementById("red").value;
    var blue = document.getElementById("blue").value;
    var green = document.getElementById("green").value;
    document.body.style.backgroundColor = 'rgb('+red+','+blue+','+green+')';
}
