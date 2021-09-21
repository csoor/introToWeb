function likeBtn(element){
    document.getElementById("like-notification").innerHTML = "This page says Ninja was liked Ok";
    var popup = document.getElementById("like-notification");
    popup.classList.toggle("show");
}
function hideBtn(element){
    element.remove();
}