import CounterFn from './component/counter/CounterFn';
import {Provider} from 'react-redux'
import counterRedux from './redux/counterRedux'
import BuyStockFn from './component/buystock/BuyStockFn';
import { BuyStockProvider } from './context/BuyStockContext';
import BuyStockClass from './component/buystock/BuyStockClass';
import CounterClass from './component/counter/CounterClass';

function App() {
  return (
    <div className="App">
        {/* redux */}
        <Provider store={counterRedux}>
          <CounterFn/>
          <CounterClass/>
        </Provider>

        {/* context */}
        <BuyStockProvider>
          <BuyStockFn/>
          <BuyStockClass/>
        </BuyStockProvider>

    </div>
  );
}

export default App;