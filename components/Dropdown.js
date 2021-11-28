import { useState } from "react";
import Link from "next/link";
import onClickOutside from "react-onclickoutside";
import { useRouter } from "next/router";

function Dropdown() {
  const router = useRouter();
  const { page } = router.query;

  const [header, setHeader] = useState(page ? page : "Medicine");
  const [open, setOpen] = useState(false);
  Dropdown.handleClickOutside = () => setOpen(false);

  const toggle = () => setOpen(!open);
  const handleOnClick = (event) => {
    setHeader(event.target.innerHTML);
    toggle();
  };

  return (
    <>
      <div
        role="button"
        className="bg-white w-full h-full  rounded-lg overflow-hidden py-2   "
      >
        <button
          className="flex w-full h-full  items-center justify-around bg-gray-50"
          onKeyPress={toggle}
          onClick={toggle}
        >
          {header}
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-4 h-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
        {open && (
          <ul className="absolute p-2 z-10 bg-gray-50 w-[14vh] md:w-[20vh] rounded-b-lg space-y-2  ">
            <li>
              <Link href="/">
                <a
                  className={header === "Medicine" ? "hidden" : "visible"}
                  onClick={handleOnClick}
                >
                  Medicine
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Beauty">
                <a
                  className={header === "Beauty" ? "hidden" : "visible"}
                  onClick={handleOnClick}
                >
                  Beauty
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Health-tips">
                <a
                  className={header === "Health Tips" ? "hidden" : "visible"}
                  onClick={handleOnClick}
                >
                  Health Tips
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
