let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");


let closePopup = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "flex";
}


closePopup.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
