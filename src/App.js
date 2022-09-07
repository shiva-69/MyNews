import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Sports } from './Pages/Sports';
import { Travel } from './Pages/Travel';
import { Culture } from './Pages/Culture';
import { NewsDetails } from './Components/NewsDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
          
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail" element={<NewsDetails/>}></Route>
          <Route path="/sports" element={<Sports/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/culture" element={<Culture/>} />
      </Routes>
    </div>
  );
}

export default App;
