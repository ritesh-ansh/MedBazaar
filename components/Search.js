function Search({ mainSearch, navBar }) {
  return (
    <div className=" flex items-center overflow-hidden hover:scale-105 transition transform duration-75 focus-within:scale-105 hover:border-2 rounded-lg focus-within:border-[#009F7F] focus-within:border-2 hover:border-[#009F7F]">
      <input
        className="md:w-[80vh] w-[40vh] p-2 overflow-hidden shadow-md md:p-4 border-r-0  md:text-md outline-none focus:outline-none"
        placeholder="Search for stores or medicines"
        type="text"
      />
      <button
        type="submit"
        className=" text-white p-2 bg-green-700 outline-none hover:outline-none focus:outline-none md:p-4 border-[#009F7F] hover:border-l-0  hover:ring-[#009F7F]  hover:bg-[#009F7F] m-0 md:w-[20vh] md:text-md rounded-r-md md:px-3   "
      >
        Search
      </button>
    </div>
  );
}

export default Search;
