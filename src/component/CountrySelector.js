import React from 'react';
import CountryDetail from './CountryDetail';

const CountrySelector = ({countries}) => {

    const countriesSelected = countries.map((country) => {
        return(<li>{country.name}</li>);
    });

    return(
        <div>
            <p>This is CountrySelector</p>
            <ul>
                <CountryDetail countriesSelected={countriesSelected}/>
            </ul>
        </div>
    );
}

export default CountrySelector;