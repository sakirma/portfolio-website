import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    header: {
        '&::after': {
            backgroundImage: 'linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0)',
            display: 'block',
            content: 'close-quote',
            width: '4.25em',
            height: '2px',
            margin: '0.7em 0 1em 0',
            borderRadius: '2px',
        }
    }
});

class HeaderUnderline extends React.Component {
    constructor(props)
    {
        super(props);


        const { classes } = props;
        this.classes = classes;
    }

    render() {
        return (
            <h2 className={this.classes.header}>
                { this.props.children }
            </h2>
        )
    }
}

export default withStyles(styles())(HeaderUnderline);