import React, {Component} from "react";
import { getPicture } from '../API/API';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import {Button} from '../Button/Button';
import css from './ImageGallery.module.css';
import { Modal } from "components/Modal/Modal";

export class ImageGallery extends Component {

state={
    data: null,
    isLoading: false,
    page: 1,
    isShowModal: false,
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchText !== this.props.searchText){
        this.setState({isLoading: true, page: 1})
        getPicture(this.props.searchText, this.state.page)
        .then(response => response.json())
        .then((data) => this.setState({data: data.hits}))
        .catch((error) => console.log(error))
        .finally(() => {this.setState({isLoading: false, page: this.state.page+1})
    })
    }
}

    hendlerButtonClick = (e) => {
        this.setState({page: this.state.page+1})
        getPicture(this.props.searchText, this.state.page)
        .then(response => response.json())
        .then((data, page) => this.setState({data: data.hits}))
        .catch((error) => console.log(error))
    };

    showModal = () =>{
        this.setState({isShowModal: true});
    }

    closeModal = () => {
        this.setState({isShowModal: false});
    }

    render() {
        const {data, isLoading} = this.state
        return(
            <>
                {this.state.isShowModal && <Modal data={data} closeModal={this.closeModal} />}
                {isLoading && <Loader />}
                <ul className={css.ImageGallery}>
                    <ImageGalleryItem data={data} showModal={this.showModal}/>
                </ul>
                {data && <Button onClick={this.hendlerButtonClick}/>}
            </>
        )
    }
}