const getButton = document.querySelector('.fetch-todo')
const infoContainer = document.querySelector('.info-container')

const toDoData = () =>{ 
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        renderData(res)
    })
}
toDoData()

const renderData = (res) =>{
    createList(res)
}

const createList = (res) => {
    for (let i = 0; i<res.length;i++){
        const details = document.createElement('p')
        details.setAttribute('class','details')
        infoContainer.appendChild(details)

        const taskNumber = document.createElement('p')
        taskNumber.setAttribute('class', 'task-number')
        details.appendChild(taskNumber)

        const list = document.createElement('p')
        list.setAttribute('class', 'list')
        details.appendChild(list)
    
        const status = document.createElement('p')
        status.setAttribute('class', 'status')
        details.appendChild(status)
    
        taskNumber.textContent = `#${res[i].id}`
        list.textContent = `Title: ${res[i].title.toUpperCase()}`
        status.textContent = `Complete Status: ${res[i].completed}`
    }
}