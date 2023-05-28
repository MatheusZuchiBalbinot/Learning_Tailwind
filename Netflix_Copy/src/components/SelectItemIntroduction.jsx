export default function SelectItemIntroduction () {
    return (
        <div id="selected_item_introduction" className='block'>
            <div className='flex py-2' style={{gap: 20}}>
                <img src='../netflix_logo.png' className='flex' style={{width: 20}}></img>
                <h3 className='my-auto font-mono'> Series </h3>
            </div>
            <h1 className='font-serif text-4xl font-bold'> THE UMBRELLA ACADEMY </h1>
            <h3 className='font-sans text-xl pt-5 font-extralight'> Next Episode </h3>
            <h4 className='font-sans text-xl py-2 font-thin'> Season 1 Episode 2 </h4>
        </div>
    )
}