import React from 'react';
import Card from '../../Components/Card/Card';
import { useFetch } from '../../Utility/Functions';

const Home = (props) => {
    

    const data = useFetch('data');
    console.log("Fetched data: ",data);
    const tCompare = data ? data.filter((x)=>(x.type === "top-10")) : null;
    const tTopTen = data ? data.filter((x)=>(x.type === "compare")) : null;
    console.log("Fetched compare: ",tCompare, tTopTen);
    return(
      <>
        <div className="cont d-flex align-content-center text-align-center flex-wrap">
            <h1 className="mx-auto text-white">This is Home</h1>
        </div>

      <h4 class="font-weight-bold mt-4">Top 10</h4>
      <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tCompare ? 
                tCompare.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} img={topic.img}/>
                )) 
                : null
        }
        </div>
        {/* <div className="cards">
            <Card title="Title-1 goes here"/>
            <Card title="Title-2 is bit different" desc=" "/>
            <Card />
            <Card title="Title-4 is bit different" desc=" "/>
        </div> */}

      <h4 class="font-weight-bold mt-4">Comparision</h4>
      <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tTopTen ? 
                tTopTen.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={`/compare/${topic.id}`} img={topic.img}/>
                )) 
                : null
        }
        </div>
        {/* <div className="cards">
            <Card link="/compare/title-1" title="Title-1 goes here"/>
            <Card link="/compare/title-1" title="Title-2 is bit different" desc=" "/>
            <Card />
            <Card title="Title-4 is bit different" desc=" "/>
        </div> */}
        
        <h4 class="font-weight-bold mt-4">Recent Videos</h4>
        <hr class="red title-hr bg-danger" />
      
    </>
  )}

  export default Home;








// class Home extends React.Component {
//     constructor(){
//         super();

//         this.state = {
//             isLoading = false
//         }
//     }

//     render() {
//         return{
            
//         }
//     }
// }