import './Header.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <div className='logo-text'>HC hihi</div>
        <i className="fa fa-play-circle" aria-hidden="true"></i>
      </div>
      <div className='power'>
        <Link to="/"><button><i className="fa fa-power-off" aria-hidden="true"></i></button></Link>
      </div>
      <a target="_blank" href="mailto:cauindo113@gmail.com">
        <h3 >Say hi..</h3>
        </a>
    </header>
  )
}

export default Header