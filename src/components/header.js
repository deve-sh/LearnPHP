import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#17242a`,
      color: `#ffffff`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}
      className = 'row'
    >
      <div className='col col-sm-6'>
        <h3 className='heading'>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
      <div className='col col-sm-6' style={{color: 'white',textAlign:'right',fontFamily:`sans-serif`, fontSize: `0.9em`}}>
        <a href='https://github.com/deve-sh' target='_blank'>Github</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
