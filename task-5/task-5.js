const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  const anim = circle.getAttribute("data-anim");
  if (anim) {
    circle.classList.add(anim);
  }
  if (circle.classList.contains(anim)) {
    console.log(`Animation "${anim}" succesfully applied`);
  } else {
    console.log(`Animation "${anim}" was not applied`);
  }
});
