function changeIcon1(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    anchor.closest('.side-nav-wrapper').classList.toggle('active');
  }
  
  function changeIcon2(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-sign-in-alt');
    icon.classList.toggle('fa-sign-out-alt');
  }
  
  function changeIcon3(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    var element = document.getElementsByClassName("chn");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle("dark-mode");
    }
  }