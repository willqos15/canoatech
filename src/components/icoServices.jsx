export default function IcoServices({ titulo, ico }) {

    return (

        <div className='flex flex-col gap-y-1 justify-center items-center'>

            <span className='bg-[#367DED] hover:bg-[#3171D5] sm:h-32 sm:w-32 h-20 w-20 rounded-full flex justify-center items-center text-white sm:text-[80px] text-5xl' aria-hidden="true">
                {ico}
            </span>

            <h3 className="sm:text-base text-sm">{titulo}</h3>

        </div>

    )
}