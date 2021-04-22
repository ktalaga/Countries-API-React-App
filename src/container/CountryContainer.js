import React, {useState} from 'react';
import CountrySelector from '../component/CountrySelector';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    const fetchCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return(
        <div>
        <p>This is CountryContainer</p>
        <CountrySelector/>
        </div>
    );
}

export default CountryContainer;