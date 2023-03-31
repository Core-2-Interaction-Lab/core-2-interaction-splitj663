fetch("data/collection.json")
.then((response) => response.json())
.then((data) => {
  const container = document.getElementById("imageContainer");

  data.forEach((item) => {
    const imageElement = document.createElement("img");
    imageElement.src = `pics/${item.image}`;


    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.appendChild(imageElement);

    container.appendChild(itemElement);
  });
})
.catch((error) => {
  console.error("Error fetching JSON data:", error);
});
