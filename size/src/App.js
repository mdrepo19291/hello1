import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar/NavBar'
//import Nvbar from './NavBar/Nvbar'
import ReactHome from './ReactHome'
import ItemCard from './Components/ItemCard/ItemCard'
//import ErrorBoundary from './ErrorBoundary'
import data from './data/data.json'

const Science = (props) => {
  console.log(data)
  return(
    <>
    <h1>This is Science</h1>
    <div className="cards">
    {
      data.map((item)=>(
        <ItemCard
          title={item.title}
          img={item.img}
        />
      ))
    }
    </div>
  </>
)}
const Default = (props) => {
  return(
    <>
    <ItemCard/>
    <h1>
      No Page found. ({props.match.params.sec})
    </h1>
    </>
)
}

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className="main">
      <Switch>
        <Route path="/" component={Default} exact />
        <Route path="/science" component={Science} exact />
        <Route path="/:sec"component={Default}/>
      </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
