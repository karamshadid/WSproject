const route1 = document.querySelector("#routeone"),
  route2 = document.querySelector("#routetwo"),
  route3 = document.querySelector("#routethree"),
  route4 = document.querySelector("#routefour");

document.querySelector("#gridcontainer").addEventListener("dblclick", () => {
  // console.log('clicked')
  let boxes = document.querySelectorAll(".grid-items");
  boxes.forEach(box => {
    box.style.display = "block";
  });
});

document.querySelector(".item-one").addEventListener("click", () => {
  route1.style.display = "block";
  route2.style.display = "none";
  route3.style.display = "none";
  route4.style.display = "none";
});

document.querySelector(".item-two").addEventListener("click", () => {
  route2.style.display = "block";
  route1.style.display = "none";
  route3.style.display = "none";
  route4.style.display = "none";
});

document.querySelector(".item-three").addEventListener("click", () => {
  route3.style.display = "block";
  route1.style.display = "none";
  route2.style.display = "none";
  route4.style.display = "none";
});

document.querySelector(".item-four").addEventListener("click", () => {
  route4.style.display = "block";
  route1.style.display = "none";
  route2.style.display = "none";
  route3.style.display = "none";
});
