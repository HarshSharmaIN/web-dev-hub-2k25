let inputs = document.querySelector('input');
let btn = document.querySelector('button');
let taskList = document.getElementById('task-list');
let task = [];
let localstoragedata = localStorage.getItem("task array");

if (localstoragedata != null) {
    let ogdata = JSON.parse(localstoragedata);
    task = ogdata;
    maketodo();
}

btn.addEventListener("click", function() {
    let query = inputs.value;
    inputs.value = "";
    if (query.trim() === "") {
        alert("no value entered");
        throw new Error("empty input field error");
    }

    let taskObj = {
        id: Date.now(),
        text: query
    }
    task.push(taskObj);
    localStorage.setItem("task array", JSON.stringify(task));
    maketodo();
});

function maketodo() {
    taskList.innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        let { id, text } = task[i];
        let element = document.createElement('div');
        element.innerHTML = `
            <span class="task" contenteditable="false">${text}</span>
            <button class='edit'>Edit</button>
            <span class="delete"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg></span>
        `;
        let delbtn = element.querySelector('.delete');
        let editbtn = element.querySelector('.edit');
        let taskText = element.querySelector('.task');

        // Delete Task
        delbtn.addEventListener("click", function() {
            let filteredarray = task.filter(function(taskobj) {
                return taskobj.id != id;
            });
            task = filteredarray;
            localStorage.setItem("task array", JSON.stringify(task));
            taskList.removeChild(element);
        });

        // Edit Task
        editbtn.addEventListener("click", function() {
            if (editbtn.innerText === 'Edit') {
                taskText.setAttribute('contenteditable', 'true'); // Enable editing
                taskText.focus(); // Focus on the text to start editing
                editbtn.innerText = 'Save'; // Change button text to 'Save'
            } else {
                taskText.setAttribute('contenteditable', 'false'); // Disable editing
                let updatedText = taskText.innerText.trim();
                if (updatedText !== "") {
                    task = task.map(function(taskobj) {
                        if (taskobj.id === id) {
                            taskobj.text = updatedText;
                        }
                        return taskobj;
                    });
                    localStorage.setItem("task array", JSON.stringify(task));
                }
                editbtn.innerText = 'Edit'; // Change button text back to 'Edit'
            }
        });

        element.classList.add('todo');
        taskList.appendChild(element);
    }
}