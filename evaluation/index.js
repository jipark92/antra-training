const contentContainer = document.querySelector('.content-container')
const submitBtn = document.querySelector('.submit-button')
const inputBox = document.querySelector('.input-box')
const resultContainer = document.querySelector('.result-container')

let albumArray = []

const getData = (artist) => {
    fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`,{mode: 'cors'})
    .then(res=>res.json())
    .then(res=>{
        albumArray = res.results
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
    let render = albumArray.map(arr=>{
        return (`
                <div class="album-info-container"> 
                    <img src=${arr.artworkUrl60} alt="album-picture" class="album-img"/>
                    <p>Artist:<b style="color:green">${arr.artistName}</b></p>
                    <p>Album:<b style="color:green">${arr.collectionName.toUpperCase()}</b></p>
                </div>
            `)}).join('')

    contentContainer.innerHTML = render

    let resultText = `<h4>${albumArray.length} results for "${inputBox.value.toUpperCase()}"</h4>`
    resultContainer.innerHTML = resultText
}

const loadingScreen = () =>{
    contentContainer.innerHTML = `<p>Loading Album...</p>`
}