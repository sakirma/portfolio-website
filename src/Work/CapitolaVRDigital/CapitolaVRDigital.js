import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./capitola-vr-logo-black.png";

class CapitolaVRDigital extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Capitola VR Digital";
        this.description = "My internship at Capitola VR Digital, Virtual/Augmented Reality Developer";
    }

    getReactElement() {
        return <CapitolaVRDigital/>
    }

    render() {
        return(<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Roadleaf</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel>
                        <Carousel.Item key={0}>
                            <img
                                className="d-block w-100"
                                src={thumbnail}
                                alt={thumbnail}
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

export default CapitolaVRDigital;