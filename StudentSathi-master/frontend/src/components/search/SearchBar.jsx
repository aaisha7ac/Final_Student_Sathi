import React from "react";
import { useState ,useEffect} from "react";
import SearchIcon from './a.jpg';


import "./SearchBar.css";

const SearchBar = () => {
    const [search,setSearch]=useState("");
    const handleChange=e=>{
        setSearch(e.target.value);
    }
   
    return (
        <section className='search_section'>
            <div className='search_input_div'>
                <input
                    type='text'
                    className='search_input'
                    placeholder='Search...'
                    autoComplete='off'
                    onChange={handleChange}
                    value={search}                />
                <div className='search_icon'>
                  
                    {/* <CloseIcon /> */}
                </div>
            </div>
            <div className='search_result'>
                <a href='#' target='_blank' className='search_suggestion_line'>
                    This is suggestion line.
                </a>
            </div>
        </section>
    );
};

export default SearchBar;
