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

const createList = () =>{
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    listContainer.appendChild(list)


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
        // console.log('delted')
        for (let i = 0; i < toDoList.length;i++){
            if(toDoTitle.textContent === toDoList[i].title){
                console.log('delted')

                toDoList.splice(i,1)
                console.log(toDoList)
            }
        }
    })
}
