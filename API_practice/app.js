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
            li.innerHTML = `${todo.title} <br> Completed : ${todo.completed}`;
            document.querySelector(".list-group").appendChild(li);
        });
    });
}

function clearList() {
    while (todosList.firstChild) {
        todosList.removeChild(todosList.firstChild);
    }
}

// function getRelevancy(value, searchTerm) {
//     if(value === searchTerm) {
//         return 2;
//     } else if (value.startsWith(term)){
//         return 1;
//     } else if(value.includes(searchTerm)) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

// function search() {
//     searchBar.addEventListener('input', (event) => {
//         let value = event.target.value;
//         if (value && value.trim().lenght > 0) {
//             value = value.trim().toLowerCase();
//             setList(data.filter(todo => {
//                 return todo.completed.includes(value);
//             }).sort((a,b) => {
//                 return getRelevancy(b.completed, value) - getRelevancy(a.completed, value);
//             }));
//         } else {
//             clearList();
//         }
//     });
// }

// searchButton.addEventListener("click", (event) => {
//     search(event);
// })
