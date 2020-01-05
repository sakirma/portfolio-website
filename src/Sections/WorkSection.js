import React from 'react';
import HeaderUnderline from "../Layout/HeaderUnderline";
import {Container, Col, Row} from 'react-bootstrap';
import WorkThumbnail from "./WorkThumbnail"

class WorkSection extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="text-center justify-content-center">
                    <Col className="">
                        <WorkThumbnail
                            onProjectOpenend={() => this.props.onProjectOpenend(this.props.work1, this.props.app)}
                            work={this.props.work1}/>
                    </Col>
                    <Col>
                        <WorkThumbnail
                            onProjectOpenend={() => this.props.onProjectOpenend(this.props.work2, this.props.app)}
                            work={this.props.work2}/>
                    </Col>
                    <Col>
                        <WorkThumbnail
                            onProjectOpenend={() => this.props.onProjectOpenend(this.props.work3, this.props.app)}
                            work={this.props.work3}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WorkSection;