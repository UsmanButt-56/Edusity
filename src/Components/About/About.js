import React from 'react'
import './About.css';
import about_image from '../../Assests/about.png';
import play_icon from '../../Assests/play-icon.png';
const About = () => {
  return (
    <div className="About" id="about">
        <div className="About-left">
            <img src={about_image} alt="" className='about-image'/>
            <img src={play_icon} alt="" className='play-image'/>
        </div>
        <div className="About-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsa nostrum beatae sed nesciunt vitae, eligendi amet 
                cupiditate voluptatibus labore molestiae. Exercitatio
                nem quo numquam recusandae laboriosam ducimus quis qu
                os blanditiis, laudantium nobis praesentium.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli
                t. Nisi odio quasi animi, veritatis sequi labore cumqu
                e vero aspernatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto sit consequuntur vel laboriosam omnis ea, an
                imi ut veritatis, suscipit debitis error. Aliquam est s
                equi temporibus.</p>
        </div>
    </div>
  )
}

export default About