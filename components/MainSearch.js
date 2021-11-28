import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";

function MainSearch() {
  const router = useRouter();
  const { page } = router.query;

  const [show, setShow] = useState(true);

  const checkScrollY = () => {
    if (window.scrollY < 220) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY);
  });

  return (
    <>
      <div
        className={
          "w-full h-[95vh] flex justify-center items-center md:h-screen opacity-80  bg-no-repeat bg-cover  " +
          (page === "Beauty"
            ? "bg-beauty"
            : page === "Health-tips"
            ? "bg-health-tips"
            : "bg-back-ground")
        }
        // styles="background-image:url('/images/bg.jpg')"
      >
        <div
          className={
            "transition-all duration-100 transform" +
            (show ? " translate-y-full" : " translate-y-0")
          }
        >
          <Search navBar={false} />
        </div>
      </div>
    </>
  );
}

export default MainSearch;
