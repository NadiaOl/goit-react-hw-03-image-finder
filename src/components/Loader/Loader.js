import React from "react";

// import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    )
}