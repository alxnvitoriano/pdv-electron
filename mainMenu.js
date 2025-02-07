//selecao do menu e comportamento do click
var menu = document.querySelectorAll(".menuItems");

function itemSelect() {
  menu.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

//evento de click para cada item de menu
menu.forEach((item) => item.addEventListener("click", itemSelect));

//expandir/contrair o menu
var btnExp = document.querySelector("#exp-btn");
var menuSide = document.querySelector(".sideBar");

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
});
