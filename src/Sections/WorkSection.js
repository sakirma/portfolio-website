import React from 'react';
import HeaderUnderline from "../Layout/HeaderUnderline";
import {Container, Col, Row} from 'react-bootstrap';
import WorkThumbnail from "./WorkThumbnail"

class WorkSection extends React.Component {
    render() {
        console.log(this.props.works);
        return (
            <Container fluid>
                <Row className="text-center justify-content-center">
                    {
                        this.props.works.map((value, index) => {
                            return <Col key={index}>
                                <WorkThumbnail
                                    onProjectOpenend={() => this.props.onProjectOpenend(value, this.props.app)}
                                    work={value}/>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default WorkSection;
