import React, { useState, Component } from "react";
import { Row, Col, Button, ButtonGroup, ButtonToolbar } from "reactstrap";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
var projectArr = [
  require("../img/project/mazedisplay.PNG").default,
  require("../img/project/movieSix.PNG").default,
  require("../img/project/queene.PNG").default,
  require("../img/project/triangle2.png").default,
  require("../img/project/verticle.PNG").default,
  require("../img/project/Snakepic.PNG").default,
  require("../img/project/Cryptopic.PNG").default,
  require("../img/project/Emojipic.PNG").default,
  require("../img/project/Triviapic.PNG").default,
];

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      contactFlag: false,
      projectFlag: false,
      homeFlag: false,
      projectHolder: 0,
    };
  }

  showProject(e) {
    this.setState({ projectHolder: e.target.value - 1 });
  }

  nextNum() {
    if (this.state.projectHolder === 8) {
      this.setState({ projectHolder: 0 });
    } else this.setState({ projectHolder: this.state.projectHolder + 1 });
  }

  prevNum() {
    if (this.state.projectHolder === 0) {
      this.setState({ projectHolder: 8 });
    } else this.setState({ projectHolder: this.state.projectHolder - 1 });
  }
  /*
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
*/
  render() {
    var { projectHolder } = this.state;
    const project = [
      {
        src: projectArr[0],
        link: "https://optimistic-babbage-2ed085.netlify.app/",
        name: "Maze Algorithm",
      },
      {
        src: projectArr[1],
        link: "https://www.moviegame.fun/",
        name: "Movie Game",
      },
      {
        src: projectArr[2],
        link: "https://tender-benz-d42ce4.netlify.app/",
        name: "Queen Puzzle",
      },
      {
        src: projectArr[3],
        link: "https://jolly-meninsky-2047bc.netlify.app/",
        name: "Triangle",
      },
      {
        src: projectArr[4],
        link: "https://wordsearch-generator.herokuapp.com/",
        name: "Word Search Generato",
      },
      {
        src: projectArr[5],
        link: "https://admiring-spence-0175e7.netlify.app/",
        name: "Snake Game",
      },
      {
        src: projectArr[6],
        link: "https://ben8842.github.io/BitProject/",
        name: "Cryptocurrency Project",
      },
      {
        src: projectArr[7],
        link: "https://vibrant-spence-207a4e.netlify.app/",
        name: "Emoji Game",
      },
      {
        src: projectArr[8],
        link: "https://trivia-redux.herokuapp.com/",
        name: "Trivia",
      },
    ];

    const projectContainer = (
      <div class="links">
        <br></br>

        <img
          className="carousel"
          src={project[projectHolder].src}
          alt="nothing"
        />
      </div>
    );

    return (
      <div>
        <div class="links">
          <Button color="secondary">
            <a href={project[projectHolder].link}>
              {project[projectHolder].name}
            </a>
          </Button>
          <div>&nbsp;</div>

          <ButtonToolbar>
            <ButtonGroup size="sm">
              <Button color="secondary" onClick={() => this.prevNum()}>
                Prev
              </Button>
              <Button value="1" onClick={(e) => this.showProject(e)}>
                1
              </Button>
              <Button value="2" onClick={(e) => this.showProject(e)}>
                2
              </Button>
              <Button value="3" onClick={(e) => this.showProject(e)}>
                3
              </Button>
              <Button value="4" onClick={(e) => this.showProject(e)}>
                4
              </Button>
              <Button value="5" onClick={(e) => this.showProject(e)}>
                5
              </Button>
              <Button value="6" onClick={(e) => this.showProject(e)}>
                6
              </Button>
              <Button value="7" onClick={(e) => this.showProject(e)}>
                7
              </Button>
              <Button value="8" onClick={(e) => this.showProject(e)}>
                8
              </Button>
              <Button value="9" onClick={(e) => this.showProject(e)}>
                9
              </Button>{" "}
              <Button color="secondary" onClick={() => this.nextNum()}>
                Next
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        {projectContainer}
      </div>
    );
  }
}
export default Project;
