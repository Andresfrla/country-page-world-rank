const sortData = (data, sortBy) => {
    switch (sortBy) {
      case 'Population':
        return data.sort((a, b) => b.population - a.population);
      case 'Name':
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      case 'Area':
        return data.sort((a, b) => b.area - a.area);
      case 'Region':
        return data.sort((a, b) => a.region.localeCompare(b.region));
      default:
        return data;
    }
  };

  export default sortData