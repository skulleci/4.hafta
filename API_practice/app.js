let selectButton = document.querySelector("#selectButton");
let todosList = document.querySelector(".list-group");
let searchBar = document.getElementById("searchBar");

let userTodos = [];
let searchStr = "";

const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users/'); 
}

const  getUserTodos = async (userId) => {
    const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    userTodos = todos.data;
    return todos;
}

const searchTodo = (str) => {
    const temp = userTodos.filter(item => item.title.includes(str) == true);

    makeList(temp);
}

const makeList = (data) => {
    todosList.innerHTML = "";

    data.forEach(todo => {
        const li = document.createElement("li");
        li.setAttribute("id", todo.id);
        li.innerHTML = `${todo.title} <br> Completed : ${todo.completed}`;
        document.querySelector(".list-group").appendChild(li);
    });
}

searchBar.addEventListener('input', (e) => {
    searchStr = e.target.value;
    searchTodo(e.target.value);
});

window.addEventListener('load', async () => {
    const { data } = await getUsers();

    data.forEach(user => {
            const option = document.createElement("option");
            option.value = user.id;
            option.text = user.id + " - " + user.name; 
            selectButton.appendChild(option);
    });
    
})

selectButton.addEventListener("change", async (e) => {
    const { data } = await getUserTodos(e.target.value);

    makeList(data);
});



