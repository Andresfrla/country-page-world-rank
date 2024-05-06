export const filterStatus = ( data, status ) => {
    const { isUnitedNations, isIndependent } = status

    if(data.isIndependent && isIndependent) {
        return data.filter(country => country.isIndependent)
    }

    if(data.unMember && isUnitedNations){
        return data.filter(country => country.unMember)
    }
}