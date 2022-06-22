import React from 'react'
import './About.scss'
import Spaceman from '../../asset/image/spaceman.png'
import Particles from 'react-particles-js-div'
const About = () => {
	return (
		<div className='About'>
			<div className='Particles'>
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
			<div className='About-inner'>
				<h1>ABOUT</h1>
				<div className='content'>
					<p>
						I'm a front-end developer located in Viet Nam. I love to create simple yet beautiful websites with great user experience.

						I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.

						I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
					</p>
				</div>
				<div className="Spaceman">
				<img src={Spaceman} alt="" />
				</div>
			</div>
			
		</div>
	)
}

export default About