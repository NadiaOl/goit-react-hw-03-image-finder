import React from "react";
// import PropTypes from "prop-types";
import css from './Modal.module.css';

export const Modal = ({data, closeModal})=> {
    console.log(data)
    return (
        <div className={css.Overlay} onClick={closeModal}>
            <div className={css.Modal}>
                <img src={data.webformatURL} alt="" />
            </div>
        </div>
    )
}
