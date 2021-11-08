import Image from "next/image";
import Navbar from "./Navbar";
import Search from "./Search";

function MainSearch() {
  return (
    <>
      <div
        className="w-full flex justify-center items-center h-screen bg-back-ground opacity-80  bg-no-repeat bg-cover  "
        // styles="background-image:url('/images/bg.jpg')"
      >
        <Search />
      </div>
    </>
  );
}

export default MainSearch;
