import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";

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
  require("./img/project/Snakepic.PNG").default,
  require("./img/project/Cryptopic.PNG").default,
  require("./img/project/Emojipic.PNG").default,
  require("./img/project/Triviapic.PNG").default,
];

const items = [
  {
    src: projectArr[0],
    altText: "Slide 1",
    caption: (
      <Button color="secondary">
        <a href="https://optimistic-babbage-2ed085.netlify.app/">
          Maze Algorithm
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[1],

    caption: (
      <Button color="secondary">
        <a href="https://www.moviegame.fun/">Movie Game</a>
      </Button>
    ),
  },
  {
    src: projectArr[2],

    caption: (
      <Button color="secondary">
        <a id="bproject" href="https://tender-benz-d42ce4.netlify.app/">
          Queen Puzzle
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[3],

    caption: (
      <Button color="secondary">
        <a id="bproject" href="https://jolly-meninsky-2047bc.netlify.app/">
          Triangle
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[4],

    caption: (
      <Button color="secondary">
        <a href="https://wordsearch-generator.herokuapp.com/">
          Word Search Generator
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[5],

    caption: (
      <Button color="secondary">
        <a href="https://admiring-spence-0175e7.netlify.app/">Snake Game</a>
      </Button>
    ),
  },
  {
    src: projectArr[6],

    caption: (
      <Button color="secondary">
        <a href="https://ben8842.github.io/BitProject/">
          Cryptocurrency Project
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[7],

    caption: (
      <Button color="secondary">
        <a id="bproject" href="https://vibrant-spence-207a4e.netlify.app/">
          Emoji Game
        </a>
      </Button>
    ),
  },
  {
    src: projectArr[8],

    caption: (
      <Button color="secondary">
        <a href="https://trivia-redux.herokuapp.com/">Trivia App</a>
      </Button>
    ),
  },
];

const Slides = (props) => {
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
        className="carouselT"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel" src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <div className="carouselContainer">
      <Carousel
        className="carouselT"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
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
    </div>
  );
};

export default Slides;
