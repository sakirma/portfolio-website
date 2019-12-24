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
                            This was my first internship as a Developer.
                            <br/>
                            Virtual Reality and Augmented reality was born and new to the market, and Capitola VR Digital capitalized on this opportunity. Their team of developers worked for their clients, so their goal was to develop a VR/AR product.
                            My goal was to explore the potentials of Virtual Reality and Augmented Reality, so I had to deliver a prototype every week. This was really exciting and fun!
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
                                Unity3D
                            </li>
                            <li>
                                Git
                            </li>
                            <br/>
                            <li>
                                HTC Vive
                            </li>
                            <li>
                                Ocolus Rift
                            </li>
                            <li>
                                Hololens
                            </li>
                            <li>
                                Manus VR Gloves
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://capitola.nl/" target="_blank">
                                Page
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default CapitolaVRDigital;