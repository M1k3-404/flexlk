import React from "react";
import { Chip } from "@nextui-org/react";

const page = () => {
  return (
    <div>
      <header className=" text-white py-80 text-center ">
        <div className="flex flex-col items-center">
          <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-40 font-thin text-center px-5 md:px-20 md:pt-10">
            Our Services
          </h1>
          <div className="mt-7 w-[40%] hidden xl:block ">
            <Chip className="mr-1 mt-2" size="lg">
              Brand Marketing
            </Chip>
            <Chip className="mr-1 mt-2" size="lg">
              Social Media Marketing
            </Chip>
            <Chip className="mr-1 mt-2" size="lg">
              Content Creation
            </Chip>
            <Chip className="mr-1 mt-2" size="lg">
              UI/UX
            </Chip>
            <Chip className="mr-1 mt-2" size="lg">
              Web Development
            </Chip>
            <Chip className="mr-1 mt-2" size="lg">
              Mobile App Development
            </Chip>
          </div>
        </div>
      </header>

      <section
        id="our-services"
        className="p-10 py-20 my-4 flex flex-col items-start"
      >
        <h2 className="text-3xl font-thin text-left mb-20 w-full">
          Our Services
        </h2>
        <div className="flex w-full">
          {/* Column 1 */}
          <div className="flex-1 pr-5">
            <div className="mb-5">
              <h3 className="text-4xl font-bold mb-2">01</h3>
              <p className="text-xl font-medium mb-20">Brand Marketing</p>
            </div>
            <div className="flex flex-col items-end text-right ml-auto">
              <p className="text-xl font-thin mb-4">Service 01</p>
              <p className="text-xl font-thin mb-4">Service 02</p>
              <p className="text-xl font-thin mb-4">Service 03</p>
              <p className="text-xl font-thin mb-4">Service 04</p>
              <p className="text-xl font-thin mb-4">Service 05</p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-1 bg-white mx-5"></div>

          {/* Column 2 */}
          <div className="flex-1 pl-5">
            <div className="mb-5">
              <h3 className="text-4xl font-bold mb-2">02</h3>
              <p className="text-xl font-medium mb-20">Another Service</p>
            </div>
            <div className="flex flex-col items-end text-right ml-auto">
              <p className="text-xl font-thin mb-4">Service 01</p>
              <p className="text-xl font-thin mb-4">Service 02</p>
              <p className="text-xl font-thin mb-4">Service 03</p>
              <p className="text-xl font-thin mb-4">Service 04</p>
              <p className="text-xl font-thin mb-4">Service 05</p>
            </div>
          </div>
        </div>
      </section>
    

      <section
  id="get-our-services"
  className="p-5 py-20 flex flex-col items-center justify-center"
>
  {/* Separator */}
  <div className="h-32 w-1 bg-white my-10"></div>

  {/* Text */}
  <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-center text-white leading-tight">
    Get our
    <br />
    Services now!
  </h2>

  {/* Button */}
  <button
className="mt-10 px-8 py-4 border-2 border-white bg-transparent text-white text-xl font-thin rounded-md hover:bg-white hover:text-black transition-colors"
>
    Contact us
  </button>
</section>

    </div>
  );
};

export default page;
