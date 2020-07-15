import React from 'react';
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
                            return <Col key={index} style={{minWidth: 'unset'}}>
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
