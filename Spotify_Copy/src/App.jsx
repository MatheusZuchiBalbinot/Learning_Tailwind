import NavbarIcons from "./components/NavbarIcons"
import NavbarCircles from "./components/NavbarCircles"
import PlayListItems from "./components/PlayListItems"
import AboutSongsComponents from "./components/AboutSongsComponents"
import ContentTopBar from "./components/ContentTopBar"
import RecomandationsCards from "./components/RecomendationsCards"
import MakeForYouCards from "./components/MakeForYouCards"
import FooterLeftSide from "./components/FooterLeftSide"
import FooterRightSideIcons from "./components/FooterRightSideIcons"
import FooterMiddleIcons from "./components/FooterMiddleIcons"

import "./index.css"

function App() {

  return (
	<div id='main' className="h-screen grid grid-cols-6 grid-rows-6">

		<div id="sidebar" className="col-span-1 row-span-5 bg-black p-4">

				<div id="circles" className='flex gap-x-1'>
					<NavbarCircles />
				</div>

				<div id="navbar_icons" className=''>
					<NavbarIcons />
				</div>

				<div id="about_songs">
					<AboutSongsComponents />
				</div>

				<div id="playlist" className="overflow-y-auto h-72 text-white font-thin font-sans text-xs gap-y-4">
					<PlayListItems />
				</div>

		</div>

		<div id="main_content" className="overflow-y-auto px-7 row-start-1 col-start-2 col-span-5 row-span-5 bg-gradient-to-b from-teal-950 to-gray-950">

			<div id="content_topbar" className="py-5 flex justify-between">
				<ContentTopBar />
			</div>
			<div id="recomendations">
				<h1 className="text-white pb-2 text-2xl font-medium"> Good afternoon </h1>

				<div id="recomendations_cards" className="flex flex-wrap py-3 gap-4">
					<RecomandationsCards />
				</div>
				

				<div id="made_for">
					<div id="made_for_top_bar" className="flex justify-between">

						<h1 className="text-white py-2 text-xl font-medium"> Made For Diego Schell Fernandes </h1>
						<p className="text-white my-auto font-thin text-xs">Show All</p>

					</div>
					<div id="made_for_cards" className="flex flex-wrap gap-x-4">

                    	<MakeForYouCards />

					</div>
				</div>
			</div>

		</div>

		<div id="footer" className="col-span-7 row-start-6 bg-gray-950 border-t-2 border-slate-900 grid grid-cols-4">

			<div id="footer_Left_side" className="cols-span-1 px-3 my-auto flex">
				<FooterLeftSide />
			</div>	

			<div id="footer_middle" className="col-start-2 col-span-2 grid grid-rows-2">
				<div id="middle_icons" className="m-auto flex gap-x-3 rows-span-1">
					<FooterMiddleIcons /> 
				</div>
				<div id="video_bar_main" className="flex row-span-1 row-start-2 m-auto">
					<p className="text-white p-2 text-medium font-base">0:33</p>
					<div id="video_bar" className="w-96 my-auto h-0.5 bg-gray-800 flex">
						<div id="video_bar_progression" className="w-36 my-auto h-0.5 bg-gray-500"></div>
					</div>
					<p className="text-white p-2 text-medium font-base">1:46</p>
				</div>
			</div>

			<div id="footer_right_side" className="col-start-4 flex">
				<div id="right_side_icons" className="m-auto flex gap-x-3 text-xl">
					<FooterRightSideIcons />
				</div>
			</div>

		</div>

	</div>
  )
}

export default App
