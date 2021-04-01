let selectButton = document.querySelector("#selectButton");
let todosList = document.querySelector(".list-group");
let li = document.createElement("li");
let searchBar = document.getElementById("searchBar");
let searchButton = document.querySelector("#searchButton");

const users = axios.get('https://jsonplaceholder.typicode.com/users/');
users.then(response => {
    return response.data;
}).then(data => {
    
    data.forEach(user => {
        const option = document.createElement("option");
        option.value = user.id;
        option.text = user.id + " - " + user.name; 
        selectButton.appendChild(option);

    });
});

selectButton.addEventListener("change", (event) => {
    clearList();
    setList(event);
    
});

function setList() {
    let todos = axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${event.target.value}`);
    todos.then(response => {
        return response.data;
    }).then(data => {
        data.forEach(todo => {
            li = document.createElement("li");
            li.setAttribute("id", todo.id);
            li.innerText = `${todo.title} <br> Completed : ${todo.completed}`;
            document.querySelector(".list-group").appendChild(li);
        });
    });
}

function clearList() {
    while (todosList.firstChild) {
        todosList.removeChild(todosList.firstChild);
    }
}

// searchButton.addEventListener("click", () => {
//     for (let index = 0; index < todosList.children.length; index++) {
//         let searchText = todosList.children[index].innerText.search(searchBar.value);
//         if (searchText < 0) {
//             //todosList.removeChild(todosList.children[index]);
//             console.log(searchText);
//         }
//     }
// })
