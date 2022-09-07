import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Sports } from './Pages/Sports';
import { Travel } from './Pages/Travel';
import { Culture } from './Pages/Culture';
import { NewsDetails } from './Components/NewsDetails';
import {useSelector} from "react-redux";

function App() {
  const {news} = useSelector(state=> state);
  return (
    <div className="App">
      <Navbar/>
          
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail" element={Object.getOwnPropertyNames(news).length !== 0 ? <NewsDetails/> : <Home/>}></Route>
          <Route path="/sports" element={<Sports/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/culture" element={<Culture/>} />
      </Routes>
    </div>
  );
}

export default App;
