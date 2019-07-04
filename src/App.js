import React from 'react';
import {Container, Paper, Typography, Avatar, Grid} from "@material-ui/core";
import HeaderBody from './Layout/HeaderBody';

import withStyles from "@material-ui/core/styles/withStyles";


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

class App extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => this.handleScroll(e));
    };

    handleScroll(event) {
        let length = this.onScrollCallbacks.length;
        for (let i = 0; i < length; i++)
        {
            this.onScrollCallbacks[i](event);
        }
    };

    constructor(props) {
        super(props);
        this.onScrollCallbacks = [];
    };

    render() {
        return (
            <Container style={{flexGrow: 1, minHeight: "100vh", minWidth: "100%", fontFamily: "'Source Sans Pro', sans-serif", backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)'}}>
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    style={{height: "50vh"}}
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

                <HeaderBody app={this}/>

                <Grid container spacing={0} justify="center">
                    <Grid item xl={7} lg={10} md align="center">

                        <Paper xs={5} elevation={0} square style={{height: '1600px'}}>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default App;
