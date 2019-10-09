import React from "react";
import {Image} from 'react-bootstrap';

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
                <div style={{width: "13em", height: "13em", margin: "0 auto", marginBottom: "0px"}}>
                    <Image onMouseEnter={() => this.toggleHover(this, true)}
                           onMouseLeave={() => this.toggleHover(this, false)}
                           onClick={() => this.props.onProjectOpenend()}
                           className="justify-content-center"
                           style={{
                               width: "100%",
                               height: "100%",
                               objectFit: "cover",
                               textAlign: "center",
                               cursor: hoverStyle.cursor,
                               backgroundColor: hoverStyle.backgroundColor
                           }}
                           src={this.props.information.thumbnail}
                           thumbnail
                           roundedCircle/>
                </div>
                <div style={{
                    backgroundColor: hoverStyle.backgroundColor,
                    cursor: hoverStyle.cursor,
                    borderRadius: "30px",
                }}
                     onMouseEnter={() => this.toggleHover(this, true)}
                     onMouseLeave={() => this.toggleHover(this, false)}
                     onClick={() => this.props.onProjectOpenend()}>
                    <h2 style={{marginTop: "0.5em"}}>
                        {this.props.information.title}
                    </h2>
                    <p>
                        {this.props.information.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default Work;