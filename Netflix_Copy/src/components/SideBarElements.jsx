import { BiSearch } from 'react-icons/bi';
import { BiHome } from 'react-icons/bi';
import { MdCallMissedOutgoing } from 'react-icons/md';
import { SlScreenDesktop } from 'react-icons/sl';
import { TfiControlShuffle  } from 'react-icons/tfi';
import { MdAdd  } from 'react-icons/md';
import { BsBoxes } from 'react-icons/bs'
import { FiPlay  } from 'react-icons/fi';

export default function constSideBarElements () {
    return (
        <>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <BiSearch className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <BiHome className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <FiPlay className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <MdCallMissedOutgoing className="text-3xl"/>
        </div>
        
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <SlScreenDesktop className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <BsBoxes className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <MdAdd className="text-3xl"/>
        </div>
        <div id='one_element' className='p-2 text-white cursor-pointer hover:border-b-2 hover:border-solid hover:border-red-600'>
            <TfiControlShuffle className="text-3xl"/>
        </div>
        </>
    )
}