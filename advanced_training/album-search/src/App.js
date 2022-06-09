import React,{Component} from 'react'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data : [],
      artistName: "",
      loading: true
    }
  }

  getAlbumData(artist){
    fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then(res=>res.json())
      .then(res=>{
        this.setState({
          data:res.results,
        })
      })
  }

  render(){
    return(
      <div>
        <header className='title-container'>
          <h1>React Album Search</h1>
        </header>
        <section className='search-container'>
          <input type='text' placeholder='....' onChange={(e)=>{
            this.setState({artistName: e.target.value})
          }}/>
          <button onClick={()=>{
            this.getAlbumData(this.state.artistName)
            this.setState({loading:false})
          }}>SEARCH</button>
        </section>
        <section className='total-result-container'>
          { this.state.loading ?  "" :<p>{this.state.data.length} results for "{this.state.artistName}"</p>}
        </section>
        <section className='album-content-container'>
          {  this.state.loading ? "" :  this.state.data.map((album,i)=>{
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