import React, {Component} from "react";
import axios from 'axios';
// import {Button} from './Button/Button';
// import {ImageGallery} from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import {Loader} from './Loader/Loader';
// import {Modal} from './Modal/Modal';
// import {Searchbar} from './Searchbar/Searchbar';

import css from '../components/Searchbar/Searchbar.module.css';

// переменные
const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '34756592-add6791e980caa28afb1f7410';



//  получаем ответ от бекэнда
// async function fetchPhoto(seekedPhoto, page) {
//     const arraySearchPhoto = await axios.get(`${BASE_URL}/?key=${KEY}&q=${seekedPhoto}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
//     return arraySearchPhoto
// }

// export { fetchPhoto };

export const App = () => {
  return (
    <div>
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
    </div>
  );
};
