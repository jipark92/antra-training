import React,{Component} from 'react'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      albumData : [],
      artistName: "",
      loading: true,
      loadingText: "",
      showMore: 5
    }
  }

  getAlbumData(artist){
    this.setState({
      loadingText: "Loading...",
    })
    fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then(res=>res.json())
      .then(res=>{
        this.setState({
          albumData:res.results,
          loading: false,
        })
      })
      .catch((err)=>{
        alert('no artist found')
      })
  }

  loadMore(){
    if(!this.state.artistName)return
    this.setState({
      showMore: this.state.showMore + 5
    })
  }

  render(){
    return(
      <div>
        <header className='title-container'>
          <h1>React Album Search</h1>
        </header>
        <section className='search-container'>
          <input 
            type='text' 
            placeholder='....' 
            onChange={(e)=>{
              this.setState({artistName: e.target.value})
            }}
            />
          <button onClick={()=>{
            if(this.state.artistName === "")alert('type a artist')
            this.getAlbumData(this.state.artistName)
          }}>SEARCH</button>
        </section>
        <section className='total-result-container'>
          { this.state.loading ?  "" :<p>{this.state.showMore}  / {this.state.albumData.length} results for "{this.state.artistName}"</p>}
        </section>
        <section className='album-content-container'>
          {this.state.loading ? this.state.loadingText :  this.state.albumData.map((album,i)=>{
            return (
            <div  className='album-card' key={i}>
              <img src={album.artworkUrl60} alt="album-pic" className="album-picture"/>
              <br></br>
              <p>Artist Name: {album.artistName}</p>
              <br></br>
              <p>Album Name: {album.collectionName}</p>
            </div>
            )
          }).splice(0,this.state.showMore)}
        </section>
        <button  className='show-more-btn' onClick={()=>{this.loadMore()}}>show more</button>
      </div>
    )
  }
}

export default App;