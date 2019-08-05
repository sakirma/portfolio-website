import React from 'react';
import {Grid, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        padding: '4em 4em 2em 4em',
    }
});

class BodySection extends React.Component {
    constructor(props) {
        super(props);

        const { classes } = props;
        this.classes = classes;
    }


    render() {
        return (
            <Grid item container className={this.classes.root}>
                { this.props.children }
            </Grid>
             );
    }
}

export default withStyles(styles)(BodySection);