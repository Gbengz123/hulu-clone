
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Result from './components/Result';
import request from '../../utils/request';

async function fetchData(genre) {
  const requestUrl = `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`;
  const res = await fetch(requestUrl);
  const data = await res.json();
  return data.results;
}

export default async function Page({ searchParams }) {
  const genre = searchParams.genre || 'defaultGenre';
  const results = await fetchData(genre);

  return (
    <div>
      <Header />
      <Nav />
      {/* <h1>Genre: {genre}</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre> */}
      <Result results={results} />
    </div>
  );
}
