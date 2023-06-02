import {TbMicrophone2} from 'react-icons/tb'
import {MdDevicesOther, MdFullscreen} from 'react-icons/md'
import {AiFillSound, AiOutlineMenu} from 'react-icons/ai'

export default function FooterRightSideIcons () {
    return (
        <>
            <TbMicrophone2 className="fill-gray-400"/>
            <AiOutlineMenu className="fill-gray-400"/>
            <MdDevicesOther className="fill-gray-400"/>	
            <AiFillSound className="fill-gray-400"/> 

            <div id="sound_percentage" className="w-24 my-auto h-0.5 bg-gray-800">
                <div id="sound" className="w-12 my-auto h-0.5 bg-gray-500"></div>
            </div>

            <MdFullscreen className="fill-gray-400"/>
        </>
    )
}