import { useState } from "react";
import Link from "next/link";

function Dropdown() {
  const [header, setHeader] = useState();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleOnClick = (event) => {
    setHeader(event.target.innerHTML);
    toggle();
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden py-2   ">
        <button
          className="w-[20vh] flex items-center justify-around bg-gray-50"
          onKeyPress={toggle}
          onClick={toggle}
        >
          {header}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>
        {open && (
          <ul className="absolute p-2 bg-gray-50 w-[20vh] rounded-b-lg space-y-2  ">
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
              <Link href="/beauty">
                <a
                  className={header === "Beauty" ? "hidden" : "visible"}
                  onClick={handleOnClick}
                >
                  Beauty
                </a>
              </Link>
            </li>
            <li>
              <Link href="/health-tips">
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
export default Dropdown;
