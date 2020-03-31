import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Navbarr from './NavBar/Navbarr'
import Top10 from './Section/Top10/Top10'
import Compare from './Section/Compare/Compare'
import Share from './Components/Share/Share'
import ReactHome from './ReactHome'
import ItemCard from './Components/ItemCard/ItemCard'
import Card from './Components/Card/Card'
import './Utility/bootstrap.min.css'

//import ErrorBoundary from './ErrorBoundary'
import data from './data/data.json'

const Home = (props) => {
  console.log(data)
  return(
    <>
    <div className="cont">
      <h1>This is Home</h1>
    </div>
    <h4 class="font-weight-bold mt-4">Top 10</h4>
    <hr class="red title-hr bg-danger" />
    <div className="cards">
      <Card title="Title-1 goes here"/>
      <Card title="Title-2 is bit different" desc=" "/>
      <Card />
      <Card title="Title-4 is bit different" desc=" "/>
    </div>
    <h4 class="font-weight-bold mt-4">Comparision</h4>
    <hr class="red title-hr bg-danger" />
    <div className="cards">
      <Card title="Title-1 goes here"/>
      <Card title="Title-2 is bit different" desc=" "/>
      <Card />
      <Card title="Title-4 is bit different" desc=" "/>
      </div>
      
      {/*
      data.map((item)=>(
        <ItemCard
          title={item.title}
          img={item.img}
        />
      ))
      */}
    
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
      <Navbarr/>
      <div className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/science" component={Default} exact />
        <Route path="/top-10/:sec"component={Top10} exact/>
        <Route path="/compare/:comp"component={Compare} exact/>
        <Route path="/:sec"component={Default}/>
      </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
