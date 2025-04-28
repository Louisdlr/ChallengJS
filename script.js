function changeImage(img) {
    if (document.getElementById("image").style.flexDirection == "row-reverse") {
        document.getElementById("image").style.flexDirection = "row";
    } else {
        document.getElementById("image").style.flexDirection = "row-reverse";
    }
}