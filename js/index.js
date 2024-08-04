const speItems = document.querySelectorAll(".spe_item");
const image = document.querySelector(".spe_main img");
const imageList = [
  "/images/suitecinema.png",
  "/images/CINE.png",
  "/images/CINEde.png",
  "/images/4DX.png",
];

let selectedItem = speItems[0];
selectedItem.classList.add("select");

speItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    if (selectedItem !== item) {
      selectedItem.classList.remove("select");
      item.classList.add("select");
      image.src = imageList[index];
      selectedItem = item;
    }
  });
});
