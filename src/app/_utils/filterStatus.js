const filterStatus = (filterData , appStatus) => {
    const { isUnitedNations, isIndependent } = appStatus

    console.log(isUnitedNations, isIndependent)

    return filterData.filter(country =>
      (
        console.log(country)
    )
    );
  };
  
export default filterStatus;