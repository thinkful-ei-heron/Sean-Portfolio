import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Landing from './Landing'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './home.css'

class Home extends Component {

    state={
        page:''
    }

    setPage=(newPage)=>{
        this.setState({page:newPage})
    }

    renderRoutes(){
        return(
            <div>
                <Route
                    exact
                    path='/'
                    component={Landing}
                />
                <Route
                    path='/about'
                    component={About}
                />
                <Route 
                    path='/projects'
                    component={Projects}
                />
                <Route
                    path='/contact'
                    component={Contact}
                />
            </div>
        )
    }

    render() {

        return(
            <div className='Home'>
                <nav className='navLinks'>
                    <NavLink className='homeNavLink' to={`/`}>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink className='aboutNavLink' to={`/about`}>
                        <h3 className='borderedLink'>About</h3>
                    </NavLink>
                    <NavLink className='projectsNavLink' to={`/projects`}>
                        <h3 className='borderedLink'>Projects</h3>
                    </NavLink>
                    <NavLink className='contactNavLink' to={`/contact`}>
                        <h3>Contact</h3>
                    </NavLink>       
                </nav>
                <main>
                    {this.renderRoutes()}
                </main>
            </div>
        )
    }
}

export default Home