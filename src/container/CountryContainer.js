import React, {useState, useEffect} from 'react';
import CountryDisplayed from '../component/CountryDisplayed';
import CountrySelector from '../component/CountrySelector';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [totalPopulation, setTotalPopulation] = useState(0)

    useEffect(() => {
        fetchCountries()
    })

    const totalPopulationNumber = countries.reduce((total, country) => {
        return total + country.population;
        
    }, 0)
    

    useEffect(() => {
        setTotalPopulation(totalPopulationNumber)
    })


    const fetchCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
        setSelectedCountry(country);
    }


    return(
        <div>
            <h1>Total Populations of All Countries is: {totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>
        <p>This is CountryContainer</p>
        <CountrySelector countries={countries} onCountryClick={onCountryClick}/>
        <CountryDisplayed country={selectedCountry}/>
        </div>
    );
}

export default CountryContainer;