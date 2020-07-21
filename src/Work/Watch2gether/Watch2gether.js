import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';

import thumbnail from "./ionic-framework.png";
import pic1 from "./Annotation 2020-07-20 192459.png";
import pic2 from "./Screenshot_20200720-190716.jpg";
import pic3 from "./Screenshot_20200720-190942.jpg";

class Watch2Gether extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Watch2Gether";
        this.description = "A Web application which gives the possibility to watch youtube videos synced together";

        this.pictures = [thumbnail, pic1, pic2, pic3];
        this.carouselItems = [];

        for (let i = 0; i < this.pictures.length; i++) {
            this.carouselItems.push(
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={this.pictures[i]}
                        alt={pic1}
                    />
                </Carousel.Item>);
        }
    }

    getReactElement() {
        return <Watch2Gether/>
    }

    render() {
        return (<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Watch2Gether</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel>
                        {this.carouselItems}
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                About This Project
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            Me and a fellow student were trying to replicate a website that allows the users watch
                            videos synced together with other users. A chat is available for every room that the users
                            create and the room can be managed by the owner.<br/>
                            The web application is made in angular and used Ionic as our SDK. The application can be
                            immediately used on the phone and on the desktop.
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
                                Javascript
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                NoSQL
                            </li>
                            <br/>
                            <li>
                                Docker
                            </li>
                            <li>
                                Angular
                            </li>
                            <li>
                                Ionic
                            </li>
                            <li>
                                Android
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://github.com/Stormlolwut/watch2gether" target="_blank">
                                Github Page (Frontend)
                            </Card.Link>
                            <Card.Link href="https://github.com/avans-webs5/assessment-1819-team-rocket"
                                       target="_blank">
                                Github Page (API)
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default Watch2Gether;
