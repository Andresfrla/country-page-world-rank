export function getOneCountryByCode(code) {
    return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => response.json())
      .then(data => {
        return data; 
      })
      .catch(error => {
        throw error; 
      });
  }