import './App.css';
import BrowserRouter from "react-router-dom";
import Route from "react-router-dom";
import Redirect  from "react-router-dom";
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    // <>
    //   <Home />
    // </>
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Route path="/" render={props => <Home {...props} />} />
          <Route path="/TourDetails/:id" render={props => <TourDetails {...props} />} />
          <Redirect from="*" to="/" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
