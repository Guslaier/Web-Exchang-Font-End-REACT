import React from 'react';
import './Search.css';
import { ReactSVG } from 'react-svg';
import searchIcon from '../../../assets/svg/search/search-icon.svg'; 
interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  id?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, placeholder, id }) => {
  return (
    <div className="search-container border">
      <ReactSVG
        src={searchIcon}
        className="search-icon"
      />
        <input
            type="text"
            placeholder={placeholder || "Search ..."}
            className="search-input"
            id={id ? `${id}` : undefined}
            onChange={(e) => onSearch(e.target.value)}
        />	
    </div>
  );
}

export default Search;