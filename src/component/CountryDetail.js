import React from 'react';

const CountryDetail = ({name, onCountryClick}) => {
    
    const handleClick = () => {
        onCountryClick(name);
    }

    return(
        <div>
            <li onClick={handleClick}>{name}</li>
        </div>
    );
}

export default CountryDetail;
