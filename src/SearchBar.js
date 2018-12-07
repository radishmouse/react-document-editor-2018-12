import React, {Component} from 'react';

const SearchBar = (props) => {
    return (
      <div className="search-bar form-group">        
        <input 
            type="text" 
            className="form-control" 
            placeholder="Search for something"
            value={props.searchTerm}
            onChange={(event) => {                
                // console.log(event.target.value);
                props.handleInput(event.target.value);
            }}
        />         
      </div>     
    );
};

export default SearchBar;