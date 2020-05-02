import React from 'react';
import './index.css';
import PropTypes from "prop-types";

function Button(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <input type="submit" value="Get Customer Details" className="btn btn-secondary button-width" />
        </form>

    )
}

export default Button;