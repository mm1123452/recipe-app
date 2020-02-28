import fetch from 'node-fetch';

export const getData = async (query) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  const res = await fetch(URL);
  const data = await res.json()
  return data
}