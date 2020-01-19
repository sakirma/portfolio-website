import React from 'react';
import '../header.css'
import styled from 'styled-components';


const CustomH2Left = styled.h2`
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

const CustomH2Center = styled.h2`
    &:after {
        background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
        display: block;
        content: close-quote;
        height: 2px;
        margin: 0.2em 0 0 0;
        border-radius: 2px;
    }
`;

class HeaderUnderline extends React.Component {
    constructor(props) {
        super(props);


        const {classes} = props;
        this.classes = classes;
        this.alignment = props.alignment;
    }

    render() {
        let CustomHeader = null;

        if(this.alignment === "center")
        {
            CustomHeader =  <CustomH2Center className="headerUnderline"> {this.props.children} </CustomH2Center>

        }
        else
        {
            CustomHeader = <CustomH2Left className="headerUnderline"> {this.props.children} </CustomH2Left>
        }

        return (
            <div>
                {CustomHeader}
            </div>
        )
    }
}

export default HeaderUnderline;