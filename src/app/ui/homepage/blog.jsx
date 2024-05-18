import Link from "next/link";

export default function Blog() {
    return(
        <div className='w-full col-span-2 md:col-span-1 xl:col-span-2 aspect-[12/13] lg:aspect-video mx-auto mt-5 p-5 bg-[#0c0c0c] rounded-lg flex'>
            <div className="w-full px-5 flex flex-col justify-between">
                <div className="overflow-hidden">
                    <p className="text-xl md:text-2xl">Heading</p>
                    <div className="pb-1">
                        <p className="mt-3 text-xs md:text-sm font-light text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="pt-1 px-2 mt-3 flex justify-between border-t-1 border-white">
                    <p className="text-xs md:text-sm">01/05/2024</p>
                    <Link href="#">
                        <p className="text-xs md:text-sm underline">Read More</p>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}