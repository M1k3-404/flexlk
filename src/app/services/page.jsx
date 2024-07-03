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
        className="p-10 py-80 my-10 flex justify-between items-start"
      >
        <h2 className="text-3xl font-thin text-left mb-9 w-full">
          Our Services
        </h2>

        <div className="flex w-full">
          {/* Column 1 */}
          <div className="flex-1 pr-5">
            <div className="mb-5">
              <h3 className="text-xl font-medium">01. Brand Marketing</h3>
            </div>
            
          </div>

          {/* Separator */}
          <div className="w-1  bg-white"></div>

          {/* Column 2 */}
          <div className="flex-1 pl-5">
            <div className="mb-5">
              <h3 className="text-xl font-medium">03. Another Service</h3>
            </div>
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
