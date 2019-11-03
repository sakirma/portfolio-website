import React from "react";

class WorkBase extends React.Component {
    constructor(props) {
        super(props);

        this.thumbnail = "";
        this.titleName = undefined;
        this.description = undefined;
    }

    content() {
        return {thumbnail: this.thumbnail, titleName: this.titleName, description: this.description};
    }
}

export default WorkBase;