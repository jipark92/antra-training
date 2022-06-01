const contentContainer = document.querySelector('.content-container')
const submitBtn = document.querySelector('.submit-button')
const inputBox = document.querySelector('.input-box')
const resultContainer = document.querySelector('.result-container')
const showMoreBtn = document.querySelector('.show-more-btn')

let albumArray = []
let num = albumArray.length - 20

const showMore = () =>{ 
    showMoreBtn.addEventListener('click',()=>{
        console.log('showmore')
        if(inputBox.value === "" || !albumArray.length)return

        if(-num < albumArray.length){
            num = num - 20
        } else{
            alert('end of page')
        }
        renderDisplay()
    })
}
showMore()

const getData = (artist) => {
    fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`,{mode: 'cors'})
    .then(res=>res.json())
    .then(res=>{
        if(inputBox.value === ""){
            alert("type a artist!")
            return
        }
        albumArray = res.results
        renderDisplay()
    })
    .catch(()=>{
        alert('no artist found')
    })
}

const submit = () =>{
    submitBtn.addEventListener('click',()=>{
        if(inputBox.value === ""){
            alert("type a artist!")
            return
        }
        loadingScreen()

        let artists = inputBox.value
        getData(artists)

        num = albumArray.length - 20
    })
}
submit()

const renderDisplay = () =>{
    let render = albumArray.map(arr=>{
        return (`
                <div class="album-info-container"> 
                    <img src=${arr.artworkUrl60} alt="album-picture" class="album-img"/>
                    <p>Artist: <b style="color:green">${arr.artistName}</b></p>
                    <p>Album: <b style="color:green">${arr.collectionName.toUpperCase()}</b></p>
                </div>
            `)}).splice(0,-num).join('')

    contentContainer.innerHTML = render

    let resultText = `<h4>${Math.abs(num)} / ${albumArray.length} results for "${inputBox.value.toUpperCase()}"</h4>`
    resultContainer.innerHTML = resultText
}

const loadingScreen = () =>{
    contentContainer.innerHTML = `<p>Loading Album...</p>`
}

const inputBoxSubmit = () => {
    inputBox.addEventListener('keypress',(e)=>{
        if(e.keyCode === 13){
            console.log('entered')
            e.preventDefault()
            let artists = inputBox.value
            getData(artists)
        }
    })
}
inputBoxSubmit()