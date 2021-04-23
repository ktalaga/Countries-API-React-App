import React from 'react';
import CountryFavs from './CountryFavs';

const CountryDisplayed = ({country, onFavCountryClick}) => {

    const handleFavCountryClick = function(){
        onFavCountryClick(country)
    }

    if(country){
        return(
            <div>
                <h3>{country.name}</h3>
                <img src={country.flag} alt="Flag" width="300px" height="150px"/>
                <h4>Capital: {country.capital}</h4>
                <p>Code: {country.alpha3Code}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                <button onClick={handleFavCountryClick} >Add to Favs</button>
                <CountryFavs />
            </div>
        );
    }else{
        return null;
}

}

export default CountryDisplayed;