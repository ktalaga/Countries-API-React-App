import React from 'react';

const CountryFavs = ({favCountries}) => {
    const listOfFavs = () => {
        if(favCountries){
            const countriesSelected = favCountries.map((favCountry, index) => {
                return <li key={index} value={index}>{favCountry.name}</li>
            });
            return null
        }
    }



    return(
        <div>
            <h4>Your Favourite Countries: </h4>
            <ul>
                {listOfFavs}
            </ul>
        </div>
        
    );
}

export default CountryFavs;
