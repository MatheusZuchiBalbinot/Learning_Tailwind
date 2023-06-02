import {FcNext, FcPrevious} from 'react-icons/fc'
import {AiOutlineCaretDown} from 'react-icons/ai'

export default function ContentTopBar () {
    return (
        <>
            <div id="previous_and_next" className="flex gap-3">
                <FcPrevious className="p-2 text-4xl bg-gray-950 rounded-full"/>
                <FcNext className="p-2 text-4xl bg-gray-950 rounded-full"/>
            </div>

            <div id="account" className="flex gap-2 rounded-full p-1 bg-gray-950">
                <span className="w-5 h-5 overflow-hidden bg-white rounded-full m-auto ml-1"></span>
                <h3 className="text-white text-sm m-auto"> Diego Scheel F... </h3>
                <AiOutlineCaretDown className="flex m-auto fill-white mr-2"/>
            </div>
        </>
    )
}