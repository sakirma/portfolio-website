import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./React.png";
import FrontPage from "./Portfolio - Front Page.jpg";
import Project from "./Portfolio - Project.jpg";
import Scripting from "./Scripting.PNG";


export default class PortfolioWebsite extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Junk Food Mountain";
        this.description = "First time with React";
    }

    getReactElement() {
        return <PortfolioWebsite/>
    }

    render() {
        return (<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Portfolio: JunkFoodMountain</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel wrap={false} interval={false}>
                        <Carousel.Item key={0}>
                            <img
                                className="d-block w-100"
                                src={thumbnail}
                                alt={thumbnail}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={1}>
                            <img
                                className="d-block w-100"
                                src={FrontPage}
                                alt={FrontPage}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={2}>
                            <img
                                className="d-block w-100"
                                src={Project}
                                alt={Project}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={3}>
                            <img
                                className="d-block w-100"
                                src={Scripting}
                                alt={Scripting}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                About This Portfolio
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            Beside creating a portfolio website, I also wanted to learn something new. So I learned
                            React! <br/>
                            Facebook has a huge role in the maintenance of React. Large applications like Instagram,
                            Facebook and Discord are using this Library. Which made me curious about what this tool
                            makes so special.
                            The library was not only enough for my website because I needed a CSS Framework to style
                            my
                            portfolio. After a little research I used Bootstrap and started to make my website
                            shine.
                        </Card.Text>
                        <Card.Text>
                            Since I am not a designer, I used <Card.Link  href="https://html5up.net/stellar" target="_blank">another
                            design</Card.Link> as my concept.
                        </Card.Text>
                        <Card.Text>
                            There is one thing that I really love about this website and that is the project pages.
                            With
                            React’s component system, I can easily create and add new projects to the website. Every
                            component can run their own logic and they are not dependent of the other components.
                            One
                            project page could run a game and another project could stream an entire movie.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                Javascript
                            </li>
                            <li>
                                Git
                            </li>
                            <br/>
                            <li>
                                React
                            </li>
                            <li>
                                Docker
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>)
    }
}

