import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';

import thumbnail from "./Thumbnail.png";
import SingletonImage from "./Singleton.jpg";

export default class RefactoringGuru extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Refactoring Guru";
        this.description = "Refactoring & Design Patterns";
    }

    getReactElement() {
        return <RefactoringGuru/>
    }

    render() {
        return (<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Portfolio: JunkFoodMountain</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel wrap={false} interval={null}>
                        <Carousel.Item key={0}>
                            <img
                                style={{margin: 'auto'}}
                                className="d-block h-50"
                                src={thumbnail}
                                alt={thumbnail}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={1}>
                            <img
                                style={{margin: 'auto'}}
                                className="d-block h-50 "
                                src={SingletonImage}
                                alt={SingletonImage}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                About Refactoring Guru
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            My first years as a programmer, I always encountered one problem when working on my game
                            projects, and that is a bad design pattern. I always tried my best to think about a
                            structure that improves the development of the project and helps me solve a problem in the
                            code. The structure would always work for a while until I add a new feature. This feature
                            required me drastically change the structure of the code and it would take a lot of time.
                            <br/>
                            This had to change, so I researched and found out about Refactoring Guru and because of this
                            book I have learned useful Design Patterns. What I have done to learn the subjects of this
                            book was by practicing it on my projects as an example, a State Machine for the AI of my RTS
                            project or a Factory Method for the creation of the units.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                <Card.Link href="https://refactoring.guru/" target="_blank"> Refactoring
                                    Guru </Card.Link>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>)
    }
}

