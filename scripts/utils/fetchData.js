// Asynchronous function to fetch JSON data

export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
