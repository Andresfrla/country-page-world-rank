const SearchBar = () => {
  return (
    <div className="grid grid-cols-2 place-content-between gap-[400px] mt-6 items-center">
            <p className="text-xl font-bold text-[#6C727F] ml-7">Found 234 countries</p>
            <div>
                <div className="w-[340px] h-[45px] bg-[#282B30] rounded-xl flex flex-row items-center gap-4">
                    <img src="/Search.svg" alt="Correct" className="w-6 h-6 ml-2" />
                    <input type="text" className="flex w-full font-medium text-base bg-transparent" placeholder="Search by Name, Region, Subregion"/>
                </div>
            </div>
    </div>
  )
}

export default SearchBar