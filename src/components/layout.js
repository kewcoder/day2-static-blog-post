import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Tag from "./tag"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {

 
  
  state = {
    menuIsActive: true,
    darkMode: false
  };


  toggleMenu = () => {
    this.setState(state => ({ menuIsActive: !state.menuIsActive }));

  };

  toggleDarkMode = () => {
    localStorage.setItem("dark_mode", !this.state.darkMode)

    this.setState(state => ({ darkMode: !state.darkMode }));

  };

  componentDidMount() { 

    if(window.matchMedia("(max-width: 1200px)").matches){

      this.setState(() => ({ menuIsActive: false}));

    }

     let darkMode = (localStorage.getItem('dark_mode') == 'true') ? true : false

      this.setState(() => ({ 
        darkMode:  darkMode || false
       }));

       console.log(this.state.darkMode)
    
    
  }

  render() {
    const { children} = this.props

    let header = (
        <h1
        className="navbar"
      >
        <Link
          className="logo"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Kew<span className="text-primary">Blog</span>
        </Link>
        <div className="menu_btn" >
         
          <svg onClick={this.toggleDarkMode} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
          </svg>

          <svg  onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>

        </div>

      </h1>
      )
    
    return (
      <Wrapper className={(this.state.darkMode) ? 'dark-mode' : 'light-mode'}>

      <div className={(this.state.menuIsActive) ? 'd-block' : 'd-none'}>
        <Tag onClick={this.toggleMenu} />
      </div>

        <div
        className={(this.state.menuIsActive)?'home':''}
        style={{
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.kewcoder.github.io" style={{ boxShadow: `none`, color:'var(--color)' }}>KewCoder</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top:30px;
`

const Footer = styled.footer`
  text-align: center;
  padding: 24px;
`


export default Layout
