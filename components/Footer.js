import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className=" bg-[#F7F6F2] ">
      <div className=" flex md:flex-row items-center  flex-col">
        <div className=" z-0 max-h-96 md:max-h-full ">
          <Image
            src="/icons/phone.png"
            width={500}
            height={500}
            // set imagewidth and height acc to screen
            // layout="responsive"
          />
        </div>
        <div className=" flex items-center ">
          <div className="flex items-center flex-col  ">
            <div className="">
              <h3 className=" mr-auto p-2 md:p-4 text-4xl lg:text-5xl font-semibold tracking-wider  leading-11 md:leading-5 ">
                <span className="  text-[#077861] font-mulish font-  lg:text-5xl text-4xl font-bold ">
                  Download{" "}
                </span>
                the app for{" "}
                <span className="flex justify-center items-center pt-3 md:pt-6 text-4xl lg:text-5xl font-semibold tracking-wider leading-5 ">
                  free
                </span>
              </h3>
            </div>
            <div className="flex items-start md:items-center md:flex-row flex-col ">
              <Link href="/">
                <a className="py-0 md:pt-0 md:py-2 pl-1 w-56 h-24 transition transform hover:scale-105 ">
                  <Image
                    src="/icons/google-play.png"
                    width={240}
                    height={100}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className=" pl-4 md:pl-2 py-0 md:py-2 md:pt-3 w-56 h-24  transition transform md:hover:scale-105 ">
                  <Image src="/icons/apple.png" width={240} height={72} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg- ">
        <h3 className="p-3 text-xl font-semibold text-gray-700 font-mulish">
          Our Payment Partners
        </h3>
        <div className="flex  justify-around p-4 ">
          <div className="flex md:space-x-16 md:flex-row flex-col md:justify-around items-center p-4 ">
            <div>
              <Image src="/icons/gpay.png" width={60} height={30} />
            </div>
            <div>
              <Image src="/icons/paytm.png" width={60} height={55} />
            </div>
            <div>
              <Image src="/icons/phone-pay.png" width={40} height={40} />
            </div>
            <div className="pt-2">
              <Image src="/icons/mastercard.png" width={60} height={40} />
            </div>
          </div>
          <div className="flex md:flex-row md:space-x-16 flex-col items-start justify-start md:items-center md:justify-center p-4 ">
            <div className="pt-2">
              <Image src="/icons/visa.png" width={60} height={20} />
            </div>
            <div className="pt-2">
              <Image src="/icons/rupay.png" width={70} height={50} />
            </div>
            <div>
              <Image src="/icons/upi.png" width={90} height={50} />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center mx-5 ml-6">
            <p className="text-md pd-3 m-3 font-mulish font-semibold">
              Connect with us
            </p>
            <div className="flex">
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105 ">
                  <Image src="/icons/instagram.svg" width={30} height={30} />
                </a>
              </Link>
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105 ">
                  <Image src="/icons/facebook.svg" width={30} height={30} />
                </a>
              </Link>
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105">
                  <Image src="/icons/twitter.svg" width={30} height={30} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className=" p-3 text-gray-600 font-mulish text-lg font-bold ">
            © 2021{" "}
          </p>
          <Link href="/">
            <a className="p-3">
              <Image src="/images/logo.png" width={160} height={80} />
            </a>
          </Link>
          <p className=" text-gray-600 p-1 font-mulish text-md font-bold ">
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
