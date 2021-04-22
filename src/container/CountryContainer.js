import React, {useState, useEffect} from 'react';
import CountrySelector from '../component/CountrySelector';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        fetchCountries()
    })

    const fetchCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (name) => {
        console.log(`You clicked on ${name}`)
    }

    return(
        <div>
        <p>This is CountryContainer</p>
        <CountrySelector countries={countries} onCountryClick={onCountryClick}/>
        </div>
    );
}

export default CountryContainer;