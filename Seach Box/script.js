const search = document.querySelector(".search-bar input"),
  images = document.querySelectorAll(".image-box");

search.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let searcValue = search.value,
      value = searcValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
    event.preventDefault();
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});
