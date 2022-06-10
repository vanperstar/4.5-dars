// var moviesRow = document.querySelector('[data-element=movie-container]')



// // moviesRow.appendChild(movieItemEl)
// renderMovies(movies, moviesRow)

// function renderMovies(movies = [], node){
//     node.innerHTML = null

//     movies.forEach((movie) => {
//         let movieItemEl = cloneAndRender(movie)
//         node.appendChild(movieItemEl)
//     })
// }

// var currentPage = 1;

// function cloneAndRender(movie){
//     let singleMovieTemplete = document.querySelector('#movie-item')
//     let movieItemElClone = singleMovieTemplete.content.cloneNode(true)
//     let movieImageEL = movieItemElClone.querySelector('[data-movie=img]')
//     movieImageEL.src = movie.imageUrl
//     movieImageEL.addEventListener('error', () => {
//         movieImageEL.src = "http://picsum.photos/200/300"
//     })
//     movieItemElClone.querySelector('[data-movie=title]').textContent = movie.title
//     movieItemElClone.querySelector('[data-movie=description]').textContent = movie.description
//     movieItemElClone.querySelector('[data-movie=year]').textContent = movie.year
//     return movieItemElClone
// }



// var todoListEL = document.querySelector(".todo-list")

// function createCloneTodo(todo){
//     let templateTodoEL = document.querySelector("#todo-item")
//     let cloneTodoItem = templateTodoEL.content.cloneNode(true)

//     cloneTodoItem.querySelector(".todo-is-completed").checked = todo.isCompleted
//     cloneTodoItem.querySelector(".todo-title").textContent = todo.title

//     return cloneTodoItem
//     // cloneTodoItem.querySelector(".todo-delete-btn")

// }

// function renderTodos(todos = [], node){
//     node.innerHTML = null
//     todos.forEach((todo) => {
//         node.appendChild(createCloneTodo(todo))
//     })
// }

// renderTodos(todos, todoListEL)





// const itemPerPage = 6;
// var todos = [
//     {id:12, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:13, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:14, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:15, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:16, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:17, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:18, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:19, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:20, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:21, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:22, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:23, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:24, title:"Lorem ipsum dolor ... ", isCompleted:false},
//     {id:25, title:"Lorem ipsum dolor ... ", isCompleted:false},
// ]
// var currentPage=1;

// var todoListEl = document.querySelector(".todo-list")
// todoListEl.addEventListener("change", (event) => {
//     if(event.target.dataset.task === 'check'){
//         todos = todos.map(todo => {
//             if(todo.id == event.target.dataset.todoId){
//                 todo.isCompleted = event.target.checked
//             }
//             return todo
//         })
//         renderTodos(todos, todoListEl)
//     }
// })


// todoListEl.addEventListener("click", (event) => {
//     if(event.target.dataset.task === 'delete'){
//         console.log(event.target.dataset.todoId)
//         todos = todos.filter(todo => todo.id != event.target.dataset.todoId)
//         renderTodos(todos ,todoListEl)
//     }
// })


// function createCloneTodo(todo){
//     let templateTodoEl = document.querySelector("#todo-item")
//     let cloneTodoItem = templateTodoEl.content.cloneNode(true)
    
//     let checkBoxEl = cloneTodoItem.querySelector(".todo-is-completed")
//     checkBoxEl.checked = todo.isCompleted
//     checkBoxEl.dataset.todoId = todo.id
//     checkBoxEl.dataset.task = "check"

//     cloneTodoItem.querySelector(".todo-title").textContent = `${todo.id} ${todo.title}`

//     let deleteBtn = cloneTodoItem.querySelector(".todo-delete-btn")
//     deleteBtn.dataset.todoId = todo.id 
//     deleteBtn.dataset.task = "delete"

//     return cloneTodoItem
// }

// function renderTodos(todos = [], node){
//     node.innerHTML = null
//     // [itemPerPage*(currentPage-1), currentPage*itemPerPage]
//     todos.slice(itemPerPage*(currentPage-1), currentPage*itemPerPage).forEach((todo) => {
//         node.appendChild(createCloneTodo(todo))
//     })
// }

// renderTodos(todos, todoListEl)



// // Pagination 
// var paginationEl = document.querySelector(".todo-pagination")

