const icon = document.getElementsByClassName("ham")[0];
const toTop = document.getElementsByClassName("to_top")[0];
const reveal = document.getElementsByClassName("reveal");
const nav = document.getElementsByClassName("navbar")[0];
const logo = document.getElementsByClassName("logo")[0];
const l2 = document.getElementsByClassName("line2")[0];

icon.addEventListener('click', () => {
  icon.classList.toggle("open");
});

window.onscroll = function() {scrollFunction(), scrollReveal()};

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTop.classList.add("display");
    nav.classList.add("shrink");
    logo.classList.add("shrink");
    icon.classList.add("shrink");
    l2.classList.add("shrink");

  }
  else {
    toTop.classList.remove("display");
    nav.classList.remove("shrink");
    logo.classList.remove("shrink");
    icon.classList.remove("shrink");
    l2.classList.remove("shrink");
  }
}

function scrollReveal() {
  for (var i = 0; i < reveal.length; i++) {
    const revealWindow = window.innerHeight;
    const revealTop = reveal[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < revealWindow - revealPoint) {
      reveal[i].classList.add("active");
    }
    else {
      reveal[i].classList.remove("active");
    }
  }
}