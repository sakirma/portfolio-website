import React from 'react';
import {Container} from "react-bootstrap";

class BodySection extends React.Component {
    render() {
        return (
            <Container
                style={{
                    borderBottom: 'groove',
                    borderWidth: '0.1px',
                    borderColor: '#d3d3d34a',
                    backgroundColor: 'white',
                    padding: '4em 4em 2em 4em',
                }}>
                {this.props.children}
            </Container>
        );
    }
}

export default BodySection;