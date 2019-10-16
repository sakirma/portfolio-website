import React from 'react';
import {ButtonToolbar, Card, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import "../header.css"

class HeaderBody extends React.Component {
    constructor(props) {
        super(props);

        this.application = props.app;
        this.application.onAfterTitle((e) => this.onAfterTitle(e));

        this.state = {
            isSticky: false,
        }
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
        return (
            <Card style={headerStyle} className={"" + (this.state.isSticky ? "rounded-0" : "")}>
                <ButtonToolbar className="justify-content-center">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton variant="light" className="rounded mr-2"
                                      value={1}>Introduction</ToggleButton>
                        <ToggleButton variant="light" className="rounded mr-2"
                                      value={2}>Work</ToggleButton>
                        <ToggleButton variant="light" className="rounded mr-2" value={3}>Second Section</ToggleButton>
                        <ToggleButton variant="light" className="rounded" value={4}>Last Section</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </Card>
        );
    }
}


export default HeaderBody;