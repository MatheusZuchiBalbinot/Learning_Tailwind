
import {AiOutlineHeart} from 'react-icons/ai'

export default function FooterLeftSide () {
    return (
        <>
            <div id="card" className="flex rounded bg-transparent w-64">
                <div className="w-14 h-14 bg-red-500 rounded"></div>
                <div id="teste" className="p-1 my-auto px-3">
                    <h1 className="text-white my-auto font-medium text-sm"> Grade A (feat. JAWNY) </h1>
                    <p className="text-white text-xs font-extralight"> spill tab, JAWNY</p>
                </div>
                <AiOutlineHeart className="fill-white text-xl my-auto m-1"/>
            </div>
        </>
    )
}