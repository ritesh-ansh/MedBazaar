function Search({ mainSearch, navBar }) {
  return (
    <div className="  flex items-center overflow-hidden hover:scale-105 transition transform duration-75 focus-within:scale-105 hover:border-2 rounded-lg focus-within:border-[#009F7F] focus-within:border-2 hover:border-[#009F7F]">
      <input
        className="w-[80vh]  overflow-hidden shadow-md  ${mainsearch? rounded-r-none  : rounded-md } p-4 border-r-0  text-md outline-none focus:outline-none"
        placeholder="Search for stores or medicines"
        type="text"
      />
      <button
        type="submit"
        className=" outline-none hover:outline-none focus:outline-none p-4 border-[#009F7F] hover:border-l-0  hover:ring-[#009F7F] bg-white hover:bg-[#009F7F] m-0 w-[20vh] text-md rounded-r-md px-3   "
      >
        Search
      </button>
    </div>
  );
}

export default Search;