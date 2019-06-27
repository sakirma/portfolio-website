import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography";

import logo from "./images/logo.jpeg";

import "./header.css"
import withStyles from "@material-ui/core/styles/withStyles";

const BigAvatar = withStyles({
    root: {
        width: 175,
        height: 175,
        margin: 20,
    }
})(Avatar);


class App extends Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                style={{border: "solid 5px", height: "100%"}}
            >
                <Grid item style={{height: "70%", border: "solid 1px", backgroundColor: "yellow"}} container
                      direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <BigAvatar alt="Huseyin Caliskan" src={logo} className="bigAvatar"> </BigAvatar>
                    </Grid>

                    <Grid item>
                        <Typography variant="h3">
                            Huseyin Caliskan
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="subtitle1">
                            <p>
                                Just an ordinary Software Engineer
                            </p>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs style={{flex: 1, border: "solid 1px", backgroundColor: "red"}}>
                    Content
                </Grid>
            </Grid>
        );
    }
}

export default App;
