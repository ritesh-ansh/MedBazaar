function Search() {
  return (
    <div className="">
      <input
        className="w-[60vh] p-1 shadow-md rounded-md border-2 pl-2 py-2 text-sm focus:outline-none focus:border-[#009F7F] hover:border-[#009F7F] focus:ring-[#009F7F]"
        placeholder="Search for stores or medicines"
        type="text"
      />
      <button
        type="submit"
        className="bg-green-400 py-2 text-sm rounded-r-md px-3 invisible"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
