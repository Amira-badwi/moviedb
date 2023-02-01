import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home/home';
import { Provider } from 'react-redux';
import Store from './store/store';

function App() {
  return (
    <>
   <Provider store={Store}>
   <Home/>
    </Provider> 
    </>
  );
}

export default App;
