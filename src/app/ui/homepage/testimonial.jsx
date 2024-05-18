import { Avatar } from "@nextui-org/react";

export default function Testimonial() {
    return (
        <div className='w-[90%] sm:w-[75%] mx-auto p-10 rounded-lg bg-black'>
            <p className='text-xs md:text-lg font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='mt-8 flex justify-between'>
                <div className="flex align-middle">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg" className="hidden md:block" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" className="md:hidden" />
                    <div className='ml-4'>
                        <p className='text-xs md:text-lg font-semibold'>John Doe</p>
                        <p className='text-xs md:text-md font-light'>CEO, Company</p>
                    </div>
                </div>
                <div className="my-auto hidden md:block">
                    <p className='text-3xl font-light tracking-widest'>★★★★★</p>
                </div>
            </div>
        </div>
    );
}