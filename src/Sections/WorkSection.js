import React from 'react';
import {Grid} from "@material-ui/core";
import HeaderUnderline from "../Layout/HeaderUnderline";
import Work from "./Work"

class WorkSection extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <HeaderUnderline> Work </HeaderUnderline>
                <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                    <Grid container spacing={5}
                          direction="row"
                          justify="center">
                        <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work1, this.props.app)} information={this.props.work1}/>
                        <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work2, this.props.app)} information={this.props.work2}/>
                        <Work onProjectOpenend={() => this.props.onProjectOpenend(this.props.work3, this.props.app)} information={this.props.work3}/>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default WorkSection;