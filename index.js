function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
};
function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    let progressBar = document.getElementById("progress-bar");
    progressBar.style.width = pctScrolled+'%';
}
 
window.addEventListener("scroll", function(){
    amountscrolled()
}, false)
const toggle = document.getElementById("toggle");
const menu = document.getElementById("hamburg");
const nav = document.getElementById("nav");
menu.addEventListener("click",function() {
    toggle.style.display = "block";
    nav.style.display = "none";
});
toggle.addEventListener("click",function() {
    nav.style.display = "flex";
    toggle.style.display = "none";
});