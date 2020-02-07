import React, { Component } from 'react'
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

    render() {

        return(
            <div className='Home'>
                <nav className='navLinks'>
                    <h3>Home</h3>
                    <h3 className='borderedLink'>About</h3>
                    <h3 className='borderedLink'>Projects</h3>
                    <h3>Contact</h3>
                </nav>
                <main>
                    {this.state.page==='home' ? <p>Hello! I'm Sean, a full-stack web developer based out of Washington D.C. .</p> : null}
                    <Contact />
                </main>
            </div>
        )
    }
}

export default Home