import React, {useState, useEffect} from 'react';
import CountrySelector from '../component/CountrySelector';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetchCountries()
    })

    const fetchCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    return(
        <div>
        <p>This is CountryContainer</p>
        <CountrySelector countries={countries}/>
        </div>
    );
}

export default CountryContainer;