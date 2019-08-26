import React from 'react';
import {Avatar, Grid} from "@material-ui/core";
import HeaderUnderline from "../Layout/HeaderUnderline";
import withStyles from "@material-ui/core/styles/withStyles";
import bannerlord from '../images/Bannerlord wallpaper.jpg';

const LargeAvatarPicture = withStyles({
    root: {
        padding: "0.4em",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dddddd",

        width: '10.25em',
        height: '10.25em',
    },
    img: {
        borderRadius: '100%',
    }
})(Avatar);


class ProjectsSection extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <HeaderUnderline> Work </HeaderUnderline>
                <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                    <Grid container spacing={10}
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item style={{width: '33%'}}>
                            <LargeAvatarPicture src={bannerlord}/>
                            <h3>
                                Bannerlord
                            </h3>
                            <p>
                                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
                            </p>
                        </Grid>
                        <Grid item style={{width: '33%'}}>
                            <LargeAvatarPicture src={bannerlord}/>
                            <h3>
                                Bannerlord
                            </h3>
                            <p>
                                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
                            </p>
                        </Grid>
                        <Grid item style={{width: '33%'}}>
                            <LargeAvatarPicture src={bannerlord}/>
                            <h3>
                                Bannerlord
                            </h3>
                            <p>
                                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProjectsSection;