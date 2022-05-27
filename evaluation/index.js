const contentContainer = document.querySelector('.content-container')
const submitBtn = document.querySelector('.submit-button')
const inputBox = document.querySelector('.input-box')

//array/object container
let array = []

//get api data
const getData = (artist) => {
    fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`,{mode: 'cors'})
    .then(res=>res.json())
    .then(res=>{
        array = res.results
        renderDisplay()
    })
    .catch(()=>{
        alert('no user found')
    })
}

//press submit to receive specific api data
const submit = () =>{
    submitBtn.addEventListener('click',()=>{
        loadingScreen()
        if(inputBox.value === "" || inputBox.value === null){
            alert("type a artist!")
            return
        }
        let artists = inputBox.value
        getData(artists)
    })
}
submit()

//render api on browser screen
const renderDisplay = () =>{
    let render = array.map(arr=>{
        return (`<div class="album-info-container"> 
                    <ul>
                        <li><img src=${arr.artworkUrl60} alt="album-picture" class="album-img"/>
                        <li>Artist: <b style="color:green">${arr.artistName}</b></li>
                        <li>Album Name: <b style="color:red">${arr.collectionName.toUpperCase()}</b></li>
                        <li>Album Price: <b style="color:blue">$${arr.collectionPrice}</b></li>
                        <li><button class="delete-btn" id="${arr.collectionId}">Close</button></li>
                    </ul>
                </div>
        `)
    }).join('')
    setTimeout(()=>{
        deleteAlbumBtn()
    },500)
    contentContainer.innerHTML = render
}

//show "loading album" before api is fetched and displayed
const loadingScreen = () =>{
    contentContainer.innerHTML = `<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>`
}

//delete button to remove specific album from your screen
const deleteAlbumBtn = () =>{
    const deleteBtn = document.querySelectorAll('.delete-btn')
    deleteBtn.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            array = [...array]
            for (let i = 0; i < array.length;i++){
                if(+e.target.id === array[i].collectionId){
                    array.splice(i,1)
                }
            }
            let newRender = array.map(arr=>{
                return (`<div class="album-info-container"> 
                            <ul>
                                <li><img src="${arr.artworkUrl60}" alt="album-picture" class="album-img"/>
                                <li>Artist: <b style="color:green">${arr.artistName}</b></li>
                                <li>Album Name: <b style="color:red">${arr.collectionName.toUpperCase()}</b></li>
                                <li>Album Price: <b style="color:blue">$${arr.collectionPrice}</b></li>
                                <li><button class="delete-btn" id="${arr.collectionId}">Close</button></li>
                            </ul>
                        </div>
                `)
            }).join('')
            setTimeout(()=>{
                deleteAlbumBtn()
            },500)
            contentContainer.innerHTML = newRender
        })
    })
}
