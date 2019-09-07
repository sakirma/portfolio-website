import React from "react";
import bannerlord from "../images/Bannerlord wallpaper.jpg";
import {Avatar, Grid} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const LargeAvatarPicture = withStyles({
    root: {
        padding: "0.4em",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dddddd",

        width: '10.25em',
        height: '10.25em',
    },
    img: {
        borderRadius: '100%',
    }
})(Avatar);

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    toggleHover(c) {
        c.setState({hover: !this.state.hover});
    }

    render() {
        let hoverStyle;
        if (this.state.hover) {
            hoverStyle = {backgroundColor: "rgba(211, 211, 211, 0.5)", cursor: 'pointer'}
        } else {
            hoverStyle = {backgroundColor: "rgba(0, 0, 0, 0.0)", cursor: 'default'}
        }

        return (
            <Grid item xs={4} style={{position: "relative"}}>
                <div>
                    <LargeAvatarPicture onMouseEnter={() => this.toggleHover(this)}
                                        onMouseLeave={() => this.toggleHover(this)}
                                        style={{backgroundColor: hoverStyle.backgroundColor, cursor: hoverStyle.cursor, marginBottom: "10px"}}
                                        src={bannerlord}/>
                    <div style={{
                        backgroundColor: hoverStyle.backgroundColor,
                        cursor: hoverStyle.cursor,
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderRadius: "30px",
                        borderColor: "rgba(211, 211, 211, 0.5)"
                    }}
                         onMouseEnter={() => this.toggleHover(this)} onMouseLeave={() => this.toggleHover(this)}>
                        <h3 style={{marginTop: "1em"}}>
                            Bannerlord
                        </h3>
                        <p>
                            Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                            veroeros sed consequat.
                            Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                            veroeros sed consequat.
                            Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                            veroeros sed consequat.
                        </p>
                    </div>
                </div>
            </Grid>);
    }
}

export default Work;