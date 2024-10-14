const toggleButton = document.getElementById("login");
const loginWindow = document.getElementById("Signinwindow");
const SignUpWindow = document.getElementById("Sign-Up-window");
const categoryWindow = document.getElementById("category-window");
var blurBg = document.getElementById("blur");
let searchIn = document.getElementById("searchInput");
let search = document.getElementById("searchBar");
let category = document.getElementById("category")
 
function login() {
  blurBg.classList.add(".active");
  SignUpWindow.style.transform = "scaleX(0)";
  loginWindow.style.transform = "scaleX(1)";
  loginWindow.style.transition = ".3s linear";
  loginWindow.style.animationDelay = ".3s";
  SignUpWindow.style.transition = ".3s linear";
}
function close_window() {
  blurBg.classList.remove(".active");
  loginWindow.style.transform = "scaleX(0)";
  SignUpWindow.style.transform = "scaleX(0)";
  loginWindow.style.transition = "none";
  SignUpWindow.style.transition = "none";
}
function SignUp_window() {
  blurBg.classList.add(".active");
  loginWindow.style.transform = "scaleX(0)";
  SignUpWindow.style.transform = "scaleX(1)";
}


function searchsize() {
  search.style.width = "15vw";
  searchIn.style.display = "block";
}
function searchBar() {
  searchIn.style.display = "block";
}

function searchBarClose() {
  searchIn.style.display = "none";
  search.style.width = "3vw";
}
function categoryOpen(){
  category.style.display = "block";
}
function categoryClose(){
  category.style.display = "none";
}