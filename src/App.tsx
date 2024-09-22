import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Menu1 from "./Menu1";

import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">

              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/menu1">
                <Menu1 />
              </Route>
              <Route exact path="/menu2">
                <Menu2 />
              </Route>
              <Route exact path="/menu3">
                <Menu3 />
              </Route>
              <Route exact path="/menu4">
                <Menu4 />
              </Route>
              <Route exact path="/menu5">
                <Menu5 />
              </Route>
              <Route exact path="/about_us">
                <AboutUs />
              </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
