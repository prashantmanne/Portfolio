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
  "link":"/Contact"
}];
const REPEAT_COUNT = 8;

export default function Home() {
  return (
    <main className="home bgIm">
      <div className="grain" aria-hidden="true" />
      <section className="home__content gap-4 sm:gap-2 md:gap-0 lg:gap-0">
        {HEADING_ROWS.map((title) => (
          <Link to={title.link}>
          <CarouselHeading key={title.title} text={title.title} />
          </Link>
        ))}

           <img
       src="https://cdn.pixabay.com/animation/2024/04/14/02/43/02-43-38-360_512.gif"
        className="knight pt-20"
        alt="knight"
        
      /> 
<h6 className="text-transparent text-center text-[10px] pt-10 font-bold [-webkit-text-stroke:1px_white]">
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
