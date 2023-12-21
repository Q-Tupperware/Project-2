function set_onclicks(){
    var parlist = document.getElementsByTagName("p");
    for(i=0; i<parlist.length; i++){
        parlist[i].setAttribute("onclick","turnRed(this)");
}}

function turnRed(element){
    element.setAttribute("style","color: red");
}
set_onclicks();
//if(document.body.getAttribute("id") == "homepage" ){
 //   usrname=prompt("What is your username?")
//    alert("Welcome "+usrname+"!")
//}
function set_onclicks2(){
    console.log("working")
    var comButt = document.getElementById("starter");
    comButt.setAttribute("onclick","comMker(this)");
}
set_onclicks2()
function comMker(){
console.log("fully working")
    var comBox = document.createElement("div")
    var endButt = document.createElement("button")
    var br = document.createElement("br")
    var starButt = document.getElementsByClassName("starter")
    document.body.addEventListener("keydown",update)
    comBox.setAttribute("id","comment")
    endButt.setAttribute("id","ender")
    endButt.setAttribute("onClick","comPost")
    endButt.innerHTML="Post Comment!"
    document.body.appendChild(endButt)
    document.body.appendChild(br)
    document.body.appendChild(br)
    document.body.appendChild(comBox)
}
function update(e){
    var com = document.getElementById("comment")
    if(e.key != "Shift"){
        var keyText = e.key;
        var text = com.innerHTML;
        text += keyText;
        com.innerHTML = text;
    }
}
function comPost(){
    var endButt = document.getElementById("ender")
    document.body.removeEventListener("keydown",update)
    remove(endButt)
}