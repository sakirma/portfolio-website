import React from 'react';
import {
    Container, Col, Row,
    Image
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderBody from './Layout/HeaderBody';
// import BodySection from './Layout/BodySection';
// import IntroductionSection from './Sections/IntroductionSection';
// import WorkSection from './Sections/WorkSection';

// import "./header.css"
import layer from "./images/overlay.png";
import BodySection from "./Layout/BodySection";
import IntroductionSection from "./Sections/IntroductionSection";
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
    return (
        <div >
            <Row className="align-items-center justify-content-center">
                <Col xs={12} sm={9} xl={9} lg={10}
                     style={{height: 100, padding: 0}}>
                        <BodySection>
                            <IntroductionSection/>
                        </BodySection>
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
                </Col>
            </Row>
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
        this.handleStateChanged();

        let io = new IntersectionObserver(
            entries => {
                let length = this.onAfterTitleCallbacks.length;
                for (let i = 0; i < length; i++) {
                    this.onAfterTitleCallbacks[i](entries[0]);
                }
            },
            {
                /* Using default options. Details below */
            }
        );
        io.observe(this.title.current);
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

        this.title = React.createRef();

        this.onAfterTitleCallbacks = [];

        this.pageStates = {DefaultPage: "DefaultPage", ProjectPage: "ProjectPage"};
        this.state = {currentPageState: this.pageStates.DefaultPage};
        this.currentOpenWork = null;

        this.onPageStateChangedCallback = [];
    };

    onAfterTitle(callback) {
        this.onAfterTitleCallbacks.push(callback);
    }

    render() {
        return (
            <Container fluid style={{
                minHeight: "1000vh",
                minWidth: "100%",
                fontFamily: "'Source Sans Pro', sans-serif",
                backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #e37682 15%, #5f4d93 85%)'
            }}>
                <Container
                    style={{height: "50vh"}}
                    ref={this.title}
                >
                    <Row style={{height: "100%"}}>
                        <Col className="align-self-end">
                            <h1 className="text-center" style={{
                                color: "white",
                                fontFamily: "inherit",
                                fontSize: "3.5em",
                                paddingBottom: "1vh"
                            }}>
                                Huseyin Caliskan
                            </h1>
                            <p className="text-center"
                               style={{color: "white", fontFamily: "inherit", paddingBottom: "10vh"}}>
                                Just an ordinary Software Engineer
                            </p>
                        </Col>
                    </Row>
                </Container>

                <HeaderBody app={this}/>

                <DefaultPage parent={this}/>
            </Container>
        );
    }
}

export default App;
// export default withStyles(styles)(App);
