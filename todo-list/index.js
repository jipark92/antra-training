const toDoValue = document.querySelector('.todo-value')
const addToDoBtn = document.querySelector('.add-todo')
const listContainer = document.querySelector('.list-container')
const deleteAllBtn = document.querySelector('.delete-all-btn')

const toDoList = []
let toDoID = 0;

const addToDo = () =>{
    addToDoBtn.addEventListener('click',()=>{
        if(toDoValue.value === "" || toDoValue.value === null)return
        getToDoValue()
        createList()
        clearInputValue()
        console.log(toDoList)
    })
}
addToDo()

const getToDoValue = () =>{
    toDoList.push({
        id: toDoID++,
        title: toDoValue.value.toUpperCase()
    })
}

const clearInputValue = () =>{
    toDoValue.value = "";
}

//CREATE HTML ELEMENTS(LIST AND DELETE BUTTON)
const createList = () =>{
    //create list container and grabs attribute values
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    for (let i = 0; i < toDoList.length;i++){
        list.setAttribute('id', toDoList[i].id)
    }
    listContainer.appendChild(list)
    const listID = list.getAttribute('id')

    //create title box
    const toDoTitle = document.createElement('p')
    list.appendChild(toDoTitle)
    for(let i=0; i<toDoList.length;i++){
        toDoTitle.textContent = `#${toDoList[i].id} ${toDoList[i].title}`
    }

    //create delete button element
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','delete-btn')
    list.appendChild(deleteBtn)
    deleteBtn.textContent = "DELETE"

    //delete function
    deleteBtn.addEventListener('click',()=>{
        console.log(listID)
        console.log(list)
        for (let i = 0; i < toDoList.length;i++){
            if(parseInt(listID) === toDoList[i].id){
                toDoList.splice(i,1)
                console.log(toDoList)
            }
            list.remove()
        }
    })
}