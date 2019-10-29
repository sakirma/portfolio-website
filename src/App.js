import React from 'react';
import {
    Container, Col, Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderBody from './Layout/HeaderBody';
import WorkSection from './Sections/WorkSection';

import layer from "./images/overlay.png";
import BodySection from "./Layout/BodySection";
import IntroductionSection from "./Sections/IntroductionSection";
import FavoriteProjectPage from "./Sections/FavoriteProjectPage";

import Projects from "./Projects";


function DefaultPage(props) {
    let parent = props.parent;
    return (
        <div style={{padding: 0}}>
            <BodySection>
                <IntroductionSection/>
            </BodySection>

            <BodySection>
                <WorkSection onProjectOpenend={parent.openProject} app={props.parent}
                             work1={Projects.work1}
                             work2={Projects.work2}
                             work3={Projects.work3}/>
                <ProjectPage parent={parent}
                             isActive={parent.state.currentPageState === parent.pageStates.ProjectPage}/>
            </BodySection>
        </div>
    )
}

function ProjectPage(props) {
    return(<FavoriteProjectPage parent={props} isActive={props.isActive}/>)
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
            }
        );
        io.observe(this.title.current);
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

    closeProject(app) {
        app.setState({currentPageState: app.pageStates.DefaultPage});
        app.currentOpenWork = null;
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
                minHeight: "100vh",
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

                <Row className="justify-content-center">
                    <Col xs={7}>
                        <Container fluid>
                            <Col className="header" style={{zIndex: 100}}>
                                <HeaderBody app={this}/>
                            </Col>
                            <Col>
                                <DefaultPage parent={this}/>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
