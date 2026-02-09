import { ArrowRight, ChevronDown } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 flex min-h-[60px] items-center gap-10 px-10 bg-white justify-between'>
            <div className='flex items-center gap-4'>
                <div>
                    <span className='text-2xl font-bold'>VOLTE.</span>
                </div>
                <div className='flex gap-8 border border-gray-200 px-4 py-2 rounded-md bg-white text-[#4F4F4F]'>
                    <span>About Us</span>
                    <span className='flex gap-1 items-center'>Product <ChevronDown className='text-[#4F4F4F] h-5 w-5' /></span>
                    <span>Client</span>
                    <span>Services</span>
                    <span>Contact</span>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className="flex gap-2 bg-white font-semibold text-black py-2 px-4 rounded-md border border-gray-200">Book Call</button>
                <button className="flex gap-2 items-center bg-black text-white py-2 px-4 rounded-md border border-gray-200">Order Now <ArrowRight className='h-5 w-5' /></button>
            </div>
        </nav>
    )
}

export default Navbar