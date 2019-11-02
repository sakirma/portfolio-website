import React from "react";
import {Card, Carousel, Modal} from 'react-bootstrap';
import pic1 from "./Bannerlord wallpaper.jpg";
import pic2 from "./Bannerlord1.jpg";

class WorkBase extends React.Component {
    constructor(props) {
        super(props);

        this.thumbnail = "";
        this.titleName = undefined;
        this.description = undefined;
    }

    content  () {
        return {thumbnail: this.thumbnail, titleName: this.titleName, description: this.description};
    }
}


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
                        </Carousel.Item>);
                        <Carousel.Item key={1}>
                            <img
                                className="d-block w-100"
                                src={pic2}
                                alt={pic2}
                            />
                        </Carousel.Item>);
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