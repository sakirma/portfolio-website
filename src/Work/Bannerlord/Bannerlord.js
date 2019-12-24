import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';

import pic1 from "./Bannerlord wallpaper.jpg";
import pic2 from "./Bannerlord1.jpg";


class Bannerlord extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = pic1;
        this.titleName = "Bannerlord";
        this.description = "My internship at TaleWorlds, Core Mechanic Team";
    }

    getReactElement() {
        return <Bannerlord/>
    }

    render() {
        return (<div>
            <Modal.Header closeButton={true} className="text-center">
                <Modal.Title>Bannerlord</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                <Card>
                    <Carousel>
                        <Carousel.Item key={0}>
                            <img
                                className="d-block w-100"
                                src={pic1}
                                alt={pic1}
                            />
                        </Carousel.Item>
                        <Carousel.Item key={1}>
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
                            TaleWorlds Entertainment, creator of my favourite game Mound & Blade: Warband, gave me the chance to work with them on their next title 'Mount & Blade 2: Bannerlord'.
                            I worked in the Core Mechanic team. Certain tasks were given to me and I had to dive into the code of their game engine to be able to finish these tasks.
                            This made me strong at reading and understanding codes and as well as changing or adding code without making mistakes.
                            <br/>
                            This internship was in Turkey, Ankara.
                        </Card.Text>
                        <Card.Title>
                            <h3>
                                Technical Sheet
                            </h3>
                        </Card.Title>
                        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                            <li>
                                C++
                            </li>
                            <li>
                                C#
                            </li>
                            <br/>
                            <li>
                                Plastic SCM
                            </li>
                        </ul>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href="https://www.taleworlds.com/en/Games/Bannerlord" target="_blank">
                                TaleWorlds
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </div>);
    }
}

export default Bannerlord;