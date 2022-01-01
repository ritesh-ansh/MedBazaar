import Image from "next/image";
import { useEffect } from "react";

function Flatlist({ images }) {
  //   img.forEach((image) => {
  //     console.log(image);
  //   });

  const handleClickLeft = () => {
    document.getElementById("flatlist").scrollLeft -= 350;
  };
  const handleClickRight = () => {
    document.getElementById("flatlist").scrollLeft += 350;
  };
  return (
    <div className="max-h-[200px] relative  overflow-hidden ">
      <div
        role="button"
        onClick={handleClickLeft}
        className="absolute z-10 left-3 bg-white rounded-full top-[40%] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>

      <div
        style={{ scrollBehavior: "smooth" }}
        id="flatlist"
        className="flex w-full scrollbar-hide space-x-3 flex-row overflow-x-auto mt-1  p-1 "
      >
        {images.map((image) => {
          <div className="shadow-md   ">
            {/* <FlatlistImage src={image} /> */}
            {console.log(image)}
          </div>;
        })}
      </div>
      <div
        role="button"
        onClick={handleClickRight}
        className="absolute right-3 z-10 bg-white rounded-full top-[40%] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Flatlist;

export function FlatlistImage({ src }) {
  return (
    <div className="w-[350px] rounded overflow-hidden h-[180px] ">
      <Image src={src} width={350} height={180} layout="responsive" />
    </div>
  );
}
