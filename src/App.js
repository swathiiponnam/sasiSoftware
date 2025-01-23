
import { Provider } from 'react-redux';
import './App.css';
import LiveUpdator from './components/LiveUpdator';
import Updator from './components/Updator';
import store from './store';

function App() {
  return (
    <div className="App">
         <Provider store={store}>
         <Updator/>
         <LiveUpdator/>
         </Provider>
    </div>
  );
}

export default App;
