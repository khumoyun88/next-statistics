"use client";
import { useEffect, useState } from 'react';

const CovidData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'a34168f7ecmsh9acf002d64cd67dp17e7a2jsn0c6877f3bc1c',
                    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result[0]); // Assuming result is an array with one object
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>COVID-19 Data for Italy</h1>
            <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">{data.country}</h2>
                <p>Confirmed Cases: {data.confirmed}</p>
                <p>Recovered Cases: {data.recovered}</p>
                <p>Critical Cases: {data.critical}</p>
                <p>Deaths: {data.deaths}</p>
                <p>Last Update: {data.lastUpdate}</p>
            </div>
        </div>
    );
};

export default CovidData;
