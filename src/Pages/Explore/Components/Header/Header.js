import React, { useState } from "react";
import './Header.css'; 
import {GoSearch} from 'react-icons/go';

function Header(props){
    const[search,setSearch] = useState("")

    const handleSetTitle = (e)=>{
        e.preventDefault();
        props.setTitle(search);
        setSearch("")
    } 
    
    const categories = ["3D","art","painting","pfp","photography","trading-cards","video"];
    return(   
        <div className="header">

            <div className="container search">

                <h1>Explore NFTs</h1>

                <form className="search-box" onSubmit={handleSetTitle}>
                    {/* Input */}
                    <input 
                        type="text" 
                        placeholder="Search by NFT name" 
                        onChange={(e)=>setSearch(e.target.value)}
                        value={search}
                    />
                    <button className="search-button" type="submit"><GoSearch/></button>
                </form>

                <div className="categories">
                    {categories.map(c =>   
                        <div className="category" key={c}>
                            <div><img src={`icons/${c}.svg`} title={c} alt="category"/></div>
                            <p>{c}</p>
                        </div> 
                    )}
                </div>

                <div className="search_filters">
                    <select defaultValue={'DEFAULT'} name="sortBy" >
                        <option value="DEFAULT" disabled>Sort by</option>
                        <option value="">Price &uarr;</option>
                        <option value="">Price &darr;</option>
                        <option value="">Rarity rank &uarr;</option>
                        <option value="">Rarity rank &darr;</option> 
                        </select>
                    <select defaultValue={'DEFAULT'} name="single/collection" >
                        <option value="DEFAULT" disabled>Single/Collection</option>
                        <option value="">All</option>
                        <option value="">In collection</option>
                    </select>
                    <select defaultValue={'DEFAULT'} name="selectTags" >
                        <option value="DEFAULT" disabled>Select Tags</option>
                        <option value="">Digital</option>
                        <option value="">Physical</option>
                        <option value="">Immaterial</option> 
                    </select>
                    <select defaultValue={'DEFAULT'} >
                        <option value="DEFAULT" disabled>Select License</option>
                        <option value="">Public</option>
                        <option value="">Reproduction</option>
                        <option value="">Pentesting</option> 
                    </select>
                </div>
            </div> 

        </div>
  
    )
}

export default Header;