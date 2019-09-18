import React from 'react';
import HeaderUnderline from "../Layout/HeaderUnderline";
import logo from "../images/logo.jpeg";
import {Col, Image, Row} from "react-bootstrap";
import styled from "styled-components";

// const LargeProfilePicture = withStyles({
//     root: {
//         padding: "0.4em",
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderColor: "#dddddd",
//
//         width: 256,
//         height: 256,
//     },
//     img: {
//         borderRadius: '100%',
//     }
//
// })(Avatar);


// const Avatar = styled.img`
//     &:after {
//         background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
//         display: block;
//         content: close-quote;
//         width: 4.25em;
//         height: 2px;
//         margin: 0.7em 0 1em 0;
//         border-radius: 2px;
//     }
// `;

const styles = theme => ({
    // button: {
    //     margin: theme.spacing(1),
    // },
});

class IntroductionSection extends React.Component {
    constructor(props) {
        super(props);

        const {classes} = props;

        this.classes = classes;
    }

    render() {
        return (
            <Row>
                <Col xs={8}>
                    <HeaderUnderline>Huseyin Caliskan</HeaderUnderline>
                    <p>
                        Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam
                        amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit
                        amet aliquam.
                    </p>
                </Col>
                <Col xs={4}>
                    <Image style={{width: '22em', padding: "0.75em"}} src={logo} roundedCircle fluid thumbnail/>
                </Col>
            </Row>
        );
    }

    // render() {
    //     return (
    //         <Grid container spacing={0} direction="row" justify="center" alignItems="center">
    //             <Grid style={{width: '60%', height: '100%'}} container spacing={0} direction='column' alignItems='center' justify='flex-start'>
    //                 <Grid item style={{textAlign: 'left'}}>
    //                     <HeaderUnderline>Huseyin Caliskan</HeaderUnderline>
    //                     <i>
    //                         <p>
    //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, justo sit amet sodales dictum, nulla leo cursus nibh, eu pulvinar ipsum turpis vel metus. Suspendisse venenatis, mauris a commodo vestibulum, felis dui aliquet erat, at aliquam lacus tellus eget augue. Duis ac libero vitae neque commodo vestibulum.
    //                         </p>
    //                     </i>
    //                 </Grid>
    //
    //             </Grid>
    //             <Grid item container style={{width: '40%'}} justify="center">
    //                 <LargeProfilePicture src={logo} className="largeProfilePicture"/>
    //             </Grid>
    //         </Grid>
    //     )
    // }
}

export default IntroductionSection;