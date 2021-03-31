let selectButton = document.querySelector("#selectButton");

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
    
    const todos = axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${event.target.value}`);
    todos.then(response => {
        return response.data;
    }).then(data => {
        data.forEach(data => {
            const li = document.createElement("li");
            li.className = "liler"
            li.id = data.id;
            li.innerHTML = data.title + " " + "Completed : " + data.completed;
            document.querySelector(".list-group").appendChild(li);
            
            
        });
        
    });
});

/*
        for (let index = 0; index < data.length; index++) {

            const li = document.createElement("li");
            document.querySelector(".dropdown-menu").appendChild(li);

            const a = document.createElement("a");
            li.appendChild(a);
            a.className = "dropdown-item";
            a.innerHTML = data[index].id + " - " + data[index].name ;
            a.id = data[index].id;
            a.addEventListener("click",  (event) => {
                const todos = axios.get(`https://jsonplaceholder.typicode.com/todos?userId=`${});
                todos.then(response => {
                    return response.data;
                }).then(data => {
                    for (let index = 0; index < data.length; index++) {
                        console.log(data[index]);
                        
                    }
                    return data;
                });
            })   
            console.log(data[index]);

        }   
     
    });
*/
