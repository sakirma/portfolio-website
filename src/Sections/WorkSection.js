import React from 'react';
import HeaderUnderline from "../Layout/HeaderUnderline";
import {Container, Col, Row} from 'react-bootstrap';
import Work from "./Work"

class WorkSection extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <HeaderUnderline> Work </HeaderUnderline>
                <Container fluid>
                    <Row className="text-center justify-content-center">
                        <Col className="">
                            <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work1, this.props.app)}
                                  information={this.props.work1}/>
                        </Col>
                        <Col>
                            <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work2, this.props.app)}
                                  information={this.props.work2}/>
                        </Col>
                        <Col>
                            <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work3, this.props.app)}
                                  information={this.props.work3}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WorkSection;