import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
{
    countries{
      code,
      name
    }
}`

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <React.Fragment>
      <h1>Country List</h1>
      <div className="container">
        {data && data.countries &&
          data.countries.map((element, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h3>{element.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;