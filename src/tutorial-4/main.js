
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

// способ 2 с функцией render, но без добавления элементов
/* 
const names = ["John", "Petr", "Alexey"];

function render(names) {
  let list = "";
  names.forEach((el, ind) => {
    list += `
    <li>${el}
    <button onclick='removeItem(event, ${ind})'>X</button>
	</li>
    `;
    let ul = document.querySelector(".todo");
    ul.innerHTML = list;
  });
}
window.onload = render(names);


function removeItem(event, ind) {
  names.splice(ind, 1);
  event.target.parentElement.remove()
  render(names)
}
*/
