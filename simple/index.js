function aboutproject(){
    document.getElementById('main_ap').style.display="block";
    document.getElementById('team12').style.display="none";
    document.getElementById('homepage').style.display="none";
    document.getElementById('thor26').style.display="none";
    document.getElementById('makeaking').style.display="none";
    document.getElementsByTagName('a').style.color="gray";
}
function homee12(){
    document.getElementById('homepage').style.display="flex";
    document.getElementById('team12').style.display="none";
    document.getElementById('main_ap').style.display="none";
    document.getElementById('thor26').style.display="none";
    document.getElementById('makeaking').style.display="none";
    document.getElementsByTagName('a').style.color="gray";

}
function gal12(){
    document.getElementById('homepage').style.display="none";
    document.getElementById('team12').style.display="none";
    document.getElementById('main_ap').style.display="none";
    document.getElementById('thor26').style.display="flex";
    document.getElementById('makeaking').style.display="none";
    document.getElementsByTagName('a').style.color="gray";

}
function teammem12(){
    document.getElementById('homepage').style.display="none";
    document.getElementById('team12').style.display="flex";
    document.getElementById('main_ap').style.display="none";
    document.getElementById('thor26').style.display="none";
    document.getElementById('makeaking').style.display="none";
    document.getElementsByTagName('a').style.color="gray";

}
function demopage12(){
    document.getElementById('homepage').style.display="none";
    document.getElementById('team12').style.display="none";
    document.getElementById('main_ap').style.display="none";
    document.getElementById('thor26').style.display="none";
    document.getElementById('makeaking').style.display="block";
    document.getElementsByTagName('a').style.color="gray";

}

//document.getElementById('menu26').style.display="block";
function undefeatable() {
    var x = document.getElementById("menu26");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }