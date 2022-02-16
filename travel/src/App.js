// import './App.css';
import data from './data/db.json'
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import {Route, Routes} from "react-router-dom";

export default function App() {
  console.log(data);
  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<Home data={data.data} />}/>
          <Route path="/tour/:id" element={<TourDetails data={data.data} />} />
          
      </Routes>
       
    </div>
  );
}

