
let form = document.getElementById("form");
let input = document.querySelector("input");

let mainArray = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value === '') {
        return
    } else {
        let inputValue = input.value;
        mainArray.push(inputValue);
        inputValue = '';
        showTodo(mainArray)
        input.value = '';
    }
    
});

function deleteItem(event, index) {
    mainArray.splice(index, 1);
    event.target.parentElement.remove()
    showTodo(mainArray)
}

function showTodo(array) {
    let list = '';
    array.forEach((value, index) => {
        list += `<li>${value}
        <button class="btn btn-delete"  onclick='deleteItem(event, ${index})' {
            
        }>delete</button></li>
        `;
        let todoUl = document.querySelector('.todo__ul');
        todoUl.innerHTML = list;
       
    })
}
