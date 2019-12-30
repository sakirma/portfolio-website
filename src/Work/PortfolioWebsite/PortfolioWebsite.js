import React from "react";
import WorkBase from "../WorkBase";
import {Card, Carousel, Modal} from 'react-bootstrap';


import thumbnail from "./capitola-vr-logo-black.png";

class CapitolaVRDigital extends WorkBase {
    constructor(props) {
        super(props);

        this.thumbnail = thumbnail;
        this.titleName = "Capitola VR Digital";
        this.description = "My internship at Capitola VR Digital, Virtual/Augmented Reality Developer";
    }

    getReactElement() {
        return <CapitolaVRDigital/>
    }

    render() {
        return(<div>

        </div>)
    }
}