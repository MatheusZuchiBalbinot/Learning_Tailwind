import {IoMdAdd} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'

export default function AboutSongsComponents () {
    return (
        <>
            <div id="add_to_playlist" className="flex mt-5 p-1 gap-4">
                <IoMdAdd id="add_icon" className="fill-black text-xl bg-slate-400 rounded-sm"/>
                <label for="add_icon" className="text-white flex mx-0 font-extralight font-sans text-sm">Create Playlist</label>
            </div>

            <div id="liked_songs" className="flex m-auto p-1 gap-4">
                <AiFillHeart id="heart_icons" className="fill-white text-xl bg-gradient-to-r from-indigo-500 to-indigo-200 rounded-sm"/>
                <label for="heart_icons" className="text-white flex mx-0 font-extralight font-sans text-sm">Liked Songs</label>
            </div>

            <div id="line" className="p-2 border-b border-solid border-slate-900 rounded-sm"></div>
        </>
    )
}