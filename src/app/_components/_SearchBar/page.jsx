const SearchBar = () => {
  return (
    <div className="grid grid-cols-2 place-content-between gap-[630px] mt-5">
            <p>Found 234 countries</p>
            <div>
                <input type="text" placeholder="Search for a country..."/>
            </div>
    </div>
  )
}

export default SearchBar