const toDoValue = document.querySelector('.todo-value')
const addToDoBtn = document.querySelector('.add-todo')
const listContainer = document.querySelector('.list-container')
const deleteAllBtn = document.querySelector('.delete-all-btn')

//todo list array
const toDoList = []
//ID to associate array and specifc todo.
let toDoID = 0;

//submit todo function
const addToDo = () =>{
    addToDoBtn.addEventListener('click',()=>{
        //if input box is empty, do nothing.
        if(toDoValue.value === "")return
        //else run these functions
        getToDoValue()
        createListWithButtons()
        clearInputValue()
    })
}
addToDo()

//grab value inside the input box and submit object into array
const getToDoValue = () =>{
    //push object to array
    toDoList.push({
        id: toDoID++,
        title: toDoValue.value.toUpperCase()
    })
}

//clears input box after submitting value
const clearInputValue = () =>{
    toDoValue.value = "";
}

//deleta all function
const deleteAll = () =>{
    deleteAllBtn.addEventListener('click',()=>{

        //grab all lists 
        const allListContainer = document.querySelectorAll('.list')

        //loops through all toDoList and removes them from array
        for(let i = 0; i < toDoList.length;i++){
            toDoList.splice(i,toDoList.length)
        }

        //select list containers and remove them
        allListContainer.forEach(list=>{
            list.remove()
        })

        //reset ID to 0
        toDoID = 0
    })
}
deleteAll()

//CREATE HTML ELEMENTS(LIST AND DELETE BUTTON)
const createListWithButtons = () =>{

    //create list container and grabs attribute values
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    for (let i = 0; i < toDoList.length;i++){
        list.setAttribute('id', toDoList[i].id)
    }
    listContainer.appendChild(list)
    const listID = list.getAttribute('id')

    //create title box
    const toDoTitle = document.createElement('li')
    list.appendChild(toDoTitle)
    for(let i=0; i<toDoList.length;i++){
        toDoTitle.textContent = `#${toDoList[i].id}. ${toDoList[i].title}`
    }

    //create delete button element
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','delete-btn')
    list.appendChild(deleteBtn)
    deleteBtn.textContent = "DELETE"

    //delete event listener
    deleteBtn.addEventListener('click',()=>{
        for (let i = 0; i < toDoList.length;i++){
            if(parseInt(listID) === toDoList[i].id){
                toDoList.splice(i,1)
                console.log(toDoList)
            }
            list.remove()
        }
        //decrease id on every delete
        toDoID--
    })
}