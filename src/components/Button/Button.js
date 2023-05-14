import React from "react";
// import PropTypes from "prop-types";

import css from './Button.module.css';

export const Button = ({onClick}) => {


    return (
        <button className={css.Button} type="button" onClick={onClick}>Load more</button>
    )
}