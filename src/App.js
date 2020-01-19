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
import HeaderUnderline from "./Layout/HeaderUnderline";


function WorkModal(props) {
    return (<ProjectPage parent={props} isActive={props.isActive}/>)
}

class App extends React.Component {
    componentDidMount() {

        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    };

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

        this.onAfterTitleCallbacks = [];

        this.pageStates = {DefaultPage: "DefaultPage", ProjectPage: "ProjectPage"};
        this.state = {
            currentPageState: this.pageStates.DefaultPage,
            isMobile: true,
        };

        this.introduction = React.createRef();
        this.proWork = React.createRef();
        this.perWork = React.createRef();

        this.updatePredicate = this.updatePredicate.bind(this);
    };

    onAfterTitle(callback) {
        this.onAfterTitleCallbacks.push(callback);
    }

    scrollToSection(section) {
        const offset = 45;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.current.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
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
                    <Col xs={12} lg={12} xl={10} style={{maxWidth: 1450, padding: 0}}>
                        <Container fluid>
                            <Col className="header" style={{zIndex: 100}}>
                                <HeaderBody app={this} intro={this.introduction} proWork={this.proWork}
                                            perWork={this.perWork}/>
                            </Col>
                            <Col>
                                <div>
                                    {
                                        this.isMobile() ?
                                            (
                                                <div ref={this.introduction}>
                                                    <BodySection key="first" style={{
                                                        MozBorderRadiusTopleft: 10,
                                                        MozBorderRadiusTopright: 10,
                                                        WebkitBorderTopLeftRadius: 10,
                                                        WebkitBorderTopRightRadius: 10
                                                    }}>
                                                        <IntroductionSection app={this}/>
                                                    </BodySection>
                                                </div>
                                            ) : (
                                                <div ref={this.introduction}>
                                                    <BodySection key="second">
                                                        <IntroductionSection app={this}/>
                                                    </BodySection>
                                                </div>
                                            )
                                    }

                                    <WorkModal parent={this}
                                               isActive={this.state.currentPageState === this.pageStates.ProjectPage}/>

                                    <div ref={this.proWork}>
                                        <BodySection>
                                            <div style={{width: '100%', height: '100%'}}>
                                                <HeaderUnderline> Professional Work </HeaderUnderline>
                                                <WorkSection onProjectOpenend={this.openProject} app={this}
                                                             work1={Projects.work1}
                                                             work2={Projects.work2}
                                                             work3={Projects.work3}/>
                                            </div>
                                        </BodySection>
                                    </div>

                                    <div ref={this.perWork}>
                                        <BodySection>
                                            <HeaderUnderline> Projects </HeaderUnderline>
                                            <WorkSection onProjectOpenend={this.openProject} app={this}
                                                         work1={Projects.work4}
                                                         work2={Projects.work5}
                                                         work3={Projects.work6}/>
                                        </BodySection>
                                    </div>
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
