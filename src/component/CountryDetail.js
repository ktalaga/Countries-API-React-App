import React from 'react';

const CountryDetail = ({name, onCountryClick, country}) => {
    
    const handleClick = () => {
        onCountryClick(country);
    }

    return(
        <div>
            <li onClick={handleClick}>{name}</li>
        </div>
    );
}

export default CountryDetail;
