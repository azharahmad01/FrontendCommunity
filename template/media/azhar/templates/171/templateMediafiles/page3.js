function openNav() {
  let navLinks = document.getElementsByClassName("nav-links")[0];
  navLinks.classList.toggle("nav-active");
  let toggleLink = document.getElementsByClassName("toggler")[0];
  toggleLink.classList.toggle("rotate-toggler");
}
