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
                            Nemo dubitet me cum domno meo episcopo sentire et omnia damnare quae damnat,
                            et nihil eius praeferre sapientiae nisi solum deum. Atque ideo nolo ne dubitetis aliud me
                            esse facturum, aliud sensurum quam quod
                            professus est ac perinde quomodo dixit quem sequor episcopus meus.
                            Quidquid ille damnavit, et ego damno.
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