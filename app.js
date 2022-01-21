// book constructor
function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

//UI constructor
function UI () {}
UI.prototype.addBookToList = function (book){
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}
// clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert  ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout after 3sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

//event listerners
document.getElementById('book-form').addEventListener('submit',
function(e){
 //get form values
    const title = document.getElementById('title').value,
     author = document.getElementById('author').value,
     isbn = document.getElementById('isbn').value

    //instantiante book
    const book = new Book(title, author, isbn);
   
    // instantiante UI
    const ui = new UI();
    // validate
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        ui.addBookToList(book);
        ui.clearFields();
        // sucess alert
        ui.showAlert('Book Added!', 'success')
    }
    // add book to list
    ui.addBookToList(book);
    // clear fields
    ui.clearFields()

    e.preventDefault();
});

