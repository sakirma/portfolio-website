import React from 'react';
import {ButtonToolbar, Card, Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import "../header.css"

const styles = theme => ({
    absoluteWidthHeader: {
        [theme.breakpoints.only('xs')]: {
            paddingRight: '33px'
        },
        [theme.breakpoints.only('sm')]: {
            paddingRight: '48px'
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: '64px'
        },
    }
});

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

        const {classes} = props;
        this.classes = classes;

        this.headerBodyElement = React.createRef();
        this.topHeader = React.createRef();
        this.windowIsBelowHeader = false;

        this.props.app.onPageStateChangedCallback.push(() => this.headerBodyScroll())
    }

    componentDidMount() {
        this.props.app.onScrollCallbacks.push(() => this.headerBodyScroll());
    };

    headerBodyScroll() {
        if (this.headerBodyElement.current.offsetTop < window.top.pageYOffset) {
            this.setState({windowIsBelowHeader: true});
            this.windowIsBelowHeader = true;
        } else {
            this.setState({windowIsBelowHeader: false});
            this.windowIsBelowHeader = false;
        }
    };

    render() {
        return (
            <div>
                <Container ref={this.headerBodyElement}>
                    <HeaderButtons/>

                </Container>
                <AbsoluteHeader classes={this.classes} isActive={this.windowIsBelowHeader} reference={this.topHeader}/>
            </div>
        )
    }
}

function AbsoluteHeader(props) {
    if (props.isActive) {
        return (
            <Container ref={props.reference}
                       // className={props.classes.absoluteWidthHeader}
                       style={{position: 'fixed', top: '0', zIndex: 1000}}>
                <HeaderButtons/>
            </Container>
        );
    } else {
        return (
            <div/>
        );
    }
}


export default HeaderBody;