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
        const list = document.createElement('p')
        list.setAttribute('class', 'list')
        infoContainer.appendChild(list)
    
        const status = document.createElement('p')
        status.setAttribute('class', 'status')
        infoContainer.appendChild(status)
    
        
        list.textContent = `#${res[i].userId} ${res[i].title}`
        status.textContent = res[i].completed
    }
}

