const filterData = (data, searchValue) => {
    return data.filter(country =>
      (country.name.common?.toLowerCase().includes(searchValue.toLowerCase()) || 
      country.region?.toLowerCase().includes(searchValue.toLowerCase()) || 
      country.subregion?.toLowerCase().includes(searchValue.toLowerCase()))
    );
  };
  
  export default filterData;