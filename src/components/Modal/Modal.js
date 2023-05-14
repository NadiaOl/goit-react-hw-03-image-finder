import React from "react";
// import PropTypes from "prop-types";
import css from './Modal.module.css';

export const Modal = ({ closeModal, largePicture})=> {
    console.log(largePicture)
    return (
        <div className={css.Overlay} onClick={closeModal}>
            <div className={css.Modal}>
                <img src={largePicture} alt="something" />
            </div>
        </div>
    )
}
