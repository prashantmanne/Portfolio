import React from "react";
import { Link } from "react-router-dom";

const HEADING_ROWS = [{
  "title":"About",
  "link":"/About"
}, {
  "title":"Experience",
  "link":"/Experience"
}, {
  "title":"Projects",
  "link":"/Projects"
},
{
  "title":"Contacts",
  "link":"/Contacts"
}];
const REPEAT_COUNT = 8;

export default function Home() {
  return (
    <main className="home">
      <div className="grain" aria-hidden="true" />
      <section className="home__content">
        {HEADING_ROWS.map((title) => (
          <Link to={title.link}>
          <CarouselHeading key={title.title} text={title.title} />
          </Link>
        ))}

           <img
       src="https://i.pinimg.com/originals/e6/10/9e/e6109e32a9ac1a8f2496d7fba78e9c84.gif"
        className="knight"
        alt="knight"
      /> 
<h6 className="text-transparent text-center text-[10px] font-bold [-webkit-text-stroke:1px_white]">
  Code & Design by Prashant Manne
</h6>
      </section>

    
    </main>
  );
}

function CarouselHeading({ text }) {
  const marqueeItems = Array.from({ length: REPEAT_COUNT }, (_, index) => (
    <span className="carousel-heading__item" key={`${text}-${index}`}>
      {text}
    </span>
  ));

  return (
    <div className="carousel-heading" tabIndex={0}>
      <h1 className="carousel-heading__outline">{text}</h1>
      <div className="carousel-heading__marquee" aria-hidden="true">
        <div className="carousel-heading__track">
          <div className="carousel-heading__group">{marqueeItems}</div>
          <div className="carousel-heading__group" aria-hidden="true">
            {marqueeItems.map((item, index) =>
              React.cloneElement(item, { key: `${text}-clone-${index}` }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
