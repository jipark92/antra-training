const contentContainer = document.querySelector('.content-container')
const submitBtn = document.querySelector('.submit-button')
const inputBox = document.querySelector('.input-box')
const resultContainer = document.querySelector('.result-container')

let array = []

const getData = (artist) => {
    fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`,{mode: 'cors'})
    .then(res=>res.json())
    .then(res=>{
        array = res.results
        renderDisplay()
    })
    .catch(()=>{
        alert('no artist found')
    })
}

const submit = () =>{
    submitBtn.addEventListener('click',()=>{
        loadingScreen()
        if(inputBox.value === ""){
            alert("type a artist!")
            return
        }
        let artists = inputBox.value
        getData(artists)
    })
}
submit()

const renderDisplay = () =>{
    let render = array.map(arr=>{
        return (`
                <div class="album-info-container"> 
                    <ul>
                        <img src=${arr.artworkUrl60} alt="album-picture" class="album-img"/>
                        <p>Artist: <b style="color:green">${arr.artistName}</b></p>
                        <p>Album Name: <b style="color:red">${arr.collectionName.toUpperCase()}</b></p>
                    </ul>
                </div>
        `)
    }).join('')

    contentContainer.innerHTML = render

    let resultText = `<h5>${array.length} results for "${inputBox.value}"</h5>`
    resultContainer.innerHTML = resultText
}

const loadingScreen = () =>{
    contentContainer.innerHTML = `<p>Loading Album...</p>`
}