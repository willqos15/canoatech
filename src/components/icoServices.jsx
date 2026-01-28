export default function IcoServices({ titulo, ico }) {

    return (

        <div className='flex flex-col gap-y-1 justify-center items-center'>

            <span className='bg-[#367DED] h-30 w-30 rounded-full flex justify-center items-center text-white text-[80px]'>
                {ico}
            </span>

            <h3>{titulo}</h3>

        </div>

    )
}