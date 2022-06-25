import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of wireframes for UI/UX overflow.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Can use Figma and other softwares to create UI/UX designs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Can use React framework for frontend web development.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can develop Django framework based projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can also develop Node framework based projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fullstack projects can be done as well.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>RESTful API for the website can also be created.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment of the projects only for the development purposes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Further maintenance for the website can also be done.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className='service__head'>
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can develop full fledged softwares.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can develop AI (especially Computer Vision) projects using OpenCV.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Also softwares can be created using Python (if possible).</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services