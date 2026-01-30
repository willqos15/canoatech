

export default function Home() {

    return (<>

        <section id="inicio" className="bg-[#367DED] xl:min-h-screen sm:min-h-150  flex justify-center rounded-b-full w-full flex-col items-center  text-white sm:py-20 pt-20 pb-10 -mt-px">

            <h1 className='font-extrabold lg:text-8xl sm:text-7xl text-4xl'>CANOA TECH</h1>
            <h2 className='lg:text-5xl sm:text-4xl text-xl font-extralight'>Navegando em soluções</h2>

            <a
                href="#sobre"
                className='bg-white  text-[#3170D4] hover:bg-[#3170D4] hover:text-white transition duration-300 h-fit px-5 py-1 mt-3 rounded-2xl sm:text-2xl text-md font-bold'>
                Conheça-nos
            </a>

        </section>

    </>)
}