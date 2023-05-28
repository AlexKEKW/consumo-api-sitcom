import './Input.css'

function Input() {

    return (

        <div className="App h-screen flex justify-center items-center bg-slate-400 ">
            <label className='relative mb-60'>
                <input type="text" placeholder="Input" className='h-20 w-96 px-6 text-4xl text-slate-800 bg-slate-400 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 focus:h-16' />
                <span className='text-4xl text-white text-opacity-80 bg-slate-400 absolute left-5 top-4 px-1 transition duration-200 input-text select-none cursor-text focus:bg-none'>Pesquisar</span>
            </label>
        </div>


    )
}


export default Input