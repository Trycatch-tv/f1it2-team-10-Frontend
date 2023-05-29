import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';

const Search = () => {
  const { citas, setCitas } = useGlobalState();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      if (query) {
        const response = await fetch(`/api/search/${query}`);
        const data = await response.json();
        setResults(data);
      }
    };

    if (query) {
      fetchCitas();
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar cita"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((cita) => (
          <li key={cita.id}>
            <h3>{cita.nombre}</h3>
            <p>{cita.fecha}</p>
            <p>{cita.hora}</p>
            <p>{cita.duracion}</p>
            <p>{cita.ubicacion}</p>
            <p>{cita.detalles}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

