import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Grid,
    CardMedia,
    withStyles,
} from "@material-ui/core";

import HeaderBody from './Layout/HeaderBody';
import BodySection from './Layout/BodySection';
import IntroductionSection from './Sections/IntroductionSection';
import WorkSection from './Sections/WorkSection';

import "./header.css"
import layer from "./images/overlay.png";

import Projects from "./Projects";

const styles = theme => ({
    card: {},
    media: {
        height: "100%"
    },
});

function DefaultPage(props) {
    let parent = props.parent;
    return (<div>
        <Grid container spacing={0} justify="center">
            <Grid item xs={12} sm={9} xl={7} lg={10} md align="center">
                <Paper xs={10} elevation={0} square style={{height: '1600px'}}>
                    <Grid container direction="column" spacing={0}>
                        <BodySection>
                            <IntroductionSection/>
                        </BodySection>

                        <BodySection>
                            <WorkSection onProjectOpenend={parent.openProject}
                                         work1={Projects.work1}
                                         work2={Projects.work2}
                                         work3={Projects.work3}
                                         app={props.parent}/>
                        </BodySection>
                        <ProjectPage isActive={parent.state.currentPageState === parent.pageStates.ProjectPage}
                                     parent={parent}/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </div>)
}

function ProjectPage(props) {
    let parent = props.parent;
    let work = parent.currentOpenWork;
    if (props.isActive) {
        return (<div>
            <Grid container direction="column" style={{height: "20em"}}>
                <Grid item xs={false} sm={12} style={{maxHeight: "15em"}}>
                    <CardMedia
                        className={parent.classes.media}
                        image={work.pictures[0].image}
                        style={work.pictures[0].styling}
                    />
                </Grid>
            </Grid>

        </div>);
    } else {
        return (<div>

        </div>);
    }
}

class App extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e));
        this.handleStateChanged();
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

    handleStateChanged() {
        let length = this.onPageStateChangedCallback.length;
        for (let i = 0; i < length; i++) {
            this.onPageStateChangedCallback[i]();
        }
    }

    openProject(work, app) {
        app.setState({currentPageState: app.pageStates.ProjectPage});
        app.currentOpenWork = work;
    }

    constructor(props) {
        super(props);

        const {classes} = props;
        this.classes = classes;

        this.onScrollCallbacks = [];

        this.pageStates = {DefaultPage: "DefaultPage", ProjectPage: "ProjectPage"};
        this.state = {currentPageState: this.pageStates.DefaultPage};
        this.currentOpenWork = null;

        this.onPageStateChangedCallback = [];
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

                <DefaultPage parent={this}/>
            </Container>
        );
    }
}


export default withStyles(styles)(App);
