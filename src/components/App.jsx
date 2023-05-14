import React, {Component} from "react";
import { ToastContainer } from 'react-toastify';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import css from '../components/Searchbar/Searchbar.module.css'



export class App extends Component {
  state = {
    searchText: "",
  }

  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render(){
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch}/>
        <ToastContainer/>
        <ImageGallery searchText={this.state.searchText}/>
      </div> 
    );
  }
};
