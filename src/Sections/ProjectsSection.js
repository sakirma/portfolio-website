import React from 'react';
import {Grid} from "@material-ui/core";
import HeaderUnderline from "../Layout/HeaderUnderline";

class ProjectsSection extends React.Component {
    render() {
        return (
            <div>
                <HeaderUnderline> Projects </HeaderUnderline>
                <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                    <Grid style={{width: '60%', height: '100%'}} container spacing={0} direction='column' alignItems='center' justify='flex-start'>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProjectsSection;