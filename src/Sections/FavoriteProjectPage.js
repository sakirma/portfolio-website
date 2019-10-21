import React from "react";
import {Button, Card, Carousel, Image, Modal} from 'react-bootstrap';

class FavoriteProjectPage extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        let parent = props.parent;
        let work = parent.currentOpenWork;
        console.log(work);

        if (props.isActive) {
            const pictures = [];
            for (let i = 0; i < work.pictures.length; i++) {
                pictures.push(
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100"
                            src={work.pictures[i].image}
                            alt={work.pictures[0].image}
                        />
                    </Carousel.Item>);
            }

            let technical = [];
            if (work.technical.length > 0) {
                for (let i = 0; i < work.technical.length; i++) {
                    technical.push(
                        <li>{work.technical[i]}</li>
                    );
                }
            }

            let resources = [];
            if (work.resources !== undefined && work.resources.length > 0) {
                for (let i = 0; i < work.resources.length; i++)
                    resources.push(<div key={i}>
                        <Card.Title>
                            <h3>Resources</h3>
                        </Card.Title>
                        <Card.Text>
                            <Card.Link href={work.resources[i].url}>
                                {work.resources[i].linkName}
                            </Card.Link>
                            {work.resource}
                        </Card.Text>
                    </div>);
            }

            return (<div>
                <Modal show={true} onHide={() => parent.closeProject(parent)} centered size="lg">
                    <Modal.Header closeButton={true} className="text-center">
                        <Modal.Title>{work.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{fontFamily: '"Source Sans Pro", sans-serif'}}>
                        <Card>
                            <Carousel>
                                {pictures}
                            </Carousel>
                            <Card.Body>
                                <Card.Title>
                                    <h2>
                                        About This Project
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    {work.text}
                                </Card.Text>
                                <Card.Title>
                                    <h3>
                                        Technical Sheet
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
                                        {technical}
                                    </ul>
                                </Card.Text>
                                {resources}
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => parent.closeProject(parent)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>);
        } else {
            return (<div>

            </div>);
        }
    }
}

