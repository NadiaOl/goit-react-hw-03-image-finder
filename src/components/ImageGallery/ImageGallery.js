import React, {Component} from "react";
import { getPicture } from '../../API/API';
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
    largePicture: '',
}

componentDidUpdate(prevProps, prevState) {
    const {page} =this.state;
    const searchText = this.props.searchText;


    
    if(prevProps.searchText !== searchText){
        this.setState({isLoading: true, data: null})
        getPicture(searchText, 1)
        .then(response => response.json())
        .then((data) => this.setState({data: data.hits, page: 1}))
        .catch((error) => console.log(error))
            .finally(() => {
                this.setState({ isLoading: false})
    })
    }

    if(prevState.page !== page){
        this.setState({isLoading: true})
        getPicture(searchText, page)
        .then(response => response.json())
        .then((data) => this.setState({data: [ ...prevState.data, ...data.hits]}))
        .catch((error) => console.log(error))
            .finally(() => {
                this.setState({ isLoading: false })
    })
    }
}

    hendlerButtonClick = (e) => {
        this.setState({ page: this.state.page + 1 })
    };

    showModal = (largeImageURL) =>{
        this.setState({isShowModal: true, largePicture: largeImageURL});
    }

    closeModal = () => {
        this.setState({isShowModal: false});
    }

    render() {
        const {data, isLoading, largePicture} = this.state
        return(
            <>
                {this.state.isShowModal && <Modal data={data} largePicture={largePicture} closeModal={this.closeModal} />}
                {isLoading && <Loader />}
                <ul className={css.ImageGallery}>
                    <ImageGalleryItem data={data} showModal={this.showModal}/>
                </ul>
                {data && <Button onClick={this.hendlerButtonClick}/>}
            </>
        )
    }
}