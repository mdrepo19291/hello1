import React from 'react';
import './NavBar.scss'
import Logo from './size-logo.png'
import { useParams, NavLink } from 'react-router-dom';
//import ErrorBoundary from '../ErrorBoundary';

const navLinks = [
          //  {name:'New',type:'link',link:'add-document'},
           {name:'Sports',type:'link',link:'sports'},
           {name:'Animals',type:'link',link:'animals'},
           {name:'Top 10',type:'link',link:'top-10'},
           {name:'Comparision',type:'link',link:'compare'},
           {name:'Videos',type:'link',link:'videos'},
        // {name:'Pre-historic',type:'link',link:'pre-historic'},
        // {name:'Monsters',type:'link',link:'monsters'},
        // {name:'Movies',type:'movies',link:'movies'},
        // {name:'Statistics',type:'link',link:'statistics'},
        // {name:'More',type:'dropdown',options:['About Us','Request Topics']}
      ]
const more = [
            {name:'Military',type:'link',link:'military'},
            {name:'Superhero',type:'link',link:'superhero'},
            {name:'Anime',type:'link',link:'anime'},
            {name:'Monsters',type:'link',link:'monsters'},
            {name:'Infrastractures',type:'link',link:'infrastructure'},
            {name:'Gaming',type:'link',link:'gaming'},
            {name:'Countries',type:'link',link:'countries'},
            {name:'Geography',type:'link',link:'geography'},
            {name:'Space',type:'link',link:'space'}
          ]

class Navbarr extends React.Component {
    constructor(){
        super();
        // this.state = {
        //     currentView: "Wildlife",
        //     isLoading: false
        // }
    }
    componentDidMount(){
        // Header background change
        let header = document.querySelector('.header');
        let nav = document.querySelector('nav');
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                header.classList.add('bg-custom');
                nav.classList.add('py-0');
                // header.style.transition = 'all 0.5s';
            } else {
                header.classList.remove('bg-custom');
                nav.classList.remove('py-0');
            }
        });
        window.addEventListener('click',(e)=>{
          if(document.querySelector('#navbarTogglerDemo02').classList.contains('show'))
            document.querySelector('button.navbar-toggler').click();
        })
        // document.querySelector('nav > div > button').addEventListener("click",function(){
        //     nav.style.backgroundColor = document.querySelector('#navbarTogglerDemo02').classList.toggle('show')?"rgb(72, 161, 253)":'inherit';
        //     // document.querySelector('#navbarTogglerDemo02').classList.toggle('show')
        //     // document.querySelector('#navbarTogglerDemo02').classList.toggle('bg-custom')
        // })
    }
    
    render(){

      return(
        <>
        <header>
    <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar">
      <div class="container">
        <NavLink class="navbar-brand py-0" to="/">
          <img className="nav-logo" alt="site-logo" src={Logo} />
        </NavLink>
        <button class="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse top-nav-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto smooth-scroll">
            {/* <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#about" data-offset="100">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#portfolio" data-offset="90">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#contact" data-offset="100">Contact</a>
            </li> */}
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 More
               </a>
               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    more.map(e=>
                      <a class="dropdown-item" href={'/'+e.link}>{e.name}</a>
                    )
                  }
               </div>
            </li>
            {
              navLinks.map((link, ind)=>(
                <li class="nav-item">
                  <NavLink 
                    to={link.link?"/"+link.link:"#"
                  } className="nav-link">
                      {link.name}
                  </NavLink>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </nav>
    </div>
    </header>

{/* 
          <header className="header">
            <nav>
                <NavLink to="/" exact>
                  <img className="nav-logo" alt="site-logo" src={Logo} />
                </NavLink>

                <div className="nav-links">
                  {
                    navLinks.map((link, ind)=>(
                        <NavLink 
                          to={"/compare/title-1" //"/"+link.name.toLowerCase()
                        }>
                            {link.name}
                        </NavLink>
                    ))
                  }
                </div>
            </nav>
          </header>*/}
        </>
      )
    }
    
}

export default Navbarr;
