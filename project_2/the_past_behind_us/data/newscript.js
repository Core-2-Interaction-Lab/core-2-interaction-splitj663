fetch("data/collection.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const container = document.getElementById("imageContainer");

    const path = location.pathname;
    console.log("Path:", path);

    const id = path.split("/")[3].replace(".html", "");
    console.log("ID:", id);

    const results = data.filter((item) => item.path == id);
    console.log(results);

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

      container.insertAdjacentHTML("beforeend", itemElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
