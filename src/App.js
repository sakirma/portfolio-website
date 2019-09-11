import React from 'react';
import {
    Container, Col, Row,
    Image
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import HeaderBody from './Layout/HeaderBody';
// import BodySection from './Layout/BodySection';
// import IntroductionSection from './Sections/IntroductionSection';
// import WorkSection from './Sections/WorkSection';

// import "./header.css"
import layer from "./images/overlay.png";
//
// import Projects from "./Projects";

const styles = theme => ({
    card: {},
    media: {
        height: "100%"
    },
});

function DefaultPage(props) {
    let parent = props.parent;
    return (<div>
        <Container fluid>
            <Col>
                {/*xs={12} sm={9} xl={7} lg={10} md align="center"*/}
                <Row>
                    {/*xs={10} elevation={0} square style={{height: '1600px'}}*/}
                    <div>
                        {/*<Grid container direction="column" spacing={0}>*/}
                        {/*    <BodySection>*/}
                        {/*        <IntroductionSection/>*/}
                        {/*    </BodySection>*/}

                        {/*    <BodySection>*/}
                        {/*        <WorkSection onProjectOpenend={parent.openProject}*/}
                        {/*                     work1={Projects.work1}*/}
                        {/*                     work2={Projects.work2}*/}
                        {/*                     work3={Projects.work3}*/}
                        {/*                     app={props.parent}/>*/}
                        {/*    </BodySection>*/}
                        {/*    <ProjectPage isActive={parent.state.currentPageState === parent.pageStates.ProjectPage}*/}
                        {/*                 parent={parent}/>*/}
                        {/*</Grid>*/}
                    </div>
                </Row>
            </Col>
        </Container>
    </div>)
}

function ProjectPage(props) {
    let parent = props.parent;
    let work = parent.currentOpenWork;
    if (props.isActive) {
        return (<div>
            {/*<Grid container direction="column" style={{height: "20em"}}>*/}
            {/*    <Grid item xs={false} sm={12} style={{maxHeight: "15em"}}>*/}
            {/*        <CardMedia*/}
            {/*            className={parent.classes.media}*/}
            {/*            image={work.pictures[0].image}*/}
            {/*            style={work.pictures[0].styling}*/}
            {/*        />*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

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
            <Container fluid style={{
                minHeight: "100vh",
                minWidth: "100%",
                fontFamily: "'Source Sans Pro', sans-serif",
                backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)'
            }}>
                <Container
                    // container
                    // spacing={0}
                    // justify="center"
                    style={{height: "50vh"}}
                    className="align-items-center"
                >
                    <Col style={{height: "100%"}} className="d-flex align-content-center flex-wrap">
                            <h3 className="text-center align-middle" style={{color: "white", fontFamily: "inherit"}}>
                                Huseyin Caliskan
                            </h3>

                        {/*        <Grid item>*/}
                        {/*            <Typography variant="h3" >*/}
                        {/*                Huseyin Caliskan*/}
                        {/*            </Typography>*/}
                        {/*        </Grid>*/}

                        {/*        <Grid item style={{paddingBottom: "10vh"}}>*/}
                        {/*            <Typography variant="subtitle1" style={{color: "white", fontFamily: "inherit"}}>*/}
                        {/*                <p>*/}
                        {/*                    Just an ordinary Software Engineer*/}
                        {/*                </p>*/}
                        {/*            </Typography>*/}
                        {/*        </Grid>*/}
                    </Col>
                </Container>

                {/*<HeaderBody app={this}/>*/}

                {/*<DefaultPage parent={this}/>*/}
            </Container>
        );
    }
}

export default App;
// export default withStyles(styles)(App);
