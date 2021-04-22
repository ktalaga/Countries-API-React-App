import React from 'react';

const CountryDisplayed = ({country}) => {
    if(country){
        return(
            <div>
                <h3>{country.name}</h3>
                <img src={country.flag} alt="Flag" width="300px" height="150px"/>
                <h4>Capital: {country.capital}</h4>
                <p>Code: {country.alpha3Code}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population}</p>
            </div>
        );
    }else{
        return null;
}

}

export default CountryDisplayed;