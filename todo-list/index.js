const toDoValue = document.querySelector('.todo-value')
const addToDoBtn = document.querySelector('.add-todo')
const listContainer = document.querySelector('.list-container')

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
        title: toDoValue.value
    })
}

const clearInputValue = () =>{
    toDoValue.value = "";
}


//CREATE HTML ELEMENTS(LIST AND DELETE BUTTON)
const createList = () =>{
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    for (let i = 0; i < toDoList.length;i++){
        list.setAttribute('id', toDoList[i].id)

    }
    listContainer.appendChild(list)
    const listID = list.getAttribute('id')

    const toDoTitle = document.createElement('p')
    list.appendChild(toDoTitle)
    for(let i=0; i<toDoList.length;i++){
        toDoTitle.textContent = toDoList[i].title
    }

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','delete-btn')
    list.appendChild(deleteBtn)
    deleteBtn.textContent = "DELETE"

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
