function showMenu(){
    var Menu = document.getElementById("sidenav");
    var Body = document.getElementById("pageBody")
    if (Menu.style.display === "none"){
        Menu.style.display = "contents";
        Body.style.display = "none";
    }
    else{
        Menu.style.display = "none";
        Body.style.display = "contents";
    }
}