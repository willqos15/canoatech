import IcoBusin from "../components/icons/icobusin"
import IcoQuestion from "../components/icons/icoquestion"

export default function About() {
    return(<>

    <section id='sobre'
                className='scroll-mt-12 flex mx-auto justify-center items-center sm:flex-row flex-col lg:w-3xl md:w-2xl w-full text-left sm:py-40 py-10'>
                    
                <IcoQuestion className='lg:h-64 md:h-40 h-20'/>    
    
                <div className='mx-10 sm:w-140 w-11/12 sm:text-left text-center'>
                    <h2 className="
                    font-extrabold pt-5 text-2xl text-[#46689f]">
                        O QUE É A <strong className='text-[#367DED] '>CANOA TECH</strong>?
                    </h2>
                    <p className='sm:text-2xl text-md sm:pt-10 pt-3 font-light text-[#46689f]'>
                        É uma iniciativa criado pelo desenvolvedor <strong> William Queiroz de Oliveira Souza</strong> focada em criar soluções digitais personalizadas.

                
                    </p>
                </div>
    
            </section>
    
    
            <section
                className='flex mx-auto justify-center items-center sm:flex-row flex-col w-full text-left'>
    
    
                <div className='sm:order-1 order-2 px-10 sm:text-left text-center sm:w-140 w-full'>
                    <h2 className="font-extrabold  sm:text-4xl text-2xl text-[#46689f]">
                        QUEM <strong className='text-[#367DED]'>ATENDEMOS</strong>?
                    </h2>
                    <p className='sm:text-2xl text-md sm:pt-10 pt-3 font-light text-[#46689f]'>
                        Pequenas e médias empresas, autônomos, empreendedores, organizações e associações de <strong>Altamira - Pará, Região Xingu</strong> e de outras localidades.
                    </p>
                </div>

                <IcoBusin className='sm:order-2 order-1 lg:h-64 md:h-40 h-24 mb-3'/>
    
            </section>


        </>)
}