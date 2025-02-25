export function Button({className, children, onClick}){
    <button className='text-color-softBlue w-fit  hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white md:px-10 px-4 md:py-3 py-2 my-2 flex items-center rounded-lg border-2 border-color-softBlue cursor-pointer'
        onClick={() => (onClick)}
        >
        {children}
    </button>
}
