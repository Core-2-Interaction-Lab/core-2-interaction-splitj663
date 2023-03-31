// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');

	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

		const itemDescription = document.createElement('h4')
		itemDescription.src = item.description
		listItem.appendChild(itemDescription)

		// const matchingFilter = document.querySelector(`.tattoo[data-filter="${item.where}"]`)


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
 <li class="tattoo" data-filter="${item.where}">
    <p>
        Canvas:
        <span>${item.canvas}</span>
    </p>
    <p>
        Body Part: ${item.where}</p>
    <details>
        <summary>Read more</summary>
        <h4>${item.description}</h4>
    </details>
    <li>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

// Fetch gets your JSON file…
fetch('js/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})


// when a button is clicked, check its data-filter attribute
// store that attribute in a variable
// use a queryselector to grab all list items with the same variable
// if the list item matches, show it (via a css class)
// if the list item DOESN'T match, hide it (via a css class)

// hide everything that doesn't match and show everything that does match
// if the filter is 'ALL', just show everything


// nav buttons//

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav").style.top = "0";
	} else {
		document.getElementById("nav").style.top = "-70px";
	}
	prevScrollpos = currentScrollPos;
}


// arm //

//assign data-filter to items 
const filterButtons = document.querySelectorAll('.filter-button');

//shows elements with specific id
const toggleBody = (elements, showHide) => {
	// do something
	elements.forEach(item => {
		if (showHide == 'show') {
			el.classList.remove('is-hidden');
		} else {
			el.classList.add('is-hidden');
		}
	});
};


//arm//


filterButtons.forEach(button => {
	// click on filter button
	button.addEventListener('click', () => {
		// get the data-attribute
		const filterValue = button.getAttribute('data-filter');
		// find all of the matching items (any grid item that has the same data-attribute)
		const matchingBody = document.querySelectorAll(`.grid-item[data-filter="${filterValue}"]`);
		// first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
		toggleBody(collection, 'hide');
		// second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
		toggleBody(collection, 'show');

		if (button.getAttribute('data-filter') == 'All') {
			toggleBody(collection, 'show');
		};
	});
});