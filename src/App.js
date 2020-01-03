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
import ProjectPage from "./Sections/ProjectPage";

import Projects from "./Projects";


function WorkModal(props) {
    return (<ProjectPage parent={props} isActive={props.isActive}/>)
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

        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
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
        this.state = {
            currentPageState: this.pageStates.DefaultPage,
            isMobile: true,
        };

        this.currentOpenWork = null;

        this.onPageStateChangedCallback = [];

        this.updatePredicate = this.updatePredicate.bind(this);
    };

    onAfterTitle(callback) {
        this.onAfterTitleCallbacks.push(callback);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({isMobile: !(window.innerWidth < 1000)});
    }

    isMobile() {
        return !this.state.isMobile;
    }

    render() {
        console.log(this.isMobile());
        return (
            <Container fluid style={{
                minHeight: "100vh",
                minWidth: "100%",
                fontFamily: "'Source Sans Pro', sans-serif",
                backgroundImage: 'url(' + layer + ') ,linear-gradient(45deg, #9f424c 15%, #5f4d93 85%)',
                paddingBottom: '2em'
            }}>
                <Container style={{height: this.isMobile() ? "35vh" : "50vh"}} ref={this.title}>
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

                <Row className="justify-content-center" style={{}}>
                    <Col xs={12} lg={12} xl={11} style={{maxWidth: 1450, padding: 0}}>
                        <Container fluid>
                            <Col className="header" style={{zIndex: 100}}>
                                <HeaderBody app={this}/>
                            </Col>
                            <Col>
                                <div>
                                    {
                                        this.isMobile() ?
                                            (<BodySection key="first" style={{
                                                    MozBorderRadiusTopleft: 10,
                                                    MozBorderRadiusTopright: 10,
                                                    WebkitBorderTopLeftRadius: 10,
                                                    WebkitBorderTopRightRadius: 10
                                                }}>
                                                    <IntroductionSection app={this}/>
                                                </BodySection>
                                            ) : (
                                                <BodySection key="second">
                                                    <IntroductionSection app={this}/>
                                                </BodySection>
                                            )
                                    }

                                    <BodySection>
                                        <WorkSection onProjectOpenend={this.openProject} app={this}
                                                     work1={Projects.work1}
                                                     work2={Projects.work2}
                                                     work3={Projects.work3}/>
                                        <WorkModal parent={this}
                                                   isActive={this.state.currentPageState === this.pageStates.ProjectPage}/>
                                    </BodySection>
                                    <BodySection>
                                        <WorkSection onProjectOpenend={this.openProject} app={this}
                                                     work1={Projects.work4}
                                                     work2={Projects.work2}
                                                     work3={Projects.work3}/>
                                        <WorkModal parent={this}
                                                   isActive={this.state.currentPageState === this.pageStates.ProjectPage}/>
                                    </BodySection>
                                </div>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
