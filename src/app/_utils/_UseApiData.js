export function fetchData() {
  return fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      return data; // If you want to use the fetched data in another function, you can return it here
    })
    .catch(error => {
      throw error; // If you want to handle the error in the function that calls this function, you can re-throw it here
    });
}