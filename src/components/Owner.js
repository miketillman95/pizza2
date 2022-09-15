import React from 'react'
import { useEffect, useState } from 'react'

export default function Owner () {
  const [toppings, setToppings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3010/api/toppings")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualtoppings) => {
        setToppings(actualtoppings);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setToppings(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Owner">
      <h1>Pizza Toppings</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post toppings - ${error}`}</div>
      )}
      <ul>
        {toppings &&
          toppings.map(({ id, type }) => (
            <li key={id}>
              <h3>{type}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}