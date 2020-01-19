import React from 'react';
import {ButtonToolbar, Card, ToggleButton, ToggleButtonGroup, Button} from "react-bootstrap";

import "../header.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

class HeaderBody extends React.Component {
    constructor(props) {
        super(props);

        this.application = props.app;
        this.application.onAfterTitle((e) => this.onAfterTitle(e));

        this.state = {
            isSticky: false,
        };

        this.perWork = props.perWork;
        this.intro = props.intro;
        this.proWork = props.proWork;
        this.contact = props.contact;
    }

    onAfterTitle(e) {
        this.setState({isSticky: !e.isIntersecting});
    }

    render() {
        const headerStyle = {
            backgroundColor: "#f7f7f7",
            paddingTop: '16px',
            paddingBottom: '16px',
            fontFamily: 'inherit',
            borderBottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        };
        const isActive = this.application.isMobile();
        return (
            <div>
                {!isActive ? (
                    <Card style={headerStyle} className={"" + (this.state.isSticky ? "rounded-0" : "")}>
                        <ButtonToolbar className="justify-content-center">
                            <div className="social-button">
                                <Button className="btn-light" style={{
                                    padding: '0',
                                    paddingRight: '3px',
                                    border: '0',
                                    backgroundColor: 'transparent'
                                }} target="_blank" href="https://github.com/sakirma">
                                    <i className="fab fa-2x fa-github-square"/>
                                </Button>
                                <Button className="btn-light"
                                        style={{padding: '0', border: '0', backgroundColor: 'transparent'}}
                                        target="_blank" href="https://www.linkedin.com/in/huseyin-caliskan/">
                                    <i className="fab fa-2x fa-linkedin"/>
                                </Button>
                            </div>

                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="light" className="rounded mr-2"
                                              value={1}
                                              onClick={() => this.application.scrollToSection(this.intro)}>Introduction</ToggleButton>
                                <ToggleButton variant="light" className="rounded mr-2"
                                              value={2}
                                              onClick={() => this.application.scrollToSection(this.proWork)}>Professional Work</ToggleButton>
                                <ToggleButton variant="light" className="rounded mr-2" value={3}
                                              onClick={() => this.application.scrollToSection(this.perWork)}>Personal Work</ToggleButton>
                                <ToggleButton variant="light" className="rounded" value={4} onClick={() => this.application.scrollToSection(this.contact)}>Contact</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Card>
                ) : (
                    <div/>
                )}
            </div>
        );
    }
}


export default HeaderBody;