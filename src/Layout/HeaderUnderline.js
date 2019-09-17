import React from 'react';
import '../header.css'
import styled from 'styled-components';


const CustomH2 = styled.h2`
    &:after {
        background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
        display: block;
        content: close-quote;
        width: 4.25em;
        height: 2px;
        margin: 0.7em 0 1em 0;
        border-radius: 2px;
    }
`;
// const styles = theme => ({
//     header: {
//         '&::after': {
//             backgroundImage: 'linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0)',
//             display: 'block',
//             content: 'close-quote',
//             width: '4.25em',
//             height: '2px',
//             margin: '0.7em 0 1em 0',
//             borderRadius: '2px',
//         }
//     }
// });

class HeaderUnderline extends React.Component {
    constructor(props)
    {
        super(props);


        const { classes } = props;
        this.classes = classes;
    }

    render() {
        return (
            <CustomH2 className="headerUnderline">
                { this.props.children }
            </CustomH2>
        )
    }
}

export default HeaderUnderline;