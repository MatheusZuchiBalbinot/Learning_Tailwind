import SelectItemIntroduction from './components/SelectItemIntroduction';
import SideBarElements from './components/SideBarElements';

export default function App() {
  return (
    <div id="main" className="grid grid-cols-10 h-screen">

      <div id="sidebar" className="bg-slate-950 text-center align-baseline flex">

        <div id="sidebar_elements" className="m-auto">
          <SideBarElements />
        </div>

      </div>

      <div id="main_content" className="col-span-9 bg-cover text-white bg-slate-950 grid grid-rows-5">

        <div id="selected_element_backscreen" className='block row-span-3 bg-background_poster bg-cover'>

            <div id='selected_element_introduction' className='flex justify-center flex-col h-full bg-gradient-to-l from-transparent to-slate-950 from-1% via-slate-900 via-65% to-slate-950 to-80%'>

              <SelectItemIntroduction />

            </div>

        </div>

        <div id="keep_whatching" className='row-span-1'>

          <h3 className='font-sans font-semibold text-xl py-1'> Continue Watching for Stefanie </h3>

          <div id="card" className='flex py-2 px-1'>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>          
          </div>

        </div>

        <div id="famous_items" className='row-span-1 flex flex-wrap'>

          <h3 className='font-sans font-semibold text-xl py-1'> Trending Now </h3>

          <div id="bottom_card" className='flex py-2 px-1 justify-center'>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
            <img src='https://yt3.googleusercontent.com/ytc/AGIKgqO6Kh4PFnawrKRRSfhBZ2V_v_U_YYWGlx-D2zi24A=s176-c-k-c0x00ffffff-no-rj' className='w-48 mr-3'></img>
          </div>

        </div>

      </div>

    </div>
  )
}