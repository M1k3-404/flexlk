import React from "react";
import Image from "next/image";
import { Marquee } from "./Marquee";

const page = () => {
  return (
    <div>
      <header className=" text-white py-80 text-center">
        <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-40 font-thin text-center px-5 md:px-20 md:pt-10">
          Hello, we are Flex.
        </h1>
      </header>

      <section
        id="our-journey"
        className="p-10 py-80 my-10 flex justify-between items-start"
      >
        <h2 className="text-3xl font-thin text-left mb-9">Our Journey</h2>
        <p className="text-right max-w-xl mt-20 font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </p>
      </section>

      <section id="scroll" className="p-10 my-1 ">
        <Marquee
          text=" # 24/7 Support. # Teamwork. # Friendly Support. "
          speed={0.5}
        />
      </section>

      <section
        id="meet-our-team"
        className="p-10 py-20 md:py-80 my-10 flex-col md:flex-row justify-between items-start"
      >
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:order-2" style={{ marginTop: "-200px" }}>
            <img
              src="https://images.unsplash.com/photo-1581090690925-3898802525e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Image"
              className="w-full  md:w-80 md:h-auto "
            />
          </div>
          <div className="md:order-1 ">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="md:order-1 flex-grow">
                <h1 className="text-5xl font-weight: bold mb-5 md:mb-0 md:mr-10">
                  {" "}
                  Meet Our Team!
                </h1>
                <p className="text-left max-w-xl mt-4 font-thin"></p>
              </div>
            </div>

            <p className="text-left max-w-xl mt-4 font-thin">
              Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
              Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
              convallis tristique sem. Proin ut ligula vel nunc egestas
              porttitor.
            </p>
            <a href="/careers" className="flex items-center mt-4 font-thin ">
              Join our team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
