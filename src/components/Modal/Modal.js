
import React, {Component} from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root') 

export class Modal extends Component {
componentDidMount(){
window.addEventListener('keydown', this.handleEscClose)
}

componentWillUnmount(){
window.removeEventListener('keydown', this.handleEscClose)
}

handleEscClose = (event) => {
    if(event.code === 'Escape')
    this.props.closeModal()
}

handleBackdropClose = (event) => {
    if(event.target === event.currentTarget)
    this.props.closeModal()
}

    render(){
        const { largePicture} = this.props
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackdropClose}>
            <div className={css.Modal}>
                <img src={largePicture} alt="some" />
            </div>
        </div>, modalRoot
        )
    }
}

Modal.propTypes = {
    largePicture: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}