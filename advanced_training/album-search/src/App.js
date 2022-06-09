import React,{Component} from 'react'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data : []
    }
  }


  componentDidMount(artistName){
    fetch(`https://itunes.apple.com/search?term=gaga&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then(res=>res.json())
      .then(res=>{
        this.setState({data:res.results})
        console.log(this.state.data)
      })
  }

  render(){
    // console.log('render called')
    return(
      <div>
        <header className='title-container'>
          <h1>React Album Search</h1>
        </header>

        <section className='search-container'>
          <input type='text' placeholder='...' onChange={(e)=>{
            console.log(this.state.search)
            // this.setState({search: e.target.value})
          }}/>
          <button onClick={()=>{
            // getData(artistName)
          }}>getData</button>
        </section>

        <section className='total-result-container'>
          <p>### / 200 results for "_____"</p>
        </section>

        <section className='album-content-container'>
          {this.state.data.map((album,i)=>{
            return (
            <div  className='album-card' key={i}>
              <img src={album.artworkUrl60} alt="album-pic" className="album-picture"/>
              <br></br>
              <p>Artist Name: {album.artistName}</p>
              <br></br>
              <p>Album Name: {album.collectionName}</p>
            </div>
            )
          })}
        </section>
        
      </div>
    )
  }
}

export default App;


// let albumArray = []
// let artistName = "";

// const getData =(artist) =>{
//   console.log('clicked')

//   fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`)
//   .then(res=>res.json())
//   .then(res=>{
//     albumArray = res.results
//     console.log(albumArray)

//   })
// }
// getData("gaga")
