window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector("#myHeader");
    const scrollThreshold = 100;
    if (scrollPosition > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


function show(e) {
  var nextSib = e.previousElementSibling.lastElementChild;
  if(nextSib.className === "a1") {
    nextSib.className = "a1Show"
  } else {
    nextSib.className = 'a1';
  }
}  

function Open() {
  var navbar = document.getElementById('navbar');
  navbar?.classList.add('open')
}

function Close() {
  var navbar = document.getElementById('navbar');
  navbar?.classList.remove('open')
}