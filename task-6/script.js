const colors = document.querySelectorAll(".color");
const outprice = document.getElementById("outprice");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
colors.forEach((i) => {
  i.addEventListener("click", function (event) {
    colors.forEach((el) => {
      el.classList.remove("active");
    });
    shoes.forEach((shoe) => {
      shoe.classList.remove("show");
    });
    shoes.forEach((shoe) => {
      if (shoe.getAttribute("color") === event.target.getAttribute("color")) {
        shoe.classList.add("show");
      }
      console.log(shoe.classList);
    });

    gradients.forEach((gradient) => {
      gradient.classList.remove("second");
    });
    gradients.forEach((gradient) => {
      if (
        gradient.getAttribute("color") === event.target.getAttribute("color")
      ) {
        gradient.classList.add("second");
      }
      console.log(gradient.classList);
    });

    event.target.classList.add("active");
    outprice.innerHTML = event.target.getAttribute("data-price");
  });
});
