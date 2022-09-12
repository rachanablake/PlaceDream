// Scroll Drop Navigation-----------------------------------------------------------------------------
// window.onscroll = function (e) {
//     if (window.pageYOffset > 150) {
//         document.querySelector('#header-scrolled').classList.add('navigation-blur');
//     }
//     else {
//         document.querySelector('#header-scrolled').classList.remove('navigation-blur');
//     }
// }

// Scroll Hide Navigation-----------------------------------------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-scrolled").style.top = "0";
  } else {
    document.getElementById("header-scrolled").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Dark Mode---------------------------------------------------------------------------------------
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.value === "Dark Mode"){
        btn.value = "Ligt Mode";
    }else{
        btn.value= "Dark Mode";
    }
})

