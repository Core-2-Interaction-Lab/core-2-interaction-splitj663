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
        
        <div class="item left_bar">
          <div class="bars">
          
          <img src="pics/${item.image}" />
          <audio controls>
          <source src="path/to/audio/file.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
          </div>
          
          <div class="bars2">
          <h2>${item.gametitle}</h2>
          <ul class="description">
            <li class="song"> \"${item.songname}\" </span> </li>
            <li class="info"> <span class="bold"> Composed by\: </span> ${item.composername} </li>
            <li class="info"> <span class="bold"> System\: </span> ${item.system} </li>
            <li class="info"> <span class="bold"> Released\: </span> ${item.releaseyear} </li>
          </div> 
          </ul>
        </div>
        
        <div class="content">
        <div class="content2">
          <ul class="content3">
          <li class="listing">${item.comment1}</li>
          <li class="listing">${item.comment2}</li>
          <li class="listing">${item.comment3}</li>
          <li class="listing">${item.comment4}</li>
          <li class="listing">${item.comment5}</li>
          <li class="listing">${item.comment6}</li>
          <li class="listing">${item.comment7}</li>
          <li class="listing">${item.comment8}</li>
          <li class="listing">${item.comment9}</li>
          <li class="listing">${item.comment10}</li>
          <li class="listing">${item.comment11}</li>
          <li class="listing">${item.comment12}</li>
          <li class="listing">${item.comment13}</li>
          <li class="listing">${item.comment14}</li>
          <li class="listing">${item.comment15}</li>
          </ul> 
        </div>
    
        </div>
      `;

      container.insertAdjacentHTML("beforeend", itemElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
