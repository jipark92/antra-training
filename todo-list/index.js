const toDoValue = document.querySelector('.todo-value')
const addToDoBtn = document.querySelector('.add-todo')
const listContainer = document.querySelector('.list-container')

const toDoList = []

const addToDo = () =>{
    addToDoBtn.addEventListener('click',()=>{
        getToDoValue()
        console.log(toDoList)
        clearInputValue()
        createList()
    })
}
addToDo()

const getToDoValue = () =>{
    toDoList.push({title: toDoValue.value})
}

const clearInputValue = () =>{
    toDoValue.value = "";
}










const createList = () =>{
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    listContainer.appendChild(list)
    for(let i=0; i<toDoList.length;i++){
        list.textContent = toDoList[i].title
    }
}