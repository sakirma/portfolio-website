import React from 'react';
import {Grid, Avatar} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../images/logo.jpeg";

const LargeProfilePicture = withStyles({
    root: {
        padding: "0.4em",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dddddd",

        width: 256,
        height: 256,
    },
    img: {
        borderRadius: '100%',
    }

})(Avatar);

class IntroductionSection extends React.Component {
    render() {
        return (
            <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid style={{width: '60%', height: '100%'}} container spacing={0} direction='column' alignItems='center' justify='flex-start'>
                    <Grid item>
                        <h2 style={{textAlign: 'left'}}>Huseyin Caliskan</h2>
                        <i>
                            <p>
                                Note the styling of body, html and #root in index.css for this to
                                work.
                            </p>
                            <p>
                                Thanks to <a href="https://codesandbox.io/s/gLE85V2D">STUNAZ</a> for
                                improving upon my original!
                            </p>
                        </i>
                    </Grid>

                </Grid>
                <Grid item container style={{width: '40%'}} justify="center">
                    <LargeProfilePicture src={logo} className="largeProfilePicture"></LargeProfilePicture>
                </Grid>
            </Grid>
        )
    }
}

export default IntroductionSection;