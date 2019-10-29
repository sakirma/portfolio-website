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
                    <HeaderUnderline>About me</HeaderUnderline>
                    <p>
                        My name is Huseyin Caliskan and I love programming, hanging out with my friends, travelling around the world, working out in the gym, playing guitar in my room although I won't be joining a band anytime soon.<br/>
                    </p>
                    <p>
                        I am a Full Stack Developer who is most proficient in working with:
                        <ul style={{'columnCount': 2, marginTop: '15px'}}>
                            <li>C# & C++</li>
                            <li>Java</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML & (S)CSS</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>MYSQL & MSSQL</li>
                            <li>PHP</li>
                        </ul>
                        Because of my studious nature I am continuing to broaden my horizons everyday.<br/><br/>
                        Thank you,<br/>
                        Huseyin Caliskan
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