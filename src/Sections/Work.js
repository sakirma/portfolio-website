import React from "react";
import {Container, Col, Row, Image} from 'react-bootstrap';

// const LargeAvatarPicture = withStyles({
//     root: {
//         padding: "0.4em",
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderColor: "#dddddd",
//
//         width: '10.25em',
//         height: '10.25em',
//     },
//     img: {
//         borderRadius: '100%',
//     }
// })(Avatar);

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: true,
        }
    }

    toggleHover(c, state) {
        c.setState({hover: !state});
    }

    render() {
        let hoverStyle;
        if (!this.state.hover) {
            hoverStyle = {backgroundColor: "rgba(211, 211, 211, 0.5)", cursor: 'pointer'}
        } else {
            hoverStyle = {backgroundColor: "rgba(0, 0, 0, 0.0)", cursor: 'default'}
        }

        return (
            <div>
                {/*<LargeAvatarPicture onMouseEnter={() => this.toggleHover(this, true)}*/}
                {/*                    onMouseLeave={() => this.toggleHover(this, false)}*/}
                {/*                    onClick={() => this.props.onProjectOpenend()}*/}
                {/*                    style={{*/}
                {/*                        backgroundColor: hoverStyle.backgroundColor,*/}
                {/*                        cursor: hoverStyle.cursor,*/}
                {/*                        marginBottom: "10px"*/}
                {/*                    }}*/}
                {/*                    src={this.props.information.thumbnail}/>*/}
                <div style={{width: "13em", height: "13em"}}>
                    <Image style={{width: "100%", height: "100%", objectFit: "cover", textAlign: "center"}} src={this.props.information.thumbnail} thumbnail roundedCircle/>
                </div>
                <div style={{
                    backgroundColor: hoverStyle.backgroundColor,
                    cursor: hoverStyle.cursor,
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderRadius: "30px",
                    borderColor: "rgba(211, 211, 211, 0.5)"
                }}
                     onMouseEnter={() => this.toggleHover(this, true)}
                     onMouseLeave={() => this.toggleHover(this, false)}
                     onClick={() => this.props.onProjectOpenend()}>
                    <h3 style={{marginTop: "1em"}}>
                        {this.props.information.title}
                    </h3>
                    <p>
                        {this.props.information.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default Work;