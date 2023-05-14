import React from "react";
// import PropTypes from "prop-types";

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({data, showModal}) => {
    return (
        data &&
        data.map(({id, webformatURL}) => {
            return <li className={css.ImageGalleryItem} key={id} onClick={showModal}>
                <img className={css.ImageGalleryItemImage} alt={id} src={webformatURL}></img>
            </li>
        })

)
}
