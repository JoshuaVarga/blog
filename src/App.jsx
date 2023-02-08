import React, { useEffect, useState } from "react";
import supabase from "./client";

function App() {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <h1 key={country.id}>{country.name}</h1>
      ))}
    </div>
  );
}

export default App;
