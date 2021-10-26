function toggle(){
    var tog = document.getElementById("nav");
    if (tog.classList.contains("closed")) {
        tog.classList.add("open");
        tog.classList.remove("closed");
    } else if (tog.classList.contains("open")) {
        tog.classList.add("closed");
        tog.classList.remove("open");
    }
}