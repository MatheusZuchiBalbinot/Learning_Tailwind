import {AiFillPlayCircle} from 'react-icons/ai'
import {MdOutlineSkipNext, MdOutlineSkipPrevious} from 'react-icons/md'
import {FaRecycle} from 'react-icons/fa'
import {CiShuffle} from 'react-icons/ci'

export default function FooterMiddleIcons () {
    return(
        <>
        <CiShuffle className="fill-green-500 text-xl m-auto"/>
        <MdOutlineSkipPrevious className="fill-white text-xl  m-auto"/>
        <AiFillPlayCircle className="fill-white text-4xl  m-auto"/>
        <MdOutlineSkipNext className="fill-white text-xl  m-auto"/>
        <FaRecycle className="fill-white text-xl m-auto"/>
        </>
    )
}