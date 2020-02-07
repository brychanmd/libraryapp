let myLibrary = [];

const mainFeed = document.getElementById('main-feed');
const mainForm = document.getElementsByName('submitBook')[0];


render();

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
	let newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
	render();
}

function removeBookFromLibrary(index) {
	myLibrary.splice(index, 1);
	render();
}

function toggleRead(index) {
	myLibrary[index]['readStatus'] = !myLibrary[index]['readStatus'];
	render();
}

function submitForm() {
	let title = document.getElementById('book-title').value;
	let author = document.getElementById('book-author').value;
	let pages = document.getElementById('book-pages').value;
	let readStatus;
	if(document.getElementById('book-read').checked) {
		readStatus = true;
	  }else if(document.getElementById('book-not-read').checked) {
		readStatus = false;
	  }

	addBookToLibrary(title, author, pages, readStatus);

	mainForm.reset();
	return false;
}


function render() {

	mainFeed.innerHTML = '';

	for (let i = 0; i < myLibrary.length; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'col-sm-6 col-md-4');
		div.innerHTML = `
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">${myLibrary[i].title}</h5>
					<ul>
						<li>Author: ${myLibrary[i].author}</li>
						<li>Pages: ${myLibrary[i].pages}</li>
						<li>Status: ${ (myLibrary[i].readStatus) ? 'Read' : 'Not read' }</li>
					</ul>
					<div class="dflex justify-content-between">

					<div class="btn btn-success toggleRead" data-index="${i}">${ (myLibrary[i].readStatus) ? 'Mark as unread' : 'Mark as read' }</div>
					<div class="btn btn-danger remove-btn" data-index="${i}">Remove book</div>
					</div>
				</div>
			</div>
		`;
		mainFeed.appendChild(div);	
	}

			const removeBtns = document.querySelectorAll('.remove-btn');
			removeBtns.forEach( (button) => {
				button.addEventListener('click', (e) => {
					removeBookFromLibrary(e.target.dataset.index);
				});
			});

			const toggleReadBtns = document.querySelectorAll('.toggleRead');
			toggleReadBtns.forEach( (button) => {
				button.addEventListener('click', (e) => {
					toggleRead(e.target.dataset.index);
				});
			});
}