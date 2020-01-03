import React from 'react';
import {Container} from "react-bootstrap";

class BodySection extends React.Component {
    constructor(props) {
        super(props);

        if (props.style === undefined) {
            this.styles = {
                borderBottom: 'groove',
                borderWidth: '0.1px',
                borderColor: '#d3d3d34a',
                backgroundColor: 'white',
                padding: '4em 4em 2em 4em',
            };
        } else {
            this.styles = props.style;

            this.styles['borderBottom'] = 'groove';
            this.styles['borderBottomWidth'] = '0.8px';
            this.styles['borderColor'] = '#d3d3d34a';
            this.styles['backgroundColor'] = 'white';
            this.styles['padding'] = '2em 0em';
        }
    }

    render() {
        return (
            <Container fluid
                       style={this.styles}>
                {this.props.children}
            </Container>
        );
    }
}

export default BodySection;