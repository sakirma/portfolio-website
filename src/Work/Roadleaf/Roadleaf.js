import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';

import thumbnail from "./roadleaf logo.png";
import pic1 from "./roadleaf front page.png";
import pic2 from "./roadleaf pin selected.png";
import pic3 from "./roadleaf front page.png";
import pic4 from "./roadleaf CMS.png";

class Roadleaf extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Roadleaf";
        this.description = "A Web application done together with the students of HAS University of Applied Sciences";

        this.pictures = [pic1, pic2, pic3, pic4];
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
        return <Roadleaf/>
    }

    render() {
        return (<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Roadleaf</Modal.Title>
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
                            Avans Hogeschool and HAS Hogeschool started together on a new project. In this project, students are chosen from both schools and they have to work together to create a product for a client.
                            We received a client at the start of the project and we immediately set up a meeting together and sketched his idea into a product plan. SCRUM method was used for this project and every week a meeting was held off to show the progress to the client.
                            <br/>
                            The product was about a website which was used to explore the environment of South-Holland. South-Holland has a lot of special places which are not known for a lot of inhabitants. We made a website for a geographer and this allowed the client to easily draw on the map and add information to them.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                PHP
                            </li>
                            <li>
                                Javascript
                            </li>
                            <li>
                                MYSQL
                            </li>
                            <br/>
                            <li>
                                Docker
                            </li>
                            <li>
                                Laravel
                            </li>
                            <li>
                                Vue
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://github.com/sakirma/Avans-Has-2019" target="_blank">
                                Github Page
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default Roadleaf;