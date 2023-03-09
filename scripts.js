const icon = document.getElementsByClassName("ham")[0];
const toTop = document.getElementsByClassName("to_top")[0];
icon.addEventListener('click', () => {
  icon.classList.toggle("open");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTop.classList.add("display");
  }
  else {
    toTop.classList.remove("display");
  }
}