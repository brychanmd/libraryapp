const mainFeed = document.getElementById('main-feed');

let myLibrary = [
	{
		title : "Homage to Catalonia",
		author : "George Orwell",
		pages : 324,
		readStatus : true,
	},
	{
		title : "Rape of the fair Country",
		author : "Alexander Cordell",
		pages : 195,
		readStatus : true,
	},
	{
		title : "Freakonomics",
		author : "",
		pages : 230,
		readStatus : false,
	}
];

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
	let newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
}

function render() {

	for (let i = 0; i < myLibrary.length; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'col-sm-6');
		div.innerHTML = `
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">${myLibrary[i].title}</h5>
					<ul>
						<li>Author: ${myLibrary[i].author}</li>
						<li>Pages: ${myLibrary[i].pages}</li>
						<li>Status: ${ (myLibrary[i].readStatus) ? 'Read' : 'Not read' }</li>
					</ul>
					<a href="#" class="btn btn-primary">Remove book</a>
				</div>
			</div>
		`;
		mainFeed.appendChild(div);
	}
}