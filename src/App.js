import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography";
import {Container, Paper} from "@material-ui/core";


import withStyles from "@material-ui/core/styles/withStyles";


import "./header.css"
import logo from "./images/logo.jpeg";
import layer from "./images/overlay.png";
import makeStyles from "@material-ui/core/styles/makeStyles";


const BigAvatar = withStyles({
    root: {
        width: 175,
        height: 175,
        margin: 20,
    }
})(Avatar);


const linearBackground = makeStyles({
    root: {
        backgroundImage: 'url(' + layer +') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)',
    }
});

function App() {
    const backgroundClasses = linearBackground();
    return (
        <Container style={{flexGrow: 1, minHeight: "100vh", minWidth: "100vw"}} className={backgroundClasses.root}>
            <Grid
                container
                spacing={0}
                justify="center"
                style={{height: "70vh"}}
            >
                <Grid item container direction="column" xs align="center" justify="flex-end">
                    <Grid item>
                        <BigAvatar alt="Huseyin Caliskan" src={logo} className="bigAvatar"> </BigAvatar>
                    </Grid>

                    <Grid item>
                        <Typography variant="h3" style={{color: "white"}}>
                            Huseyin Caliskan
                        </Typography>
                    </Grid>

                    <Grid item style={{paddingBottom: "10vh"}}>
                        <Typography variant="subtitle1" style={{color: "white"}}>
                            <p>
                                Just an ordinary Software Engineer
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={0}
                justify="center"

            >
            </Grid>
        </Container>
    );
}

export default App;
