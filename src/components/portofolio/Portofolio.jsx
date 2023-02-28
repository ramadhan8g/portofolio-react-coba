import React from 'react'
import './portofolio.css'
import IMG1  from '../../assets/portfolio1.jpg'
import IMG2  from '../../assets/portfolio2.jpg'
import IMG3  from '../../assets/portfolio3.jpg'
import IMG4  from '../../assets/portfolio4.jpg'
import IMG5  from '../../assets/portfolio5.png'
import IMG6  from '../../assets/portfolio6.jpg'

// data array
const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:2,
    image: IMG2,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/16580766-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:3,
    image: IMG3,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/17290917-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:4,
    image: IMG4,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/166955822-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:5,
    image: IMG5,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/16541289-Orion-Ui-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:6,
    image: IMG6,
    title: 'Crypto Currency Dashboard ',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/15887665-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key ={id} className='portofolio__item'>
              <div className="portofolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live</a>
            </article>
            )
            
          })
        }
      </div>
    </section>
  )
}

export default Portofolio