// paginationEl.addEventListener('click', (event) => {
//     console.log(event.target.dataset.pageId)
//     if(event.target.dataset.task == 'page'){
//         currentPage = event.target.dataset.pageId
//         renderTodos(todos, todoListEl)
//         renderPagination()
//     }
// })

// function renderPagination(){
//     paginationEl.innerHTML = null
//     for(let i=1; i <= Math.ceil(todos.length / itemPerPage); i++ ){
//         let templatePageItem = document.querySelector("#pagination-item")
//         let pageItem = templatePageItem.content.cloneNode(true)

//         let itemEl = pageItem.querySelector(".page-item")
//         if(i == currentPage){
//             itemEl.classList.add("active")
//         }else{
//             itemEl.classList.remove("active")
//         }

//         let linkEl = pageItem.querySelector(".page-link")
//         linkEl.textContent = i
//         linkEl.dataset.pageId = i
//         linkEl.dataset.task = 'page'
//         paginationEl.appendChild(pageItem)
//     }
// }

// renderPagination()





var todoForm = document.querySelector('.main-container');
var todoInput = document.querySelector('.form-control');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = movies.length > 0 ? movies[movies.length - 1].id+ 1: 0;
    const moviesTodo = {
        id, 
        title: todoInput.value, 
    } 
    movies.push(moviesTodo);
    todoInput.value = '';
    renderMovies(movies);
})

var moviesRow = document.querySelector('[data-element=movie-container]');

function cloneAndRender(movie) {
    let singleMovieTemplate = document.querySelector('#movie-item');
    let movieItemElClone = singleMovieTemplate.content.cloneNode(true);

    let movieImageEl = movieItemElClone.querySelector('[data-element=movie-img]');
    movieImageEl.src = movie.imageUrl;
    movieImageEl.style.height = '300px';
    movieImageEl.addEventListener('error', () => {
        movieImageEl.src = 'http://picsum.photos/200/200';
    })

    movieItemElClone.querySelector('[data-element=movie-id]').textContent = `id: ` + movie.id;
    movieItemElClone.querySelector('[data-element=movie-title]').textContent = `Title: ` + movie.title;
    movieItemElClone.querySelector('[data-element=movie-director]').textContent = `Director: ` + movie.director;
    // movieItemElClone.querySelector('[data-element=movie-actors]').textContent = `Actors:` + movie.actors;
    movieItemElClone.querySelector('[data-element=movie-description]').textContent = `Text: ` + movie.description.split(' ').slice(0, 20).join(' ') + '...';
    movieItemElClone.querySelector('[data-element=movie-year]').textContent = `Year: ` + movie.year;
    return movieItemElClone;
}
// renderMovies(movies, moviesRow);

var todoListEl = document.querySelector('.todo-list');
todoListEl.addEventListener('change', (evnet) => {

})
// var checkBoxChecked = document.querySelector('.todo-is-completed').checked = true

todoListEl.addEventListener('click', (event) => {
    if(event.target.dataset.task === 'delete') {
        console.log(`Deleted: ` + event.target.dataset.todoId);
        movies = movies.filter(movie => movie.id != event.target.dataset.todoId)
        renderTodos(movies, todoListEl);
        // if(event.target.checked){
        // }
    }
})

function createCloneTodo(todo) {
    let templateTodoEl = document.querySelector('#todo-item');
    let cloneTodoItem = templateTodoEl.content.cloneNode(true);
    
    cloneTodoItem.querySelector('.todo-id').textContent = 'id: ' + todo.id;
    cloneTodoItem.querySelector('.todo-title').textContent = todo.title;
    cloneTodoItem.querySelector('.todo-year').textContent = todo.year + '-y.';

    let deleteBtn = cloneTodoItem.querySelector('.todo-delete-btn');
    deleteBtn.dataset.todoId = todo.id;
    deleteBtn.dataset.task = 'delete';
    return cloneTodoItem;
}

renderTodos(movies, todoListEl);

//Pagination
var itemPerpage = 10;
var currentPage = 1;

renderTodos(movies, todoListEl);

var paginationEl = document.querySelector('.todo-pagination');

paginationEl.addEventListener('click', (event) => {
    console.log(event.target.dataset.pageId);
    if(event.target.dataset.task == 'page') {
        currentPage = event.target.dataset.pageId;
        renderTodos(movies, todoListEl)
        renderPagination()
    }
})

renderPagination();