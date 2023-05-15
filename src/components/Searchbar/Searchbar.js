import React, {Component} from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from './Searchbar.module.css';
import PropTypes from "prop-types";


export class Searchbar extends Component {
    state = {
        value: "",
    }

handleChange = ({target:{value}}) => {
this.setState({value})
}
handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.value.trim(" ") === "") {
        toast.warn("Enter a search term, please!");
        return
    }

    this.props.handleSearch(this.state.value)
}

    render(){
        return (
            <div>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={css.SearchFormButton}>
                            <BsSearch/>
                            <span className={css.SearchFormButtonLabel}>Search</span>
                        </button>
                        <input
                            className={css.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleChange}
                            value={this.state.value}
                            />
                    </form>
                </header>
            </div>
        );
    }
}

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}