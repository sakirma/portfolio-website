import React from 'react';
import {Container, Paper, Typography, Avatar, Grid, Button} from "@material-ui/core";


import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";


import "./header.css"
import logo from "./images/logo.jpeg";
import layer from "./images/overlay.png";


const BigAvatar = withStyles({
    root: {
        width: 175,
        height: 175,
        margin: 20,
    }
})(Avatar);

const PaperHeader = withStyles({
    rounded: {
        borderRadius: '4px 4px 0 0',
    },
})(Paper);

const ButtonHeader = withStyles({
    root: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 'bold'
    }
})(Button);

const linearBackground = makeStyles({
    root: {
        backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)',
    }
});

function App() {
    const backgroundClasses = linearBackground();
    return (
        <Container
            style={{flexGrow: 1, minHeight: "100vh", minWidth: "100%", fontFamily: "'Source Sans Pro', sans-serif"}}
            className={backgroundClasses.root}>
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
                        <Typography variant="h3" style={{color: "white", fontFamily: "inherit"}}>
                            Huseyin Caliskan
                        </Typography>
                    </Grid>

                    <Grid item style={{paddingBottom: "10vh"}}>
                        <Typography variant="subtitle1" style={{color: "white", fontFamily: "inherit"}}>
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
                <Grid item xl={9} lg={10} md align="center">
                    <PaperHeader xs={5} elevation={0} style={{backgroundColor: "#f7f7f7", paddingTop: '16px', paddingBottom: '16px', fontFamily: 'inherit'}}>
                        <Grid container justify="center" spacing={2} direction="row">
                            <Grid item>
                                <ButtonHeader>
                                    Introduction
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    First Section
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    Second Section
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    Last Section
                                </ButtonHeader>
                            </Grid>
                        </Grid>
                    </PaperHeader>
                </Grid>
            </Grid>

            <Grid container spacing={0} justify="center">
                <Grid item xl={9} lg={10} md align="center">
                    <Paper xs={5} elevation={0} square style={{height: '800px'}}>
                        Wat
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
