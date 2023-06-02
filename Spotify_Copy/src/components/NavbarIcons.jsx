import {AiFillHome} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import {BiLibrary} from 'react-icons/bi'

export default function NavbarIcons() {
    return (
        <>
        <div id="home" className='flex gap-4 p-1 py-1.5'>
            <AiFillHome className='fill-white text-2xl' id='home_icon'/>
            <label for="home_icon" className='text-white font-extralight font-sans text-sm'>Home</label>
        </div>

        <div id="search" className='flex gap-4 p-1 py-1.5'>
            <GoSearch className='fill-white text-2xl' id='search_icon'/>
            <label for="search_icon" className='text-white font-extralight font-sans text-sm'>Search</label>
        </div>

        <div id="library" className='flex gap-4 p-1 py-1.5'>
            <BiLibrary className='fill-white text-2xl' id='library_icon'/>
            <label for="library_icon" className='text-white font-extralight font-sans text-sm'>Library</label>
        </div>
        </>
    )
}