const accordion2BtnToggle = document.querySelectorAll(
    ".accordion2-card__header"
  );
  
  // adding event listener to the accordion2 toggle button
  for (i of accordion2BtnToggle) {
    i.addEventListener("click", accordion2ToggleFunction);
  }
  
  // here the other bodies do not automatically close then the current one is open
  function accordion2ToggleFunction() {
    this.nextElementSibling.classList.toggle("active");
    this.children[0].classList.toggle("toggleIcon");
  }
