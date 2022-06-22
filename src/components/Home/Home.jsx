import React from 'react'
import './Home.scss'
import Particles from 'react-particles-js-div'
import Cirle from './Cirle'
import { Link } from 'react-router-dom'
import profileImg from '../../asset/image/profile-img.png'

const Home = () => {
  const Handelprefix = () => {
    document.querySelector("#prefixID").classList.toggle("prefix_position")
    document.querySelector("#mainInfoID").classList.toggle("set-main-info")
  }
  return (
    <div className='Home'>
      <div className='Home-Particles'>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 4,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 4,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 200,
	                "duration": 4
	            }
	        }
	    }
	}} />
      </div>
      <div className='main-info' id='mainInfoID'>
        <div className='info-box'>
          <div className='info-childen'>
            <h1>Hi,</h1>
            <h3>I'm Cau indo.</h3>
            <span>I design and Code simple yet beautiful websites.</span>
          </div>
          <img src={profileImg} alt="" />
          </div>
      </div>
      <div className='main'>
        <div className='top'>
          <Link to="/work"><h2>Work</h2></Link>
          <div onClick={Handelprefix} id='prefixID' className='prefix_index'>
             <Cirle/>
             {/* <svg aria-hidden="true" data-prefix="fas" data-icon="yin-yang" className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="200" height="200" fill="currentColor"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg> */}
          </div>
          <Link to="/blog"><h2>Blog</h2></Link>
        </div>
        <div className='bottom'>
          <Link to="/about"><h2>About.</h2></Link>
          <Link to="/skills"><h2>My Skills.</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Home