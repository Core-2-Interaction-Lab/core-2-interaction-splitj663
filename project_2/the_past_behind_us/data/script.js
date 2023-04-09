fetch("data/collection.json")
.then((response) => response.json())
.then((data) => {
  const container = document.getElementById("imageContainer");

  // const path = location.pathname;
  // // split the pathname by its slashes, grab the last one (which is the video game title)
  // // then remove .html if it exists
  // // you are left with the video game aka object id
  // const id = path.split('/')[3].replace('.html','');
  // console.log(id);

  // // get only the object that matters to us on the individual video game pages
  // const results = data.filter(item=> item.path == id)
  // console.log(results);
  // // you'll want to tuse 'results' rather than 'data' when working on these pages
  // // 'results' will return only the relevant object
  // // 'data' returns everything
  

  data.forEach((item) => {
    const imageElement = document.createElement("img");
    imageElement.src = `pics/${item.image}`;
  
    const linkElement = document.createElement("a");
    linkElement.href = `${item.path}.html`; // Replace with your desired URL
    linkElement.appendChild(imageElement);
  
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.appendChild(linkElement);
  
    container.appendChild(itemElement);
  });


 results.forEach((item) => {

    container.insertAdjacentHTML('beforeend', itemElement);
  });


})
.catch((error) => {
  console.error("Error fetching JSON data:", error);
});
