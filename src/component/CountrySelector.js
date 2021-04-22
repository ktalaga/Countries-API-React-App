import React from 'react';
import CountryDetail from './CountryDetail';

const CountrySelector = ({countries, onCountryClick}) => {

    const countriesSelected = countries.map((country) => {
        return <CountryDetail country = {country} name={country.name} key={country.alpha3Code} onCountryClick={onCountryClick}/>
    });



    return(
        <div>
            <p>This is CountrySelector</p>
            <ul>
                {countriesSelected}
            </ul>
        </div>
    );
}

export default CountrySelector;