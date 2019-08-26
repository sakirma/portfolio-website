import React from 'react';
import {Container, Paper, Typography, Grid} from "@material-ui/core";
import HeaderBody from './Layout/HeaderBody';
import BodySection from './Layout/BodySection';
import IntroductionSection from './Sections/IntroductionSection';
import ProjectsSection from './Sections/ProjectsSection';

import "./header.css"
import layer from "./images/overlay.png";

class App extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => this.handleScroll(e));
    };

    handleScroll(event) {
        let length = this.onScrollCallbacks.length;
        for (let i = 0; i < length; i++) {
            this.onScrollCallbacks[i](event);
        }
    };

    constructor(props) {
        super(props);
        this.onScrollCallbacks = [];
    };

    render() {
        return (
            <Container style={{
                flexGrow: 1,
                minHeight: "100vh",
                minWidth: "100%",
                fontFamily: "'Source Sans Pro', sans-serif",
                backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)'
            }}>
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    style={{height: "50vh"}}
                >
                    <Grid item container direction="column" xs align="center" justify="flex-end">
                        <Grid item>
                            {/*<BigAvatar alt="Huseyin Caliskan" src={logo} className="bigAvatar"> </BigAvatar>*/}
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
                    <Grid item xs={12} sm={9} xl={7} lg={10} md align="center">

                        <Paper xs={10} elevation={0} square style={{height: '1600px'}}>
                            <Grid container direction="column" spacing={0}>
                                <BodySection>
                                    <IntroductionSection/>
                                </BodySection>

                                <BodySection>
                                    <ProjectsSection/>
                                </BodySection>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default App;
