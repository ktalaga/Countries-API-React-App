import React from 'react';
import CountryDetail from './CountryDetail';

const CountrySelector = ({countries, onCountryClick}) => {

    const countriesSelected = countries.map((country, index) => {
        return <option country = {country} name={country.name} key={index} value={index} onCountryClick={onCountryClick}>{country.name}</option>
    });

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountryClick(chosenCountry)
    }


    return(
        <div>
            <p>This is CountrySelector</p>
            <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countriesSelected}
        </select>
                

        </div>
    );
}

export default CountrySelector;