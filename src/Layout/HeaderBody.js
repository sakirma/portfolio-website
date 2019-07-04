import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const PaperHeader = withStyles({
    rounded: {
        borderRadius: '4px 4px 0 0',
    },
})(Paper);

const ButtonHeader = withStyles({
    root: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 'bold'
    }
})(Button);


class HeaderBody extends React.Component {
    constructor(props) {
        super(props);
        this.headerBodyElement = React.createRef();
    }

    componentDidMount() {
        this.props.app.onScrollCallbacks.push(this.headerBodyScroll);
    };
    headerBodyScroll(event) {

    };
    render() {
        return (
            <Grid
                container
                spacing={0}
                justify="center"
                onScroll={this.handleScroll}
                ref={this.headerBodyElement}
            >
                <Grid item xl={7} lg={10} md align="center">
                    <PaperHeader xs={5} elevation={0} style={{
                        backgroundColor: "#f7f7f7",
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        fontFamily: 'inherit'
                    }}>
                        <Grid container justify="center" spacing={2} direction="row">
                            <Grid item>
                                <ButtonHeader>
                                    Introduction
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    First Section
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    Second Section
                                </ButtonHeader>
                            </Grid>
                            <Grid item>
                                <ButtonHeader>
                                    Last Section
                                </ButtonHeader>
                            </Grid>
                        </Grid>
                    </PaperHeader>
                </Grid>
            </Grid>)
    }
}

export default HeaderBody;