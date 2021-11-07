import Image from "next/image";
import Search from "./Search";

function MainSearch() {
  return (
    <>
      <div className="flex relative ">
        <div className="h-[100vh]">
          <img
            className=" absolute h-[100vh] z-[-2] w-full object-cover"
            src="/images/bg.jpg"
          />
        </div>
        <div className="mt-[50vh] mx-auto">
          <Search mainSearch="true" navBar="false" />
        </div>
      </div>
    </>
  );
}

export default MainSearch;
