import React from 'react';
import './NavBar.scss'
import Logo from './size-logo.png'
import { useParams, NavLink } from 'react-router-dom';
//import ErrorBoundary from '../ErrorBoundary';

const navLinks = [
        {name:'Science',type:'link'},
        {name:'Wildlife',type:'link'},
        {name:'Pre-historic',type:'link'}, 
        {name:'Monsters',type:'link'},
        {name:'Movies',type:'link'},
        {name:'Statistics',type:'link'},
        {name:'More',type:'dropdown',options:['About Us','Request Topics']}]

class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            currentView: "Wildlife",
            isLoading: false
        }
    }
    componentDidMount(){
        // Header background change
        var header = document.querySelector('#root > header');
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header.classList.add('bg-dark');
                header.style.transition = 'all 0.5s'
            } else {
                header.classList.remove('bg-dark');
            }
        });
    }
    
    render(){

      return(
        <>
          <header className="header">
            <nav>
                <NavLink to="/" exact>
                  <img className="nav-logo" alt="site-logo" src={Logo} />
                </NavLink>

                <div className="nav-links">
                  {
                    navLinks.map((link, ind)=>(
                        <NavLink to={"/"+link.name.toLowerCase()}>
                            {link.name}
                        </NavLink>
                    ))
                  }
                </div>
            </nav>
          </header>
        </>
      )
    }
    
}

export default NavBar;