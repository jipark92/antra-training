import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;