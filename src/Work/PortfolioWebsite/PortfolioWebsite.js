import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./React.png";

export default class PortfolioWebsite extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Junk Food Mountain";
        this.description = "First time with React";
    }

    getReactElement() {
        return <PortfolioWebsite/>
    }

    render() {
        return(<div>
 
        </div>)
    }
}

