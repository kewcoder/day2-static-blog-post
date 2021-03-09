import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children, Layout } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
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
          to={location.pathname === blogPath ? `/blog/` : `/`}
        >
          Kew<span className="text-primary">Blog</span>
        </Link>
        <div className="menu_btn"><span></span>Menu</div>

      </h1>
      )
    } else {
      header = (
        <h1
          className="navbar"
        >
          <div  className="back_btn"><span></span>Back</div>

          <Link
            className="logo"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            Kew<span className="text-primary">Blog</span>
          </Link>

        </h1>
      )
    }
    return (
      <Wrapper >
        <div
        className={Layout}
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
          <a href="https://www.kewcoder.github.io">KewCoder</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
