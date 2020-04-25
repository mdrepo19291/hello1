import React from 'react';
import './App.scss';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Navbarr from './NavBar/Navbarr'
import Top10 from './Section/Top10/Top10'
import Compare from './Section/Compare/Compare'
import Default from './Section/Default'
import Home from './Section/Home/Home';
// import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
// import Carousal from './Components/Carousal/Carousal'
import AddDocument from './Section/AddDocument'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Utility/bootstrap.min.css'
// import './Utility/mdb.min.css'

//import ErrorBoundary from './ErrorBoundary'
// import data from './data/data.json'


// const Default = (props) => {
//   return(
//     <>
//     <ItemCard/>
//     <h1>
//       Under construction. ({props.match.params.sec})
//     </h1>
//     {/* <Carousal /> */}
//     <br />
    
//     </>
// )
// }

function App() {
  return (
    <>
    <Router>
      <Navbarr/>
      <div className="main clearfix">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/science" component={Default} exact />
        <Route path="/top-10/:topicId"component={Top10} exact/>
        <Route path="/compare/:topicId"component={Compare} exact/>
        <Route path="/add-document" component={AddDocument} exact/>
        <Route path="/:sec"component={Default}/>
      </Switch>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
