import Image from "next/image";

function Footer() {
  return (
    <div className="">
      <div className=" flex ">
        <div className="max-w-full ">
          <Image
            src="/icons/phone.png"
            width={500}
            height={500}
            // layout="responsive"
          />
        </div>
        <div className=" flex items-center ">
          <div className="">
            <h3 className=" text-3xl font-bold ">Download</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
