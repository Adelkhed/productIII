
import './App.css';
//import CreateProduct from './components/CreateProduct';
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <h1>Products</h1>
         
        <Routes>
            
            <Route  path='/' element= {<Main />} />
            <Route path='/products/:product_id' element={<OneProduct />} />
        </Routes>
    </div>
  );
}

export default App;
