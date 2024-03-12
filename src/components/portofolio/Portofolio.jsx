import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portofolio1.jpg";
import IMG2 from "../../assets/carrentalnext1.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/redux1.png"
import IMG5 from "../../assets/dashboard1.png";
import IMG6 from "../../assets/portfolio6.jpg";

// data array
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Car Rental Bootcamp Binar Front End ",
    github: "https://github.com/ramadhan8g/Public-Binar-CarRental",
    demo: "https://public-binar-car-rental.vercel.app/car/list",
  },
  {
    id: 2,
    image: IMG2,
    title: "Car Rental API Next JS ",
    github: "https://github.com/ramadhan8g/CarRentalNextJS",
    demo: "https://car-rental-next-js.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "AIRBNB CLONE",
    github: "https://github.com/ramadhan8g/AIRBNBCLONE",
    demo: "https://airbnbclone-lilac.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Redux Marketplace",
    github: "https://github.com/ramadhan8g/ReduxMarketplace",
    demo: "https://dribbble.com/shots/166955822-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dashboard SyncFusion", 
    github: "https://github.com/ramadhan8g/DashboardSyncFusion",
    demo: "https://dashboard-sync-fusion.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portofolio With ThreeJS", 
    github: "https://github.com/ramadhan8g/Web3DThreeJS",
    demo: "https://web3-d-three-56581w8tm-ramadhan8g.vercel.app/",
  },
  {
    id: 7,
    image: IMG6,
    title: "Spootify Clone", 
    github: "https://github.com/ramadhan8g/SpootifyClone",
    demo: " https://spootify-clone.vercel.app/",
  },
  {
    id: 8,
    image: IMG6,
    title: "Website Event", 
    github: "https://github.com/ramadhan8g/WebEventMERN",
    demo: "https://web-event-mern.vercel.app/",
  },
  {
    id: 9,
    image: IMG6,
    title: "Real Estate Landing Page", 
    github: "https://github.com/ramadhan8g/real-estate",
    demo: " https://real-estate1-zeta.vercel.app/",
  },
 
  
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} object-fit="contain" />
              </div>
              <h3>{title}</h3>
              <div className="portofolio_button flex gap-2">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
