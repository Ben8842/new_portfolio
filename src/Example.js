import React, { useState } from "react";

import project2 from "./img/project/movieSix.PNG";
import project3 from "./img/project/queene.PNG";
import project4 from "./img/project/triangle2.png";
import project5 from "./img/project/verticle.PNG";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
var projectArr = [
  require("./img/project/mazedisplay.PNG").default,
  require("./img/project/movieSix.PNG").default,
  require("./img/project/queene.PNG").default,
  require("./img/project/triangle2.png").default,
  require("./img/project/verticle.PNG").default,
];

const items = [
  {
    src: projectArr[0],
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: projectArr[1],
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: projectArr[2],
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
