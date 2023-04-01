

fetch("data/collection.json")
.then((response) => response.json())
.then((data) => {
  const container = document.getElementById("imageContainer");

  const path = location.pathname;
  // split the pathname by its slashes, grab the last one (which is the video game title)
  // then remove .html if it exists
  // you are left with the video game aka object id
  const id = path.split('/')[3].replace('.html','');
  console.log(id);

  // get only the object that matters to us on the individual video game pages
  const results = data.filter(item=> item.path == id)
  console.log(results);
  // you'll want to tuse 'results' rather than 'data' when working on these pages
  // 'results' will return only the relevant object
  // 'data' returns everything
  

  data.forEach((item) => {
    const imageElement = document.createElement("img");
    imageElement.src = `pics/${item.image}`;


    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.appendChild(imageElement);

    container.appendChild(itemElement);
  });


 results.forEach((item) => {
    const itemElement = `
  <div class="item">
    <img src="pics/${item.image}" />
    <h2>${item.gametitle}</h2>
    <ul>
      <li>${item.songname}</li>
      <li>${item.composername}</li>
      <li>${item.releaseyear}</li>
      <li>${item.url}</li>
    </ul>
  </div>

  <div>
    <ul>
      <li>${item.comment1}</li>
      <li>${item.comment2}</li>
      <li>${item.comment3}</li>
      <li>${item.comment4}</li>
      <li>${item.comment5}</li>
      <li>${item.comment6}</li>
      <li>${item.comment7}</li>
      <li>${item.comment8}</li>
      <li>${item.comment9}</li>
      <li>${item.comment10}</li>
      <li>${item.comment11}</li>
      <li>${item.comment12}</li>
      <li>${item.comment13}</li>
      <li>${item.comment14}</li>
      <li>${item.comment15}</li>
    </ul>  
  </div>
`;
  
    container.insertAdjacentHTML('beforeend', itemElement);
  });


})
.catch((error) => {
  console.error("Error fetching JSON data:", error);
});

