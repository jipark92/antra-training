import CounterFn from './component/counter/CounterFn';
import {Provider} from 'react-redux'
import counterRedux from './redux/counterRedux'
import BuyStockFn from './component/buystock/BuyStockFn';
import { BuyStockProvider } from './context/BuyStockContext';


function App() {
  return (
    <div className="App">
        {/* redux */}
        <Provider store={counterRedux}>
          <CounterFn/>
        </Provider>

        {/* context */}
        <BuyStockProvider>
          <BuyStockFn/>
        </BuyStockProvider>
    </div>
  );
}

export default App;