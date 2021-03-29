
const users = axios.get('https://jsonplaceholder.typicode.com/users/');
users.then(response => {
    return response.data;
}).then(data => {

    const li = document.createElement("li");
    document.querySelector(".dropdown-menu").appendChild(li);

        for (let index = 0; index < data.length; index++) {
            
            const a = document.createElement("a");
            li.appendChild(a);
            a.className = "dropdown-item"
            a.innerHTML = data[index].id + " - " + data[index].name ;   
            console.log(data[index]);   
        }   
        
    });

const todos = axios.get('https://jsonplaceholder.typicode.com/todos/');
todos.then(response => {
    return response.data;
}).then(data => {
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]);
        
    }
    return data;
    
})


