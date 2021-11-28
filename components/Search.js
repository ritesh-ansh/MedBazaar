import { useRouter } from "next/router";

function Search({ navBar }) {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div
      className={
        " flex items-center overflow-hidden hover:scale-105 transition transform duration-75 focus-within:scale-105 hover:border-2 rounded-lg  focus-within:border-2 " +
        (page === "Beauty"
          ? " focus-within:border-[#cfc9cd] hover:border-[#cfc9cd] "
          : page === "Health-tips"
          ? "focus-within:border-[#939393] hover:border-[#939393] "
          : " hover:border-[#009F7F] focus-within:border-[#009F7F] ")
      }
    >
      <input
        className={
          " p-2 overflow-hidden shadow-md  border-r-0  md:text-md outline-none focus:outline-none" +
          (navBar
            ? " md:w-[60vh] w-[20vh] md:p-2"
            : " md:w-[80vh] w-[40vh] md:p-4")
        }
        placeholder="Search for stores or medicines"
        type="text"
      />
      <button
        type="submit"
        className={
          " text-white p-2  outline-none hover:outline-none focus:outline-none md:p-4  m-0   rounded-r-md    " +
          (navBar
            ? "md:w-[15vh] md:text-sm md:px-2"
            : "md:w-[20vh] md:text-md md:px-3") +
          (page === "Beauty"
            ? " bg-[#746156] border-[#746156] hover:border-l-0  hover:ring-[#746156]  hover:bg-[#746156]  "
            : page === "Health-tips"
            ? " bg-[#939393] border-[#939393] hover:border-l-0  hover:ring-[#939393]  hover:bg-[#939393]  "
            : " bg-green-700 border-[#009F7F] hover:border-l-0  hover:ring-[#009F7F]  hover:bg-[#009F7F] ")
        }
      >
        Search
      </button>
    </div>
  );
}

export default Search;
