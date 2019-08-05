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

const styles = theme => ({
   absoluteWidthHeader: {
       [theme.breakpoints.only('xs')]: {
           paddingRight: '33px'
       },
       [theme.breakpoints.only('sm')]: {
           paddingRight: '48px'
       },
       [theme.breakpoints.up('md')]: {
           paddingRight: '64px'
       },
   }
});

function HeaderButtons() {
    return (
        <Grid item xs={12} sm={9} xl={7} lg={10} md align="center">
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
    );
}


class HeaderBody extends React.Component {
    constructor(props) {
        super(props);

        const { classes } = props;
        this.classes = classes;

        this.headerBodyElement = React.createRef();
        this.topHeader = React.createRef();
        this.windowIsBelowHeader = false;
    }

    componentDidMount() {
        this.props.app.onScrollCallbacks.push(() => this.headerBodyScroll());
    };

    headerBodyScroll() {
        if (this.headerBodyElement.current.offsetTop < window.top.pageYOffset) {
            this.setState({windowIsBelowHeader: true});
            this.windowIsBelowHeader = true;
        } else {
            this.setState({windowIsBelowHeader: false});
            this.windowIsBelowHeader = false;
        }
    };

    render() {
        return (
            <div>
                <Grid container spacing={0} justify="center" ref={this.headerBodyElement}>
                    <HeaderButtons/>
                </Grid>
                <AbsoluteHeader classes={this.classes} isActive={this.windowIsBelowHeader} reference={this.topHeader}/>
            </div>
        )
    }
}

function AbsoluteHeader(props) {
    if (props.isActive) {
        return (
            <Grid container spacing={0} justify="center" ref={props.reference} className={props.classes.absoluteWidthHeader} style={{position: 'fixed', top: '0', zIndex: 1000}}>
                <HeaderButtons/>
            </Grid>
        );
    } else {
        return (
            <div/>
        );
    }
}


export default withStyles(styles)(HeaderBody);