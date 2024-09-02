/**
 * Learn how to create a 
 * class Compenent in jsx 
 * 
 */

import React from "react";
import App from "../App";

class Apple extends React.Component {
    render() {
        const { appleInfo } = this.props;
        const { type, color } = appleInfo;
        return (
            <h2>Iam a {color} {type} Apple!</h2>
        )
    }

}

export default Apple;