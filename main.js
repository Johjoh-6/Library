let myLibrary = [];
const form = document.querySelector('#form-book');
const btnAdd = document.querySelector('#addBook');
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
    console.log(returnLastId(myLibrary));
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
for (let i = 0; i < myLibrary.length; i++) {
   bodyGrid(myLibrary[i]);
}
function bodyGrid(index) {
    const divBody = document.createElement("div");
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
    read ? color = "read-y" : color = "read-n";
    pTitle.innerText = title;
    divBody.appendChild(pTitle);
    pAuthor.innerText = author;
    divBody.appendChild(pAuthor);
    pPage.innerText = page;
    divBody.appendChild(pPage);
    divRead.classList.add('read-or-not');
    divRead.classList.add(color);
    divRead.innerText = 'Read';
    divBody.appendChild(divRead);
    divDelete.classList.add('delete');
    divDelete.innerText = "Remove";
    divBody.appendChild(divDelete);
    divBody.classList.add('body-grid');
    topGrid.insertAdjacentElement("afterend", divBody);
}
// const readOrNot = document.querySelectorAll('.read-or-not');
// readOrNot.addEventListener('click', (e)=>{
//     console.log(readOrNot);
// })