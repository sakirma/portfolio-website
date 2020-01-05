import React from "react";
import {Button, Modal} from 'react-bootstrap';

class ProjectPage extends React.Component {
    render() {
        let parent = this.props.parent.parent;
        let work = parent.currentOpenWork;

        if (this.props.isActive) {
            return (<div>
                <Modal show={true} onHide={() => parent.closeProject(parent)} centered size="lg"
                       style={{overflowY: 'scroll'}}>
                    {work.getReactElement()}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => parent.closeProject(parent)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>);
        } else {
            return (<div>

            </div>);
        }
    }
}

export default ProjectPage;