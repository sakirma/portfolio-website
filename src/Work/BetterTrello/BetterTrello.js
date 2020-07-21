import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./Better-Trello-Logo.png";
import pic1 from "./Annotation 2020-07-15 170025.png";
import pic2 from "./Annotation 2020-07-15 170125.png";

class BetterTrello extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Better Trello";
        this.description = "A project I have been a part of to create a better Trello";
    }

    getReactElement() {
        return <BetterTrello/>
    }

    render() {
        return(<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Better Trello</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel wrap={false} interval={null}>
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
                                src={pic1}
                                alt={pic1}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={2}>
                            <img
                                className="d-block w-100"
                                src={pic2}
                                alt={pic2}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                About This Project
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            With this project, we explored the possibilities of Angular and Firebase working together.
                            <br/><br/>
                            It is definitely not a better web application than Trello because the team had one week to work on this project, and the main goal was to make it work just like Trello's project page.

                            It is possible to create projects, user stories, and other users can participate in these projects as well. They can live edit user stories and drag and drop them to projects or assign them to other users.

                            With the use of Firebase, it was possible to keep data in sync with other clients through realtime listeners.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Angular
                            </li>
                            <li>
                                Firebase
                            </li>
                            <br/>
                            <li>
                                NoSQL
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://github.com/sakirma/webs6-1920-taskboard-huseyin-storm" target="_blank">
                                github
                            </Card.Link>
                            <Card.Link href="https://bettertrello.firebaseapp.com/" target="_blank">
                                Website
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default BetterTrello;
