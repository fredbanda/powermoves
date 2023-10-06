import React from 'react';
import { useNavigate } from "react-router-dom";

const Search = ({search, handleChange}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            navigate(`/search/searchQuery=${search}`);
        }else{
            navigate("/")
        }
    }
  return (
    <div>
        <div className="blog-heading text-start-py-2 mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="col-12 py-3">
                    <input 
                    type="text"
                    className="form-control search-input"
                    placeholder="Search Post"
                    value={search}
                    onChange={handleChange}
                    />
                </div>
                <button className="btn btn-secondary search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Search