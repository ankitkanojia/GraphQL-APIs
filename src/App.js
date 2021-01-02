import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
{
    test
}`

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <React.Fragment>
      <h1>Country List</h1>
      <div className="container">
        <h2>{data && data.test}</h2>
      </div>
    </React.Fragment>
  );
}

export default App;