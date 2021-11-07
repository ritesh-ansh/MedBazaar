function SearchBox() {
  return (
    <div className=" flex items-center">
      <input
        className="w-[80vh] p-2 shadow-sm rounded border-2  focus:outline-none focus:border-[#009F7F] hover:border-[#009F7F] focus:ring-[#009F7F]  "
        placeholder="Search"
        type="text"
      />
    </div>
  );
}

export default SearchBox;
