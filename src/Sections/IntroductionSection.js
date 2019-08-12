import React from 'react';
import {Grid, Avatar, Button} from "@material-ui/core";
import HeaderUnderline from "../Layout/HeaderUnderline";
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

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
});

class IntroductionSection extends React.Component {
    constructor(props) {
        super(props);

        const { classes } = props;

        this.classes = classes;
    }

    render() {
        return (
            <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid style={{width: '60%', height: '100%'}} container spacing={0} direction='column' alignItems='center' justify='flex-start'>
                    <Grid item style={{textAlign: 'left'}}>
                        <HeaderUnderline>Huseyin Caliskan</HeaderUnderline>
                        <i>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, justo sit amet sodales dictum, nulla leo cursus nibh, eu pulvinar ipsum turpis vel metus. Suspendisse venenatis, mauris a commodo vestibulum, felis dui aliquet erat, at aliquam lacus tellus eget augue. Duis ac libero vitae neque commodo vestibulum.
                            </p>
                            <Button variant="outlined" className={this.classes.button} style={{marginLeft: 0}}>
                                Learn More
                            </Button>
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

export default withStyles(styles)(IntroductionSection);