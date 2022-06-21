import CounterFn from './component/counter/CounterFn';
import {Provider} from 'react-redux'
import counterRedux from './redux/counterRedux'

function App() {
  return (
    <div className="App">
        <Provider store={counterRedux}>
          <CounterFn/>
        </Provider>
    </div>
  );
}

export default App;
