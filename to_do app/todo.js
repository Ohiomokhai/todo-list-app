const inputBox = document.getElementById('input');
const ul = document.getElementById('list');

const retrieveItems = JSON.parse(localStorage.getItem('todo')) || [];

    retrieveItems.forEach((todo, index)=> {
    let list = document.createElement('li');
    list.innerText = todo;
    ul.appendChild(list);

    let edit = document.createElement('span');
    edit.textContent = '\u270E';
    edit.classList.add('edit');
    edit.addEventListener('click', (e)=>{
        e.preventDefault()
        let updateTask = prompt('Enter new task description:', list.textContent);
        if (updateTask === ''){
            alert('Try again!🙂 ');
        } else if (updateTask !== ''){
            console.log(updateTask);
            console.log(retrieveItems);
            console.log(index)
            retrieveItems[index] = updateTask;
            console.log(retrieveItems);
            localStorage.setItem('todo', JSON.stringify(retrieveItems));
            location.reload();
        }
    })
    list.appendChild(edit);

    let span = document.createElement('div');
    span.textContent = '\u2715'; 
    span.classList.add('delete');
    span.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete task?') === true){
            deleteTask(index)
        }
    });
        function deleteTask(index){
            retrieveItems.splice(index, 1);
            localStorage.setItem('todo', JSON.stringify(retrieveItems));
            ul.removeChild(list);
            console.log(retrieveItems);
        }
        list.appendChild(span);
    });
    
function addTask(){
    if (inputBox.value === ''){
        alert('Please input task!');
    } else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        ul.appendChild(list);

        let edit = document.createElement('span');
        edit.innerHTML = '\u270E';
        edit.classList.add('edit');
        edit.addEventListener('click', () => {
            let updateTask = prompt('Enter new task description:', list.textContent);    
            if (updateTask === ''){
                alert('Try again!🙂 ');
            } else if (updateTask !== ''){
                list.innerHTML = updateTask;
            } 
            updateTask.appendChild(edit);
        })
        list.appendChild(edit);

        let span = document.createElement('div');
        span.textContent = '\u2715'; 
        span.classList.add('delete');
        list.appendChild(span);

        retrieveItems.push(input.value);
        localStorage.setItem('todo', JSON.stringify(retrieveItems));
        console.log(retrieveItems);
    }
    
    input.value = '';    
}

function clearItems(){
    localStorage.clear();
};

ul.addEventListener('mousedown', (e)=>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
     }
});


