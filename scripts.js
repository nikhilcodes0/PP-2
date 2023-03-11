const icon = document.getElementsByClassName("ham")[0];
const toTop = document.getElementsByClassName("to_top")[0];
const reveal = document.getElementsByClassName("reveal");
icon.addEventListener('click', () => {
  icon.classList.toggle("open");
});

window.onscroll = function() {scrollFunction(), scrollReveal()};

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTop.classList.add("display");
  }
  else {
    toTop.classList.remove("display");
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