import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbarr from './NavBar/Navbarr'
import Top10 from './Section/Top10/Top10'
import Compare from './Section/Compare/Compare'
import Videos from './Section/Videos/Videos'
import Default from './Section/Default'
// import SecVideos from './Section/SecVideos/SecVideos'
import Home from './Section/Home/Home';
// import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
// import Carousal from './Components/Carousal/Carousal'
// react-sticky for sticky scrolls
import AddDocument from './Section/AddDocument'


function App() {
  return (
    <>
    <Router>
      <Navbarr/>
      <div className="main clearfix">
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/science" component={Default} exact /> */}
        <Route path="/top-10/:topicId"component={Top10} exact/>
        <Route path="/compare/:topicId"component={Compare} exact/>
        <Route path="/videos/:topicId"component={Videos} exact/>
        <Route path="/add-document" component={AddDocument} exact/>
        <Route path="/videos"exact>
          <Videos noComment={true}/>
        </Route>
        <Route path="/:sec"component={Default}/>
      </Switch>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
