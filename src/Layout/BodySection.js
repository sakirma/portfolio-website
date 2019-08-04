import React from 'react';
import {Grid} from "@material-ui/core";

class BodySection extends React.Component {
    render() {
        return (
            <Grid item container>
                { this.props.children }
            </Grid>
             );
    }
}

export default BodySection;