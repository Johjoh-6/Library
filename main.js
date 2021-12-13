let myLibrary = [];
const form = document.querySelector('#form-book');
const btnAdd = document.querySelector('#addBook');
const grid = document.querySelector('#list-book');
console.log(myLibrary);
console.log(myLibrary.length);

class book {
  constructor(
      title = "undefined",
      author = "undefined",
      page = 0,
      read = true
  ) {
      this.title = form.title.value;
      this.author = form.author.value;
      this.page = form.page.value;
      this.read = form.read.checked;

  }
}

function addBookToLibrary() {
    let newBook = new book;
    myLibrary.push(newBook);
    returnLastId(myLibrary);
    bodyGrid(returnLastId(myLibrary)[0]);
    form.reset();
    
}
function returnLastId(array) {
    return array.slice(-1);
}
btnAdd.addEventListener('click', (e) =>{
    e.preventDefault();
    addBookToLibrary();
   
})
const topGrid = document.querySelector('#top-grid');
function setGrid(){
for (let i = 0; i < myLibrary.length; i++) {
   bodyGrid(myLibrary[i]);
}
}
function bodyGrid(index) {
    const divBody = document.createElement("div");
    divBody.setAttribute('data-book-nb', myLibrary.indexOf(index));
    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPage = document.createElement("p");
    const divRead = document.createElement("div");
    const divDelete = document.createElement("div");
    const title = index.title;
    const author = index.author;
    const page = index.page;
    const read = index.read;
    let color;
    if(read===false) {
        divRead.textContent = 'Not Read';
        color = "read-n";
    }else {
        divRead.textContent = 'Read';
        color = "read-y"
    }
    pTitle.innerText = title;
    divBody.appendChild(pTitle);
    pAuthor.innerText = author;
    divBody.appendChild(pAuthor);
    pPage.innerText = page;
    divBody.appendChild(pPage);
    divRead.classList.add('read-or-not');
    divRead.classList.add(color);
    divBody.appendChild(divRead);
    divDelete.classList.add('delete');
    divDelete.innerText = "Remove";
    divBody.appendChild(divDelete);
    divBody.classList.add('body-grid');
    grid.insertAdjacentElement("beforeend", divBody);

// change status of read
// Might be better if toggle
divRead.addEventListener('click', ()=>{
    index.read = !index.read;
    resetGrid();
    setGrid();
    console.log(read);
})
// Remove the selected element

divDelete.addEventListener('click', ()=>{
    myLibrary.splice(myLibrary.indexOf(index),1);
    resetGrid();
    setGrid();

})
}
// Clear the grid list
function resetGrid() {
    grid.textContent= '';
}

// Call grid
setGrid();