
import React from 'react';
import './App.css';
import Routes from './routes'
import toast,{Toaster} from 'react-hot-toast'
import { MyContextProvide } from './components/contexts';


function App() {
  return (
    <div className="App">
      <Toaster />
      <MyContextProvide>
     <Routes />
      </MyContextProvide>
    </div>
  );
}

export default App;
