import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='absolute top-0 left-0 w-full z-50 bg-white border-b border-gray-200'>
            <div className='flex min-h-[50px] md:min-h-[56px] lg:min-h-[60px] items-center px-4 md:px-5 lg:px-8 xl:px-10 justify-between'>
                <div className='flex items-center gap-3 md:gap-4 lg:gap-8 xl:gap-10'>
                    <div>
                        <span className='text-lg md:text-xl lg:text-2xl font-bold'>VOLTE.</span>
                    </div>
                    <div className='hidden md:flex gap-2 md:gap-3 lg:gap-6 xl:gap-8 border border-gray-200 px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-md bg-white text-xs md:text-sm lg:text-base text-[#4F4F4F]'>
                        <a href="#about">About Us</a>
                        <a className='flex gap-1 items-center'>Product <ChevronDown className='text-[#4F4F4F] h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5' /></a>
                        <a href="#client">Client</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className='hidden md:flex gap-1.5 md:gap-2'>
                    <button className="flex gap-2 bg-white font-semibold text-black py-1.5 md:py-2 px-2 md:px-3 lg:px-4 rounded-md border border-gray-200 text-xs md:text-sm lg:text-base">Book Call</button>
                    <button className="flex gap-1.5 md:gap-2 items-center bg-black text-white py-1.5 md:py-2 px-2 md:px-3 lg:px-4 rounded-md border border-gray-200 text-xs md:text-sm lg:text-base">Order Now <ArrowRight className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5' /></button>
                </div>
                {/* Mobile hamburger */}
                <button className='md:hidden p-1' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='md:hidden border-t border-gray-200 bg-white px-4 py-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 text-sm text-[#4F4F4F]'>
                        <a href="#about">About Us</a>
                        <a className='flex gap-1 items-center'>Product <ChevronDown className='text-[#4F4F4F] h-4 w-4' /></a>
                        <a href="#client">Client</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className='flex gap-2'>
                        <button className="flex-1 bg-white font-semibold text-black py-2 px-3 rounded-md border border-gray-200 text-sm">Book Call</button>
                        <button className="flex-1 flex gap-2 items-center justify-center bg-black text-white py-2 px-3 rounded-md text-sm">Order Now <ArrowRight className='h-4 w-4' /></button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar