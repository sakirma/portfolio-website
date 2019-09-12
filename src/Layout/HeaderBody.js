import React from 'react';
import {ButtonToolbar, Card, Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import "../header.css"

function HeaderButtons() {
    return (
        <Container xs={12} sm={9} xl={7} lg={10}>
            <Card style={{
                backgroundColor: "#f7f7f7",
                paddingTop: '16px',
                paddingBottom: '16px',
                fontFamily: 'inherit',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            }} className="rounded-top">
                <Col className="align-items-center">
                    <ButtonToolbar className="justify-content-center">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton variant="light" className="rounded mr-2"
                                          value={1}>Introduction</ToggleButton>
                            <ToggleButton variant="light" className="rounded mr-2"
                                          value={2}>Work</ToggleButton>
                            <ToggleButton variant="light" className="rounded mr-2" value={3}>Second
                                Section</ToggleButton>
                            <ToggleButton variant="light" className="rounded" value={4}>Last
                                Section</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Card>
        </Container>
    );
}


class HeaderBody extends React.Component {
    constructor(props) {
        super(props);

        this.header = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('sticky-change', e => {
            const header = e.detail.target;  // header became sticky or stopped sticking.
            const sticking = e.detail.stuck; // true when header is sticky.
            header.classList.toggle('shadow', sticking); // add drop shadow when sticking.

            document.querySelector('header').textContent = header.textContent;
        });
    }

    render() {
        return (
            <div className="header" ref={this.header}>
                <Container>
                    <HeaderButtons/>

                </Container>
            </div>
        )
    }
}


export default HeaderBody;