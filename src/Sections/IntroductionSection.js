import React from 'react';
import HeaderUnderline from "../Layout/HeaderUnderline";
import logo from "../images/logo.jpeg";
import {Col, Image, Row} from "react-bootstrap";

class IntroductionSection extends React.Component {
    constructor(props) {
        super(props);

        const {classes} = props;

        this.classes = classes;
    }

    render() {
        return (
            <Row>
                <Col xs={8}>
                    <HeaderUnderline>Huseyin Caliskan</HeaderUnderline>
                    <p>
                        Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam
                        amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit
                        amet aliquam.
                    </p>
                </Col>
                <Col xs={4}>
                    <Image style={{width: '22em', padding: "0.75em"}} src={logo} roundedCircle fluid thumbnail/>
                </Col>
            </Row>
        );
    }
}

export default IntroductionSection;