"use client"
import React, { useState, useEffect, useRef } from "react";

function CovidData() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetched = useRef(false);

  const url = "https://covid-19-data.p.rapidapi.com/help/countries?format=json";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key":'a34168f7ecmsh9acf002d64cd67dp17e7a2jsn0c6877f3bc1c',
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchData() {
      if (isFetched.current) return;
      isFetched.current = true; 
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      <h1 className="text-lg font-semibold text-r" >
        Total Deaths: 99.999.999
      </h1>
      <ul >
        {countries.map((country) => (
          <li>
            <div >
              <h2 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-gray-800">
                {country.name}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CovidData;
