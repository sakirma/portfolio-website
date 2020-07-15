import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./thumbnail.png";
import frontPage from "./Frontpage.jpg"
import animals from "./Animals.jpg";
import booking  from "./Booking.jpg";

class BeestjeOpJeFeestje extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Animal party";
        this.description = "My first project with .NET Core";
    }

    getReactElement() {
        return <BeestjeOpJeFeestje/>
    }

    render() {

        return(<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Roadleaf</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel  wrap={false} interval={null}>
                        <Carousel.Item key={0}>
                            <img
                                style={{margin: "auto"}}
                                className="d-block h-25"
                                src={thumbnail}
                                alt={thumbnail}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={1}>
                            <img
                                style={{margin: "auto"}}
                                className="d-block h-25"
                                src={frontPage}
                                alt={frontPage}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={2}>
                            <img
                                style={{margin: "auto"}}
                                className="d-block h-25"
                                src={animals}
                                alt={animals}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={3}>
                            <img
                                style={{margin: "auto"}}
                                className="d-block h-25"
                                src={booking}
                                alt={booking}
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
                            I have made a website with ASP NET core and it is about renting animals for events. When an animal is booked the server will save this information in an SQL Database.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                C#
                            </li>
                            <li>
                                javascript
                            </li>
                            <li>
                                MSSQL
                            </li>
                            <li>
                                Git
                            </li>
                            <br/>
                            <li>
                                ASP NET Core
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://github.com/sakirma/eindopdracht-prog6-1920-storm-en-huseyin/" target="_blank">
                                Repository
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default BeestjeOpJeFeestje;
