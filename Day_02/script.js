
function transition() {
    document.getElementsByClassName("one")[0].classList.remove("no-animation")
    document.getElementsByClassName("three")[0].classList.remove("no-animation")
    document.getElementsByClassName("one")[0].classList.toggle("one-animate")
    document.getElementsByClassName("two")[0].classList.toggle("two-animate")
    document.getElementsByClassName("three")[0].classList.toggle("three-animate")
}